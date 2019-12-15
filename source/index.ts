import http from 'http';
import express from 'express';
import ioSockets from 'socket.io';
import helmet from 'helmet';
import bodyParse from 'body-parser';
import cookieParse from 'cookie-parser';

import {Reporter} from './lib/reporter';

import cdnRoute from './routes/cdn';

const mainPort: number = 80;
const securePort: number = 443;
const appCore: express = express();
const serverCore: http.Server = new http.Server(appCore);
const io: ioSockets = ioSockets(serverCore);
const report: Reporter = new Reporter();
const startup: number = Date.now();

appCore.use(helmet());
appCore.use(cookieParse());
appCore.use(bodyParse.urlencoded({ extended: false }));
appCore.use(bodyParse.json());

appCore.use('/', cdnRoute);

appCore.get('/_status/:code', function(request: any, response: any) {
    report.info('status', `Response requested: ${request.params.code}`);
    response.send(request.params.code);
})

serverCore.listen(mainPort, function() {
    let bootdiff: string = ((Date.now() - startup) / 1000).toFixed(2);
    report.success('server', `Server Started`);
    report.success('server', `Started in: ${bootdiff}sec(s).`);
    report.success('server', `Listening on PORT: ${mainPort}`);
})