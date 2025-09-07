const fs = require("fs");
const path = require("path");

const datafolder = path.join(__dirname, "data");

if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder);
    console.log("data folder created");
}

const filePath = path.join(datafolder, 'example.txt');

fs.writeFileSync(filePath, "hello from node js" );
console.log("file ccreated successfully");

const readContentFormFile = fs.readFileSync(filePath, "utf8");
console.log("File content:", readContentFormFile);

fs.appendFileSync(filePath, '\n new line added ');
console.log('new line');

//async way ofcreating the file 

const asyncFilepath = path.join(datafolder, 'async-example.txt');
fs.writeFile(asyncFilepath, 'hello , async node js' , (err)=>{
    if(err) throw err;
    console.log('Async file is created successfully');

    fs.readFile(asyncFilepath, 'utf8', (err, data)=>{
        if(err) throw err;
        console.log("Async file content:", data);

        fs.appendFile(asyncFilepath,'\n This ia new line', (err,data)=>{
            if(err) throw err;
            console.log('new line added to async file');

            fs.readFile(asyncFilepath, "utf8", (err, updatedData) => {
                if(err) throw err;
                console.log("updated file content", updatedData)
            });
        });
    });
});