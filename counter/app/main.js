const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const isDev = process.env.NODE_ENV === 'development'

let win
let pathname = path.resolve(__dirname, 'build', 'index.html')
if (isDev) {
  pathname = path.resolve(__dirname, '..', 'public/app.html')
}

function createWindow() {
  win = new BrowserWindow({minWidth: 800, minHeight: 600, backgroundColor: '#fff', titleBarStyle: 'hidden-inset', transparent: true})
  win.show()
  win.loadURL(url.format({
    pathname: pathname,
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  isDev && win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  createWindow()
  if (isDev) {
    // devtools
    BrowserWindow.addDevToolsExtension('/Users/jamie/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.5.2_0')
    BrowserWindow.addDevToolsExtension('/Users/jamie/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0')
  }
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

