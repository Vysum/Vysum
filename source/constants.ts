import { Flags } from './interfaces';

export const BRAND_YELLOW: string       = '#94CD24';
export const BRAND_GREEN: string        = '#036A38';
export const BRAND_COLOR: string        = '#4A9B2E';

export const DEFAULT_AVATAR: string     = String();
export const DEFAULT_BANNER: string     = String();

export const ICON_MODERATOR: string     = 'fas fa-shield-alt';
export const ICON_DEVELOPER: string     = 'fas fa-wrench';
export const ICON_CREATOR: string       = 'fas fa-video';
export const ICON_VERIFIED: string      = 'fas fa-check-circle';
export const ICON_MUSICIAN: string      = 'fas fa-music';

export const ICON_UI_VOL_NORM: string   = 'fas fa-volume';
export const ICON_UI_VOL_UP: string     = 'fas fa-volume-up';
export const ICON_UI_VOL_DOWN: string   = 'fas fa-volume-down';
export const ICON_UI_VOL_MUTE: string   = 'fas fa-volume-mute';
export const ICON_UI_PLAY: string       = 'fas fa-play';
export const ICON_UI_PAUSE: string      = 'fas fa-pause';
export const ICON_UI_SKIP: string       = 'fas fa-fast-forward';
export const ICON_UI_EXPAND: string     = 'fas fa-expand-wide';
export const ICON_UI_COMPRESS: string   = 'fas fa-compress-wide';
export const ICON_UI_CAPTIONS: string   = 'fas fa-closed-captioning';
export const ICON_UI_ADVERT: string     = 'fas fa-ad';

export const ICON_CC_PAYPAL: string     = 'fab fa-cc-paypal';
export const ICON_CC_VISA: string       = 'fab fa-cc-visa'; 
export const ICON_CC_MC: string         = 'fab fa-cc-mastercard';
export const ICON_CC_DISCOVER: string   = 'fab fa-cc-discover';
export const ICON_CC_AMEX: string       = 'fab fa-cc-amex';

export const AgeRatings: Flags = {
    General:                    0,
    Children:                   1 << 0,
    ParentalGuidance:           1 << 1,
    Teen:                       1 << 2,
    Mature:                     1 << 3,
    Adult:                      1 << 4
}

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

export const UserFlags: Flags = {
    None:                       0,
    Banned:                     1 << 0,
    
}