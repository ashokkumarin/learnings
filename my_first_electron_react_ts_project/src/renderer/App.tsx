import { useState } from 'react'
import './App.css'

function App() {
  const [textValue, setTextValue] = useState('')

  const handleSubmit = () => {
    const trimmed = textValue.trim()
    if (!trimmed) return
    console.log('Submitted value:', trimmed)
    setTextValue('')
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="app">
      <main className="app-main">
        <div className="chat-input">
          <div className="chat-textarea-wrapper">
            <textarea
              className="chat-textarea"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message..."
              aria-label="chat input"
              rows={3}
            />
            <button
              className="chat-send-btn"
              onClick={handleSubmit}
              aria-label="send message"
              disabled={!textValue.trim()}
              title={textValue.trim() ? 'Send (Enter)' : 'Type a message'}
            >
              ↑
            </button>
          </div>
          <div className="chat-hint">Press Enter to send • Shift+Enter for newline</div>
        </div>
      </main>
    </div>
  )
}

export default App
