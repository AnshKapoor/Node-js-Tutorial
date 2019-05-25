var readline = require('readline');
var RL = readline.createInterface(process.stdin,process.stdout);
RL.question('What is your name',(name)=>{ // New way to create a function in ES6
    console.log(name);
})