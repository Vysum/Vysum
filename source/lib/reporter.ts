import {createWriteStream, WriteStream} from 'fs';
import chalk from 'chalk';
import moment from 'moment';
import { pathTo } from './paths';
import { Generic } from '../interfaces';

class ReporterError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ReporterError';
    }
}

export class Reporter {
    private path: string;
    private file: WriteStream;
    private colors: Generic;
    constructor() {
        this.path = pathTo('logs', 'reports.log');
        this.file = createWriteStream(this.path);
        this.colors = {
            success: chalk.green,
            warning: chalk.yellow,
            error: chalk.red,
            debug: chalk.magenta,
            info: chalk.blue,
            log: chalk.gray
        }
    } 
    private timestamp(): string {
        let thisStamp: string = moment().format('LLL');
        return String(this.colors['log'](thisStamp));
    }
    private console(type: string, name: string, data: any): void {
        let _this: this = this;
        let thisName: string = name.toUpperCase();
        let colorName = function(): string {
            return _this.colors[type](thisName);
        }
        let thisStamp: string = this.timestamp();
        console.log(`[${colorName()}][${thisStamp}]: ${data}`);
    }
    private write(type: string, name: string, data: any): void {
        let thisName: string = name.toUpperCase();
        let thisStamp: string = moment().format('LLL');
        let thisType: string = type.toUpperCase();
        this.file.write(`[${thisType}][${thisName}][${thisStamp}]: ${data}\n`);
    }
    private post(type: string, name: string, data: any): void {
        this.write(type, name, data);
        this.console(type, name, data);
    }
    log(name: string, data: any): void {
        this.post('log', name, data);
    }
    success(name: string, data: any): void {
        this.post('success', name, data);
    }
    warning(name: string, data: any): void {
        this.post('warning', name, data);
    }
    error(name: string, data: any): void {
        this.post('error', name, data);
    }
    info(name: string, data: any): void {
        this.post('info', name, data);
    }
    debug(name: string, data: any): void {
        this.post('debug', name, data);
    }
}