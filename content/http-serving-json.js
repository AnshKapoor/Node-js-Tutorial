const http = require('http');
const https = require('https');
const fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/posts';
http.createServer((req,serverRes)=>{
    if(req.method ==='GET' && req.url ==='/posts'){
        https.get(url,(httpres)=>{
            httpres.on('data',data=>{
                httpres.setEncoding('utf8');
                console.log(data);

            });
            httpres.on('end',()=>{
                serverRes.end();
                console.log("its over");
            });
        });
    };
}).listen(4444);