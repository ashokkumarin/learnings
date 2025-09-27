import yfinance as yf
import time

symbol = "RELIANCE.NS"  # NSE Reliance
   
def get_price(symbol):
    try:
        stock = yf.Ticker(symbol)
        hist = stock.history(period="1mo")
        price = hist['Close'].iloc[-1]  # <-- use iloc[-1] instead of [-1]
        return price
    except Exception as e:
        print(f"Error fetching price: {e}")
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
