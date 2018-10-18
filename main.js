/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

const {Text} = require("scenegraph");
const { alert, error } = require("./lib/dialogs.js");

function tategakiShiyo(selection) {
    // Go to Plugins > Development > Developer Console to see this log output
    if (selection.items[0] instanceof Text) {
        const textObj = selection.items[0];
        textObj.text = textObj.text.split("").join("\n");
    }
    else {
        showAlert();
    }
}

async function showAlert() {
	/* we'll display a dialog here */
    await alert("Select a text object",
        "You'll need to selet a text object to create vertical writing.");
}

module.exports = {
    commands: {
        myPluginCommand: tategakiShiyo
    }
};
