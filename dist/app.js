var app           = require('app'),
    BrowserWindow = require('browser-window'),
    Menu          = require('menu'),
    MenuItem      = require('menu-item')

var menu = new Menu()

menu.append(new MenuItem({ label: 'MenuItem1', click: function() { console.log('item 1 clicked'); } }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));

Menu.setApplicationMenu(menu)

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null

// Quit when all windows are closed.
app.on('window-all-closed', function() { app.quit() })

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Get screen props
  var screenSize = require('screen').getPrimaryDisplay().workAreaSize

  // Create the browser window.
  mainWindow = new BrowserWindow({ 
    width: screenSize.width, 
    height: screenSize.width * (screenSize.width / (screenSize.height - 63)), 
    'title-bar-style': 'hidden' 
  })

  mainWindow.setSize((screenSize.width / 2) * (screenSize.width / (screenSize.height - 63)), screenSize.width / 2)

  // Set aspect ratio
  mainWindow.setAspectRatio(screenSize.width / (screenSize.height - 63))

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html')

  // Open the DevTools.
  // mainWindow.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
})