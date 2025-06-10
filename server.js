import http from 'http';
const PORT = 2005;

const server = http.createServer((req, res) => {
    res.write("Wisdom Will Do Backend");
    res.end();

});


server.listen(PORT, () => {
    console.log("Running on"+PORT);
})
