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
        selectionError: {
            heading: "Select a text object",
            body: "You'll need to selet a text object to create vertical writing."
        },
        alreadyRan: {
            heading: "Text is already vertical",
            body: "The text you've selected is already vertical. Please select a horizontal text object."
        }
    },
    ja: {
        selectionError: {
            heading: "テキストを選択してください。",
            body: "縦書きに変えるためにテキストを選択する必要があります。"
            
        },
        alreadyRan: {
            heading: "縦書きのテキストを選択した",
            body: "選択したテキストは既に縦書きになっていそうです。横書きのテキストを選択してください。"
        }
    }
}

// Main command
function tategakiShiyo(selection) {
    const language = application.appLanguage;

    // If selection is text
    if (selection.items[0] instanceof Text) {
        // Convert to vertical string
        const textObj = selection.items[0];
        
        // If it's vertical, alert the user and exit
        if (isTategaki(textObj.text)) {
            showAlert(language, "alreadyRan");
        }
        // Else, make the text vertical
        else {
           textObj.text = textObj.text.split("").join("\n");
        }
    }
    // Else, alert the user and exit
    else {
        showAlert(language, "selectionError");
    }
}

// Show an alert with localized strings
async function showAlert(language, flag) {
    await alert(uiStrings[language][flag].heading, uiStrings[language][flag].body);
}

// Detect if the text is already vertical
function isTategaki(text) {
    return text.split("\n").length >= text.length / 2; 
}

module.exports = {
    commands: {
        myPluginCommand: tategakiShiyo
    }
};
