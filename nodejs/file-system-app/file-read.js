const fs = require('fs');
const http = require('http');

// // Read File
// http.createServer(function(request, response) {
//     fs.readFile('demo.html', function(err, data) {
//         response.writeHead(200, {'content-type': 'text/html'});
//         response.write(data);
//         return response.end();
//     })
// }).listen(8088);

// // Append File
// fs.appendFile("hello.txt", "Welcome to file handling in NodeJS!", function(err) {
//     if (err) {
//         console.log("Error in creation!");
//     } else {
//         console.log("File created and saved successfully!");
//     }
// })

// Open File

// // Write File
// fs.writeFile("hello.txt", "I've overwritten this file.", function(err) {
//     if (err) {
//         console.log("Error in creation!");
//     } else {
//         console.log("File rewritten successfully!");
//     }
// })

// // Rename File
// fs.rename("hello.txt", "rename-file.txt", function(err) {
//     if (err) {
//         console.log("Error in creation!");
//     } else {
//         console.log("File renamed successfully!");
//     }
// })

// Delete File
fs.unlink("rename-file.txt", function(err) {
    if (err) {
        console.log("File doesn't exist!");
    } else {
        console.log("File deleted successfully!");
    }
})