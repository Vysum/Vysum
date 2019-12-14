export type Generic = {[key: string]: any}
export type Flags = {[key: string]: number}

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
    upvote: number;
    downvote: number;
    credits: Credits;
}
export interface Credits {
    name: string;
    link: string;
    purpose: string;
    work: string;
}