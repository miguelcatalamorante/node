if (req.url === '/create-user') {

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
        res.end();
    });
}