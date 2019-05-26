const fs = require('fs');
fs.writeFile('data.html','This will be the data written to the file','utf8',(err)=>{
    if(err) return err;
    console.log("the file is saved");
});