const {app, BrowserWindow, Menu} = require('electron')
Menu.setApplicationMenu(false);
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    icon: './img/icon.png'
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})