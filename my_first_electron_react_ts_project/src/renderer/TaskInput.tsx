import React, { useState, useRef } from 'react';

export default function TaskInput() {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const handleSubmit = async () => {
    if (!text.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Submitted text:', text);
    
    // Reset form
    setText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    
    setIsSubmitting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="app">
      <main className="app-main">
        <div className="card">
          <div className="card-header">
            <h1>Enter your task</h1>
          </div>
          <div className="card-body">
            <div className="chat-textarea-wrapper">
              <textarea
                ref={textareaRef}
                className="chat-textarea"
                value={text}
                onChange={handleTextChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your message here... (Cmd/Ctrl + Enter to send)"
                style={{ overflow: 'hidden', width: '100%' }}
                rows={6}
              />
            </div>
            <div className="action-row">
              <button
                className="primary-button"
                onClick={handleSubmit}
                disabled={!text.trim() || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" aria-hidden></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="icon" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16">
                        <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Send</span>
                  </>
                )}
              </button>
            </div>
            <div className="chat-hint subtle">Press Cmd/Ctrl + Enter to send quickly</div>
          </div>
        </div>
      </main>
    </div>
  );
}