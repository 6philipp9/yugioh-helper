const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'Yu-Gi-Oh Helper',
    width: 960,
    height: 540,
  });
  mainWindow.maximize();
  //mainWindow.setMenu(null);
  mainWindow.webContents.openDevTools();
  const startUrl = url.format({
    pathname: path.join(__dirname, './app/build/index.html'),
    protocol: 'file',
  });
  mainWindow.loadURL(startUrl);
};

app.whenReady().then(createMainWindow);
