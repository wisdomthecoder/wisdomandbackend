import http from 'http';

const PORT = process.env.PORT;
const users = [
    { id: 1, name: 'Wisdom Dauda' },
    { id: 2, name: 'Kwopnan Dauda' },
    { id: 3, name: 'Dangriang Dauda' }
];

//Logger Url
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}
//


const server = http.createServer((req, res) => {
    logger(req, res, () => {


        if (req.url == '/api/users' && req.method == "GET") {
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(users))
            res.end();

        } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
            const id = req.url.split("/")[3];
            const user = users.find((user) => user.id == parseInt(id));

            if (user) {

                res.setHeader('Content-Type', 'application/json')
                res.write(JSON.stringify(user))

            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end("Users not Found")
            }
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end("Route not Found")
        }
    })
});
server.listen(PORT, () => {
    console.log(`Serve on ${PORT}`)
})