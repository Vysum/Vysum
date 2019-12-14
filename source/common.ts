import { AgeRatings } from './constants';

/**
 * Returns a Value of the given flag and lower
 * @param key The age rating
 */
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

/**
 * Check if flag has a value
 * @param flag The flag to look for
 * @param flags The total flags
 */
export function hasFlag(flag: number, flags: number): boolean {
    if(flags & flag) { return true; }
    else { return false }
}