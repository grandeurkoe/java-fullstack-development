// Import the built-in 'http' module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    res.write("<h1>Hello, World!</h1>");
    res.end("<p>-Vishal Kushwaha</p>");
})

server.listen(7800);