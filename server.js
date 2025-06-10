import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const PORT = process.env.PORT;


//Get Current Path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);




const server = http.createServer(async (req, res) => {

    try {
        if (req.method == "GET") {
            let filePath;
            //creating router
            if (req.url == '/') {
                filePath = path.join(__dirname, "public", "index.html");
            } else if (req.url == '/about') {
                filePath = path.join(__dirname, "public", "about.html");
            }
            else {
                throw new Error("Not Found");
            }

            const data = await fs.readFile(filePath);

            res.writeHead(200, { "Content-Type": 'text/html' });
            res.end(data);




            //Chiling with Req

        } else {
            throw new Error('Method not Allowed');
        }
    } catch (error) {
        res.writeHead(500, { "Content-Type": 'text/html' });
        res.end('<h1>Server Error</h1>')


    }


});


server.listen(PORT, () => {
    console.log("Running on" + PORT);
})
