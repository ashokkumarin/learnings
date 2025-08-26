import { contextBridge, ipcRenderer } from 'electron'

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Example: send a message to the main process
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  
  // Example: receive a message from the main process
  onMessage: (callback: (message: string) => void) => {
    ipcRenderer.on('message', (_, message) => callback(message))
  },
  
  // Example: get app version
  getVersion: () => ipcRenderer.invoke('get-version'),
  
  // Example: platform info
  getPlatform: () => ipcRenderer.invoke('get-platform')
})

// TypeScript declarations for the exposed API
declare global {
  interface Window {
    electronAPI: {
      sendMessage: (message: string) => void
      onMessage: (callback: (message: string) => void) => void
      getVersion: () => Promise<string>
      getPlatform: () => Promise<string>
    }
  }
}
