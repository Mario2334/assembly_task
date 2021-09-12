const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var route_fn = require('./app/routes')
const logger = require("./app/utils/logger");


var server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

server =  route_fn(server)

const PORT = process.env.PORT || 9090;
let appEnv = process.env.APP_ENV;
if(appEnv === "test"){
    module.exports = server;
}
else {
    server.listen(PORT, () => {
        // Listen on on PORT
        logger.info(`Server is running on port ${PORT}.`);
    });
}
