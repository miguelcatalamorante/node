const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Assignment 1</title>
                </head>
                <body>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                    </ul>
                </body>
            </html>
        `);
    }
});
server.listen(3000);