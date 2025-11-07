import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('api/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAll() {
    return this.blogService.findAll();
  }

  @Get(':slug')
  async getOne(@Param('slug') slug: string) {
    return this.blogService.findOne(slug);
  }

  @Post()
  async create(@Body() body: any) {
    return this.blogService.create(body);
  }
}
