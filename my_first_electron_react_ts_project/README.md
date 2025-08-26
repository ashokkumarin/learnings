# Electron React TypeScript Hello World

A beautiful Hello World application built with Electron, React, and TypeScript. This project demonstrates how to create a modern desktop application with a responsive UI and secure communication between the main and renderer processes.

## Features

- 🚀 **Electron** - Cross-platform desktop application framework
- ⚛️ **React 18** - Modern UI library with hooks
- 🔷 **TypeScript** - Type-safe JavaScript
- ⚡ **Vite** - Fast build tool and dev server
- 🎨 **Modern UI** - Beautiful gradient design with glassmorphism effects
- 🔒 **Secure** - Context isolation and preload scripts
- 📱 **Responsive** - Works on different screen sizes
- 💬 **IPC Communication** - Message passing between main and renderer processes

## Screenshots

The application features:
- App information display (version, platform, Node.js, Chromium, Electron versions)
- Real-time message communication between renderer and main processes
- Beautiful gradient background with glassmorphism cards
- Responsive design that works on different screen sizes

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone or download this project
2. Install dependencies:

```bash
npm install
```

## Development

To run the application in development mode:

```bash
npm run dev
```

This will:
- Start the Vite dev server for the React app
- Compile the TypeScript main process
- Launch Electron with hot reloading

## Building

To build the application for production:

```bash
npm run build
```

This creates optimized builds in the `dist` directory.

## Distribution

To create distributable packages:

```bash
npm run dist
```

This will create platform-specific installers in the `release` directory.

## Project Structure

```
├── src/
│   ├── main/           # Electron main process
│   │   ├── main.ts     # Main process entry point
│   │   └── preload.ts  # Preload script for secure IPC
│   └── renderer/       # React renderer process
│       ├── main.tsx    # React entry point
│       ├── App.tsx     # Main React component
│       ├── App.css     # Component styles
│       └── index.css   # Global styles
├── dist/               # Built files (generated)
├── release/            # Distribution packages (generated)
├── package.json        # Project configuration
├── tsconfig.json       # TypeScript config for renderer
├── tsconfig.main.json  # TypeScript config for main process
├── vite.config.ts      # Vite configuration
└── index.html          # HTML entry point
```

## Available Scripts

- `npm start` - Run the built application
- `npm run dev` - Start development mode with hot reload
- `npm run dev:renderer` - Start only the Vite dev server
- `npm run dev:main` - Compile and run only the main process
- `npm run build` - Build for production
- `npm run build:renderer` - Build only the React app
- `npm run build:main` - Compile only the main process
- `npm run dist` - Create distributable packages
- `npm run dist:dir` - Create distribution directory

## Security Features

- **Context Isolation**: Enabled to prevent direct access to Node.js APIs from renderer
- **Preload Scripts**: Secure communication bridge between main and renderer processes
- **No Node Integration**: Renderer process cannot access Node.js APIs directly
- **Content Security Policy**: Built-in CSP for additional security

## Customization

### Adding New IPC Handlers

1. In `src/main/main.ts`, add new IPC handlers:
```typescript
ipcMain.handle('your-handler', () => {
  return 'your data'
})
```

2. In `src/main/preload.ts`, expose the handler:
```typescript
contextBridge.exposeInMainWorld('electronAPI', {
  // ... existing handlers
  yourHandler: () => ipcRenderer.invoke('your-handler')
})
```

3. In your React components, use the handler:
```typescript
const data = await window.electronAPI.yourHandler()
```

### Styling

The application uses modern CSS with:
- CSS Grid and Flexbox for layout
- CSS Custom Properties for theming
- Glassmorphism effects with backdrop-filter
- Responsive design with media queries

### Adding New Features

- Create new React components in `src/renderer/`
- Add new IPC handlers in `src/main/main.ts`
- Update the preload script in `src/main/preload.ts`
- Add new styles in the respective CSS files

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**: Change the port in `vite.config.ts`
2. **TypeScript errors**: Make sure all dependencies are installed
3. **Build errors**: Clear the `dist` directory and rebuild

### Development Tips

- Use the DevTools (automatically opened in development) to debug
- Check the main process console for IPC communication logs
- Use React DevTools extension for component debugging

## License

MIT License - feel free to use this project as a starting point for your own applications!

## Contributing

Feel free to submit issues and enhancement requests!
