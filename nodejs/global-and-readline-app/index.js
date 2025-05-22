// Global Objects

// Buffer
const buff = Buffer.from("welcome.txt");
console.log(buff);

// Process
console.log(`Process ID: ${process.pid}`);
console.log(`NodeJS Version: ${process.version}`);

// __dirname and __filename
console.log(__dirname);
console.log(__filename);

// setTimeout() and setInterval()
for(let i=1; i<=5; i++) {
    setTimeout(() => {console.log("Hello!")}, 1000 * i);
}

// setInterval(() => {console.log(new Date().toLocaleTimeString())}, 1000);

// URL and URLSearchParams
const myUrl = new URL('https://www.example.com/?name=anjali');
console.log(myUrl.href);
console.log(myUrl.searchParams.get('name'));
myUrl.searchParams.append('age', '30');
console.log(myUrl.href);