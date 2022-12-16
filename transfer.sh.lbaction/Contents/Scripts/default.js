// LaunchBar Action Script

function run(argument) {
    if (argument == undefined) {
        // Inform the user that there was no argument
        LaunchBar.alert('No argument was passed to the action');
    } else {
        let path = argument[0];
        if (File.exists(path)) {
            if (!File.isDirectory(path)) {
                let filename = path.slice(path.lastIndexOf('/'));
                return HTTP.loadRequest('https://transfer.sh/' + encodeURIComponent(filename), {
                    method: 'put',
                    body: File.readData(path),
                    bodyType: 'binary'
                }).data
            } else {
                LaunchBar.alert("This is a directory, not a file")
            }
        } else {
            LaunchBar.alert("Invalid path")
        }
    }
}
