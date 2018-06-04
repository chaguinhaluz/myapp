var http = require("http");

const server = http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.url=='/inicio'){
        response.end('<h1>inicio</h1>')
    }
     else if (request.url=='/contato'){
        response.end('<h1>contato</h1>')
    }

     if (request.url=='/sobre'){
        response.end('<h1>sobre</h1>')
    }
    else{
        response.statusCode = 404;
        response.end('<h1>Not found!</h1>')
    }

});

server.listen(4000);

console.log('Servidor executando em localhost:4000/');
