import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class BlogService {
  async findAll() {
    return prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(slug: string) {
    return prisma.blogPost.findUnique({ where: { slug } });
  }

  async create(data: {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
  }) {
    return prisma.blogPost.create({ data });
  }
}
