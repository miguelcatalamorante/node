const http = require('http');

const server = http.createServer((req, res) => {

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>Page not found</h1>
            </body>
        </html>
    `);

});

server.listen(3000);