const { globalSettings } = require("../utils/setting.js");
var ipcRenderer = require("electron").ipcRenderer;

// Whether mediapipe ready
var started = false;

var modelObj = JSON.parse(localStorage.getItem("modelInfo"));
var modelPath = modelObj.path;
if (globalSettings.forward.enableForwarding)
    ipcRenderer.send(
        "startWebServer",
        parseInt(globalSettings.forward.port),
        JSON.stringify(modelObj),
        globalSettings.forward.supportForWebXR
    );