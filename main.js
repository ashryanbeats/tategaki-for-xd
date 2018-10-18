/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */


// Require in dependencies
const { Text } = require("scenegraph");
const { alert } = require("./lib/dialogs.js");
const application = require("application");

// Define strings for localization
const uiStrings = {
    en: {
        heading: "Select a text object",
        body: "You'll need to selet a text object to create vertical writing."
    },
    ja: {
        heading: "テキストを選択してください。",
        body: "縦書きをするためにテキストを選択する必要があります。"
    }
}

// Main command
function tategakiShiyo(selection) {
    
    // If selection is text
    if (selection.items[0] instanceof Text) {
        // Convert to vertical string
        const textObj = selection.items[0];
        textObj.text = textObj.text.split("").join("\n");
    }
    else {
        showAlert(application.appLanguage);
    }
}

// Show an alert with localized strings
async function showAlert(language) {
    await alert(uiStrings[language].heading, uiStrings[language].body);
}

module.exports = {
    commands: {
        myPluginCommand: tategakiShiyo
    }
};
