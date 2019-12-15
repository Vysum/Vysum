import express from 'express';
import { pathTo } from '../lib/paths';

let route: express.Router = express.Router();

function nodePath(...parts: string[]): express.static {
    return express.static(pathTo('node_modules', ...parts));
}

// Website Assets
route.get('/assets', express.static(pathTo('assets')));

// jQuery
route.get('/vendor/jquery', nodePath('jquery', 'dist'));

// Bootstrap
route.get('/vendor/bootstrap', nodePath('bootstrap','dist'));

// Howler
route.get('/vendor/howler', nodePath('howler','dist'));

// Noty
route.get('/vendor/noty', nodePath('noty','lib'));

// Moment
route.get('/vendor/moment', nodePath('moment','min'));

// Babel
route.get('/vendor/babel', nodePath('babel-standalone'));

// Video.JS
route.get('/vendor/videojs', nodePath('video.js','dist'));

// React
route.get('/vendor/react', nodePath('react','umd'));
route.get('/vendor/react-dom', nodePath('react-dom','umd'));

export = route;