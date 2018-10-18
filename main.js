/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

var {Rectangle, Color} = require("scenegraph");

function myPluginCommand(selection) {
    // Go to Plugins > Development > Developer Console to see this log output
    console.log("Plugin command is running!");

    // Insert a red square at (0, 0) in the current artboard or group/container
    var shape = new Rectangle();
    shape.width = 100;
    shape.height = 100;
    shape.fill = new Color("#f00");
    selection.insertionParent.addChild(shape);
}

module.exports = {
    commands: {
        myPluginCommand: myPluginCommand
    }
};
