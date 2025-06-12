import { createServer } from 'http';

const PORT = process.env.PORT;
const user = [
    { id: 1, name: 'Wisdom Dauda' },
    { id: 2, name: 'Kwopnan Dauda' },
    { id: 3, name: 'Dangriang Dauda' }
];


const server = createServer((req, res) => { 
// if (req.ur)
});
server.listen(PORT, () => {
    console.log(`Serve on ${PORT}`)
})