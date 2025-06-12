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

readFile();
