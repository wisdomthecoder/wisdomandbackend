import http from 'http';
const PORT = 2005;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", 'text/html'); 
    res.statusCode = 404;
    res.write("<h1>Wisdom Will Do Backend</h1>");
    res.end();

});


server.listen(PORT, () => {
    console.log("Running on"+PORT);
})
