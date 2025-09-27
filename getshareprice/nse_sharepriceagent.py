from nsetools import Nse
import time

# Initialize NSE object
nse = Nse()

# Stock symbol (example: Reliance)
symbol = "RELIANCE"

def get_price(symbol):
    retries = 3
    for attempt in range(retries):
        try:
            quote = nse.get_quote(symbol)
            if not quote:
                raise Exception("No data received") # Handle case where no data is returned
            
            print (f"Fetched data: {quote}")  # Debugging line to see the fetched data
            return quote['lastPrice']
        except Exception as e:
            print(f"Attempt {attempt+1} failed: {e}")
            time.sleep(2)
    return None

def run_agent(symbol, interval=30):
    print(f"📈 Starting agent to track {symbol} every {interval} seconds...")
    while True:
        price = get_price(symbol)
        if price:
            print(f"{symbol} → {price}")
        time.sleep(interval)

if __name__ == "__main__":
    run_agent(symbol, interval=10)  # check every 10 seconds
