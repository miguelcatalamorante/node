const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    // PÁGINA PRINCIPAL
    if (url === '/') {

        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write(`
            <body>
                <form action="/create-user" method="POST">
                    <input type="text" name="username">
                    <button type="submit">Send</button>
                </form>

                <a href="/users">Ver usuarios</a>
            </body>
        `);
        res.write('</html>');

        return res.end();
    }


    // GUARDAR USUARIO
    if (url === '/create-user' && method === 'POST') {

        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {

            const parsedBody = Buffer.concat(body).toString();

            const username = parsedBody.split('=')[1];

            const decodedUsername = decodeURIComponent(username);

            fs.appendFile('users.txt', decodedUsername + '\n', (err) => {

                if (err) {
                    console.log(err);
                    return res.end('Error al guardar usuario');
                }
                console.log('Usuario guardado: ' + decodedUsername);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

        return;
    }
    if (url === '/users') {

        fs.readFile('users.txt', 'utf8', (err, data) => {

            res.setHeader('Content-Type', 'text/html');

            if (err || data.trim() === '') {

                return res.end(`
                    <html>
                        <head>
                            <title>Users</title>
                        </head>
                        <body>
                            <h1>Usuarios</h1>
                            <p>No hay usuarios</p>
                        </body>
                    </html>
                `);
            }
            const users = data.trim().split('\n');
            let lista = '';

            users.forEach((user) => {
                lista += '<li>' + user + '</li>';
            });
            res.end(`
                <html>
                    <head>
                        <title>Users</title>
                    </head>
                    <body>
                        <h1>Usuarios</h1>

                        <ul>
                            ${lista}
                        </ul>

                        <a href="/">Volver</a>
                    </body>
                </html>
            `);
        });

        return;
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Page not found</h1>');

});


server.listen(3000);