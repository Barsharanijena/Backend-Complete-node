const fs = require('fs');


fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const modifyFileData = data.toUpperCase();
    
    fs.writeFile('output.txt', modifyFileData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }

        console.log('Data written to output.txt successfully!');

        fs.readFile('output.txt', 'utf8', (err, newData) => {
            if (err) {
                console.error('Error reading output file:', err);
                return;
            }
            console.log('Content of output.txt:\n', newData);
        });
    });
});
