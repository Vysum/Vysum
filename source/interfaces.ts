export type Generic = {[key: string]: any}
export type Flags = {[key: string]: number}

export interface UserAccount {
    _id: string;
    username: string;
    password?: string;
    email: string;
    verified: boolean;
    mobile: string;
    mfaEnabled: boolean;
    catagories: number;
    rating: number;
    views: number;
    supporters: number;
    flags: number;
}

export interface Video {
    _id: string;
    author: string;
    title: string;
    description: string;
    uploaded: number;
    tags: string[];
    rating: number;
    category: string;
    genre: string;
    views: number;
    upvote: number;
    downvote: number;
    stream: boolean;
}
