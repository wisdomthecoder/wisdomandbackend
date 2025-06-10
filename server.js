import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    //creating router
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": 'text/html' });
        res.end('<h1>Welcome to  Micah Dauda</h1>')
    } else
        if (req.url == '/about') {
            res.writeHead(200, { "Content-Type": 'text/html' });
            res.end('<h1>About Micah Dauda</h1>')
        }


        else {

        }
    //Chiling with Req
    console.log(req.url);

});


server.listen(PORT, () => {
    console.log("Running on" + PORT);
})
