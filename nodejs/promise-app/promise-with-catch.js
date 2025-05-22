var myPromise = new Promise(function(resolve, reject) {
    let x = 100;
    let y = 200;
    if (x > y) {
        resolve("Problem resolved!");
    } else {
        reject("Problem can't be resolved!");
    }
});

myPromise.then(function(message) {
    console.log(message);
}).catch(function(errorMessage) {
    console.log(errorMessage);
});