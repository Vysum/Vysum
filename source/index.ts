import http from 'http';
import express from 'express';
import ioSockets from 'socket.io';
import helmet from 'helmet';
import bodyParse from 'body-parser';
import cookieParse from 'cookie-parser';

const mainPort: number = 80;
const securePort: number = 443;
const appCore: express = express();
const serverCore: http.Server = new http.Server(appCore);
const io: ioSockets = ioSockets(serverCore);

appCore.use(helmet());
appCore.use(cookieParse());
appCore.use(bodyParse.urlencoded({ extended: false }));
appCore.use(bodyParse.json());

appCore.get('/', (request: any, response: any) => {
    response.send({ status: 200 });    
});

serverCore.listen(mainPort, function() {
    console.log('Now online.')
})