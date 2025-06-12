import http from 'http';

const PORT = process.env.PORT;
const users = [
    { id: 1, name: 'Wisdom Dauda' },
    { id: 2, name: 'Kwopnan Dauda' },
    { id: 3, name: 'Dangriang Dauda' }
];

//Logger             res.setHeader('Content-Type', 'application/json')

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}
//

//JSOM Middleware
const jsonMiddleWare = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')

    next()
}


//Route Handle for GET /api/uers/
const getUserHander = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}


//Route Handle for GET /api/uers/:id
const getUserIdHander = (req, res) => {
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
}

//Not Found Handler
const notFoundHandler = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end("Route not Found")
}

//ROute Handler for POST /api/users

const createUserHandler = (req, res) => {
    let body = '';

    //Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();

    });
    req.on('end', () => {
        const newuser = JSON.parse(body);
        users.push(newuser);
        res.statusCode = 201;
        res.write(JSON.stringify(newuser));
        res.end();
    })
}


const server = http.createServer((req, res) => {
    logger(req, res, () => {

        jsonMiddleWare(req, res, () => {
            if (req.url == "/api/users" && req.method === "GET") {
                getUserHander();
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
                getUserIdHander(req, res);
            } else if (req.url == "/api/users" && req.method === "POST") {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }



        })
    })
});
server.listen(PORT, () => {
    console.log(`Serve on ${PORT}`)
})