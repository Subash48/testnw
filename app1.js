var gui = require('nw.gui');
var currentVersion = gui.App.manifest.version;

document.getElementById("hhhh").innerHTML = "version " + currentVersion;