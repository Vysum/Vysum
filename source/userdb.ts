import { createHash, sign } from 'crypto';
import NeDB from 'nedb';
import { randomString } from './common';
import { pathTo } from './lib/paths';
import { Reporter } from './lib/reporter';
import { DEFAULT_AVATAR, DEFAULT_BANNER } from './constants';
import { UserAccount, SignUpData, LoginData } from './interfaces';

const report: Reporter = new Reporter();

class DatabaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}

export const userDatabase: NeDB = new NeDB({
    filename: pathTo('store', 'userdata.vydb'),
    autoload: true
});

export class UserDatabase {
    private db: NeDB;
    private hexChars: string;
    private letters: string;
    private numbers: string;
    private special: string;
    constructor() {
        this.db = userDatabase;
        this.hexChars = String('abcdef0123456789');
        this.letters = String('abcdefghijklmnopqrstuvwxyz');
        this.numbers = String('0123456789');
        this.special = String('-_');
    }
    private handleErrorMessage(error: any): void {
        if(typeof error.message == 'string') {
            report.error('userdb', error.message);
            new DatabaseError(error.message);
        } else {
            report.error('userdb', error);
            new DatabaseError(error);
        }
    }
    private makeUserId(): string {
        return randomString(16, this.hexChars);
    }
    private makeUserToken(): string {
        let p: this = this;
        return randomString(32, p.letters + p.numbers + p.special);
    }
    private makeUserStreamKey(): string {
        let p: this = this;
        return 'vysum_' + randomString(35, p.letters + p.numbers);
    }
    private parseAge(date: string): number {
        let today: Date = new Date();
        let bdate: Date = new Date(date);
        let age: number = (today.getFullYear() - bdate.getFullYear());
        let m: number = (today.getMonth() - bdate.getMonth());
        if(m < 0 || (m === 0 && today.getDate() < bdate.getDate())) {
            age--;
        }
        return age;
    }
    private encryptPassword(password: string): string {
        return createHash('md5').update(password).digest('hex');
    }
    createAccount(signup: SignUpData): Promise<UserAccount> {
        let _this: this = this;
        return new Promise((resolve, reject) => {
            this.db.findOne({ email: signup.email }, (e, docs) => {
                if(e) {
                    _this.handleErrorMessage(e);
                    reject(500);
                }
                if(docs) {
                    let message: string = String(`User Already Exists (ID: ${docs._id})`);
                    _this.handleErrorMessage(message);
                    reject(403);
                }
                else {
                    let thisUserID: string = _this.makeUserId();
                    let newUserAccount: UserAccount = {
                        _id: thisUserID,
                        username: signup.username,
                        url: thisUserID,
                        email: signup.email,
                        password: _this.encryptPassword(signup.password),
                        address: signup.address,
                        verified: false,
                        token: _this.makeUserToken(),
                        streamKey: _this.makeUserStreamKey(),
                        mobile: String(),
                        mfaEnabled: false,
                        avatar: DEFAULT_AVATAR,
                        banner: DEFAULT_BANNER,
                        trailer: null,
                        about: 'No information provided.',
                        socialMedia: [],
                        catagories: 0,
                        rating: 0,
                        views: 0,
                        supporters: 0,
                        flags: 0,
                        birthdate: signup.birthdate,
                        age: _this.parseAge(signup.birthdate)
                    }
                    _this.db.insert(newUserAccount);
                    resolve(newUserAccount);
                }
            })
        })
    }
}