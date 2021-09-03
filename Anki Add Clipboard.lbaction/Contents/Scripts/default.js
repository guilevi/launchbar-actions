// LaunchBar Action Script

function run(argument) {
    if (argument == undefined) {
        // Inform the user that there was no argument
        LaunchBar.alert('No back content passed.');
    } else {
        let prefs = File.readJSON(Action.path + '/Contents/Resources/prefs.json');
        let opts = {
            body: {
                action: 'addNote',
                version: 6,
                params: {
                    note: {
                        deckName: prefs.deckName,
                        modelName: prefs.modelName,
                        fields: {
                            front: LaunchBar.getClipboardString(),
                            back: argument,

                        }
                    }
                }
            }
        };
        let res = HTTP.postJSON('http://localhost:8765', opts);
        if(res.error=="Could not connect to the server.") {
            return LaunchBar.alert('Anki does not seem to be running.');
        }
        let resdata=JSON.parse(res.data);
        if(resdata.error!=null) {
            LaunchBar.alert("AnkiConnect Error: "+resdata.error);
        }
    }
}
