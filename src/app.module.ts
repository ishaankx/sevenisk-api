import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BlogModule } from './blog/blog.module'; // <-- DELETE
import { CvModule } from './cv/cv.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      serveRoot: '/assets',
    }),
    PrismaModule,
    // BlogModule, // <-- DELETE
    CvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
