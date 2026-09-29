const http = require ('http');
const server= http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit();
    //Objetos response y programar directamente html
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Mi primera pagina</title></head>');
    res.write('<body><h1>Hola desde mi servidor en Node.js</h1></body>');
    res.write('<html>');
    res.end();
});
server.listen(5600);