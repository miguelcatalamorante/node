const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(decodeURIComponent(username));
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        return;
    }
});
server.listen(3000);