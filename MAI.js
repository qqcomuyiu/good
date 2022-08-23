const {
    app,
    BrowserWindow,
    BrowserView,
    ipcMain,
    nativeTheme,
} = require("electron");
const os = require("os");
const platform = os.platform();
const { Worker } = require("worker_threads");
var worker = null;
// Make profile file on user home dir
const path = require("path");
const storage = require("electron-localstorage");
const fs = require("fs");
const _path = path.join(
    app.getPath("home"),
);
//ipcMain.on("sendBoradcast", function (event, arg) {
   // worker = new Worker(__dirname + "/worker.js");
    //if (worker)
      //  worker.postMessage({ type: "sendBroadcast", arg: JSON.stringify(arg) });
//});
//ipcMain.on("sendBoradcastNew", function (event, arg) {
   // mainWindow.webContents.send("sendRenderDataForward", arg);
    //if (worker)
       // worker.postMessage({ type: "sendBroadcast", arg: JSON.stringify(arg) });
//});
ipcMain.on("startWebServer", function (event, ...arg) {
    worker = new Worker(__dirname + "/webserv/worker.js");
    worker.postMessage({ type: "startWebServer", arg: arg });
});