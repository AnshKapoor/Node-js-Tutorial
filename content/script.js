var readline = require('readline');
var util = require('util');
var RL = readline.createInterface(process.stdin,process.stdout);
RL.question('What is your name',(name)=>{ // New way to create a function in ES6
    RL.setPrompt('${name}how old are you');
    RL.prompt();
    RL.on('line',(age)=>{
        if(age<18){
            util.log(`${name.trim()} because you are ${age} years old,you cannor proceed`);
            RL.close();        
        }

    })
})