const express = require('./content/node_modules/express');
let app = express();
const port = process.env.PORT || 9999;
app.get('/',(req,res)=>{
    res.send('<h1> Holla </h1>');
});
app.get('/api',(req,res)=>{
   // res.send('<h1> Holla API </h1>');
    res.json({name:'Ansh'});
});
app.listen(port);
console.log('Done');
