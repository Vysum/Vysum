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

// Creator profiles
appCore.get('/creator/:id', function(request: any, response: any) {
})
// Creator Settings
appCore.get('/creator/:id/settings', function(request: any, response: any) {
})
// Latest Uploads
appCore.get('/latest', function(request: any, response: any) {
})
// Watching
appCore.get('/watch', function(request: any, response: any) {
})
// Tech or Account Support
appCore.get('/support', function(request: any, response: any) {
})
// Privacy Policy
appCore.get('/privacy', function(request: any, response: any) {
})
// Terms of Service
appCore.get('/terms', function(request: any, response: any) {
})
// Discord Invite
appCore.get('/discord', function(request: any, response: any) {
    response.redirect('https://discord.gg/ydBgKgm');
})

// Server Boot Messages
serverCore.listen(mainPort, function() {
    let bootdiff: string = ((Date.now() - startup) / 1000).toFixed(2);
    report.success('server', `Server Started`);
    report.success('server', `Started in: ${bootdiff}sec(s).`);
    report.success('server', `Listening on PORT: ${mainPort}`);
})

// Socket Relays
io.on('connection', function(socket: any) {
})