export interface Section {
    type: string;
    content?: string[];
}

export interface Post {
    id: string;
    title: string;
    type: string;
    thumbnail: string;
    author: string | null;
    createdAt: number;
    editedAt: number | null;
    sections: Section[];
}