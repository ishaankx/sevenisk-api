import { BlogService } from './blog.service';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getAll(): Promise<{
        id: number;
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        createdAt: Date;
    }[]>;
    getOne(slug: string): Promise<{
        id: number;
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        createdAt: Date;
    } | null>;
    create(body: any): Promise<{
        id: number;
        title: string;
        slug: string;
        content: string;
        excerpt: string;
        createdAt: Date;
    }>;
}
