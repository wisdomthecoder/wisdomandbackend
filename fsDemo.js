import fs from 'fs/promises';

// import fs from "fs";


// //callback
// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// //ReadFileSync - Synchronous version

// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);


//Promises .then()
/* fs.readFile('./text.txt', 'utf8')
    .then((data) => { console.log(data) })
    .catch((err)=>console.log(err));
 */
///Asyn Await

const readFile = async () => {
    try {

        const data = await
            fs.readFile('./text.txt', 'utf-8');
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

//writeFile()
const writeFile = async () => {
    try {
        const date = new Date();
        await fs.writeFile("./text.txt", 'Hello this is date of exec ' + date);
        console.log('success');
    } catch (error) {
        console.log(error);
    }
    
}

const appendFile = async () => {
    try {
        const date = new Date();
        await fs.appendFile("./text.txt", '\nAppended a line is date of exec ' + date);
        console.log('Append');
    } catch (error) {
        console.log(error);
    }
    
}



writeFile();
appendFile();
readFile();

