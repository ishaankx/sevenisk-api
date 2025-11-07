export declare class BlogService {
    findAll(): Promise<{
        id: number;
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        createdAt: Date;
    }[]>;
    findOne(slug: string): Promise<{
        id: number;
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        createdAt: Date;
    } | null>;
    create(data: {
        title: string;
        slug: string;
        content: string;
        excerpt: string;
    }): Promise<{
        id: number;
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        createdAt: Date;
    }>;
}
