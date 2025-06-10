import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {

    try {
        if (req.method == "GET") {
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
                    res.writeHead(400, { "Content-Type": 'text/html' });
                    res.end('<h1>Not Found</h1>')

                }
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
