var http=require('http');

var server=http.createServer(
    function(req,res){
        res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'})
        res.write('hello,world');
        res.end();
    }
);

const PORT = 3000;
const HOST = '0.0.0.0';
server.listen(PORT,HOST);
