const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function (name) {
    rl.question("Enter your age: ", function (age) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
        rl.close();
    });
});
