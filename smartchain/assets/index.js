const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        if (file != 'package.json' &&  file != 'index.js') {
            const current = file;
            const newFolder = file.toLowerCase();

            fs.rename(current, newFolder, function (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Successfully renamed the folder.")
                }
            })
        }


    });
});