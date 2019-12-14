import { join } from 'path';

export const root: string = join(__dirname, '..', '..');

export function pathTo(...parts: string[]): string {
    return join(root, ...parts);
}