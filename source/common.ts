import { AgeRatings } from './constants';

export function renderAgeFlag(key: string): number {
    let keys: string[] = Object.keys(AgeRatings);
    let response: number = 0;
    let flag: number = AgeRatings[key];
    for(let i = 0; i < keys.length; i++) {
        let k: string = keys[i];
        if(AgeRatings[k] <= flag) {
            response = response + AgeRatings[k];
        }
    }
    return response;
}

export function hasFlag(flag: number, flags: number): boolean {
    if(flags & flag) { return true; }
    else { return false }
}

export function randomString(length: number, characters: string): string {
    let result: string = String()
    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
}