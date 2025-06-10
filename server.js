import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.writeHead(500, {"Content-Type":'application/json'})
    res.end(JSON.stringify({message:"Wisdom is of God"}))
    res.end();

});


server.listen(PORT, () => {
    console.log("Running on"+PORT);
})
