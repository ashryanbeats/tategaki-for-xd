/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

const { Text } = require("scenegraph");
const { alert } = require("./lib/dialogs.js");
const application = require("application");
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

function tategakiShiyo(selection) {
    const language = application.appLanguage;
    console.log(language);

    // Go to Plugins > Development > Developer Console to see this log output
    if (selection.items[0] instanceof Text) {
        const textObj = selection.items[0];
        textObj.text = textObj.text.split("").join("\n");
    }
    else {
        showAlert(language);
    }
}

async function showAlert(language) {
    /* we'll display a dialog here */

    await alert(uiStrings[language].heading, uiStrings[language].body);
}

module.exports = {
    commands: {
        myPluginCommand: tategakiShiyo
    }
};
