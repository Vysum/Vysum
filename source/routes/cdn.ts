import express from 'express';
import { pathTo } from '../lib/paths';

let route: express.Router = express.Router();

function nodePath(...parts: string[]): express.static {
    return express.static(pathTo('node_modules', ...parts));
}

// Website Assets
route.use('/assets', express.static(pathTo('assets')));

// jQuery
route.use('/vendor/jquery', nodePath('jquery', 'dist'));

// Bootstrap
route.use('/vendor/bootstrap', nodePath('bootstrap','dist'));

// Howler
route.use('/vendor/howler', nodePath('howler','dist'));

// Noty
route.use('/vendor/noty', nodePath('noty','lib'));

// Moment
route.use('/vendor/moment', nodePath('moment','min'));

// Babel
route.use('/vendor/babel', nodePath('babel-standalone'));

// Video.JS
route.use('/vendor/videojs', nodePath('video.js','dist'));

// React
route.use('/vendor/react', nodePath('react','umd'));
route.use('/vendor/react-dom', nodePath('react-dom','umd'));

export = route;