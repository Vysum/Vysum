import { Flags } from './interfaces';

export const BRAND_YELLOW: string   = '#94CD24';
export const BRAND_GREEN: string    = '#036A38';
export const BRAND_COLOR: string    = '#4A9B2E';

export const Category: Flags = {
    'Unknown':                  0,
    'Auto & Vehicles':          1 << 10,
    'Music':                    1 << 11,
    'Pets & Animals':           1 << 12,
    'Sports':                   1 << 13,
    'Travel & Events':          1 << 14,
    'Gaming':                   1 << 15,
    'Film & Animation':         1 << 16,
    'People & Blogs':           1 << 17,
    'Comedy':                   1 << 18,
    'Entertainment':            1 << 19,
    'News & Politics':          1 << 20,
    'HowTo & Style':            1 << 21,
    'Education':                1 << 22,
    'Science & Technology':     1 << 23,
    'Nonprofit & Activism':     1 << 24
}