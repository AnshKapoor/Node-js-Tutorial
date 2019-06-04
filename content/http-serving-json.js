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
                serverRes.write(data);

            });
            httpres.on('end',()=>{
                serverRes.end();
                console.log("its over");
            });
        });
    }
    else{
        serverRes.writeHead(404,{'Content-Type':'text/plain'});
        serverRes.end('errr');
    }
}).listen(4444);