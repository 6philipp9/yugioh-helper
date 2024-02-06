const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'Yu-Gi-Oh Helper',
    width: 1920,
    height: 1080,
  });
  mainWindow.maximize();
  mainWindow.setMenu(null);
  const startUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
  });
  mainWindow.loadURL(startUrl);
};

app.whenReady().then(createMainWindow);
