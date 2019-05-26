const fs = require('fs');
fs.readdir('./',(err,content)=>{
 if(err) throw err;
 //console.log(content);
});
fs.readFile('abc.txt','UTF-8',(err,content)=>{
    console.log(content);
})