import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    
    ///Chiling with Res
    res.writeHead(200, { "Content-Type": 'application/json' })
    res.end(JSON.stringify({message:"Wisdom is of God"}))
    res.end();

    //Chiling with Req
    console.log(req.url);

});


server.listen(PORT, () => {
    console.log("Running on"+PORT);
})
