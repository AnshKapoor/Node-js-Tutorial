const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hi guys its ansh');
});
server.listen(9111);