import fs from "fs";


//callback
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//ReadFileSync - Synchronous version

const data = fs.readFileSync('./text.txt', 'utf8');
console.log(data);