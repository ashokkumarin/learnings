import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Electron + React + TypeScript</h1>
        <h2>Hello World!</h2>
      </header>

      <main className="app-main">
        <div className="info-section">
          <div className="info-card">
            <h3>App Information</h3>
            <p><strong>Status:</strong> React is rendering! ✅</p>
            <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with ❤️ using Electron, React, and TypeScript</p>
      </footer>
    </div>
  )
}

export default App
