import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { CvModule } from './cv/cv.module';

@Module({
  imports: [BlogModule, CvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
