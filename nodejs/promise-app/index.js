var promise = new Promise(function(resolve, reject){
    let nameOne = "Skill Up";
    let nameTwo = "Skill Down";
    if (nameOne == nameTwo) {
        resolve();
    } else {
        reject();
    }
})

// .then
promise.then(function(result) {
    console.log("Welcome, your work is ready!")
}, function(error) {
    console.log("Sorry, your work is not ready!")
});


// .catch
// promise.then(function() {
//     console.log("Promise resolved!");
// }).catch(function(){
//     console.log("Promise rejected!");
// });

