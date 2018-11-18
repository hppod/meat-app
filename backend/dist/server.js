"use strict";
exports.__esModule = true;
var auth_1 = require("./auth");
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post('/login', auth_1.handleAuthentication);
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
var port = 3001;
var API = "https://localhost:" + port;
https.createServer(options, server).listen(port, function () {
    console.log("Servidor rodando em " + API);
    // tslint:disable-next-line:eofline
});
