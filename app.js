const { app, BrowserWindow, Menu, shell } = require("electron");

let appWindow

function createWindow() {
    appWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: 'dist/pizza-project/browser/Pizza_Shop_Icon.ico'
    });

    appWindow.loadFile('dist/pizza-project/browser/index.html');
    Menu.setApplicationMenu(null);

    appWindow.on('closed', () => {
        appWindow = null;
    });

    function isExternalLink(url) {
        return !url.startsWith('file://') && !url.includes('localhost');
    }
    
    // Intercept new window events and open external URLs in the default browser
    appWindow.webContents.setWindowOpenHandler(({ url }) => {
        if(isExternalLink(url)) {
            shell.openExternal(url);
            return { action: 'deny' };
        }
        return { action: 'allow' };
      });
    
    // Handle external URLs for navigation events within the same window
    appWindow.webContents.on('will-navigate', (event, url) => {
        if(isExternalLink(url)) {
            event.preventDefault();
            shell.openExternal(url);
        }
    });
}

app.whenReady().then(() => {createWindow()})