import http from 'http';

const PORT = process.env.PORT;
const user = [
    { id: 1, name: 'Wisdom Dauda' },
    { id: 2, name: 'Kwopnan Dauda' },
    { id: 3, name: 'Dangriang Dauda' }
];


const server = http.createServer((req, res) => { 
    if (req.url == '/api/users' && req.method == "GET") {
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(user))
        res.end();
}
});
server.listen(PORT, () => {
    console.log(`Serve on ${PORT}`)
})