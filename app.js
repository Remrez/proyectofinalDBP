const http = require('http');
const fs = require('fs');

// HTTP => (request, response)

http.createServer((request, response) => {
    const file = request.url == '/' ? './WWW/index.html': `./WWW${request.url}`; 
    fs.readFile(file, (err, data) => {
        if(err) {
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.write("Not Found");
            response.end();
        } else {
            const ext = request.url == '/'? "html" : request.url.split(".").pop();
            switch (ext) {
                case 'html':
                    response.writeHead(200, {"Content-Type":"text/html"});
                break;
                case 'css':
                    response.writeHead(200, {"Content-Type":"text/css"});
                break;
                case 'js':
                    response.writeHead(200, {"Content-Type":"application/js"});
                break;
                //Para el manejo de imágenes
                case 'png':
                    response.writeHead(200, {"Content-Type":"image/png"});
                break;
                case 'jpg':
                    response.writeHead(200, {"Content-Type":"image/jpg"});
                break;
                case 'jpeg':
                    response.writeHead(200, {"Content-Type":"image/jpeg"});
                break;
                case 'gif':
                    response.writeHead(200, {"Content-Type":"image/gif"});
                break;
                case 'ico':
                    response.writeHead(200, {"Content-Type":"image/x-icon"});
                break;
                default: 
                    response.writeHead(200, {"Content-Type":"text/plain"});
            }
            response.write(data);
            response.end();
        }
    });
}).listen(8888);