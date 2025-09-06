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
    const isMetaOrCtrl = e.metaKey || e.ctrlKey
    if (e.key === 'Enter' && isMetaOrCtrl) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="app">
      <main className="app-main">
        <div className="card">
          <div className="card-header">
            <h1>AI Assistant</h1>
            <p>Ask me anything to get started</p>
          </div>
          <div className="card-body">
            <div className="chat-textarea-wrapper">
              <textarea
                className="chat-textarea"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message here... (Cmd/Ctrl + Enter to send)"
                aria-label="chat input"
                rows={6}
              />
            </div>
            <div className="action-row">
              <button
                className="primary-button"
                onClick={handleSubmit}
                disabled={!textValue.trim()}
              >
                <span className="icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16">
                    <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Send</span>
              </button>
            </div>
            <div className="chat-hint subtle">Press Cmd/Ctrl + Enter to send quickly</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
