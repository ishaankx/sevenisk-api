import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { CvModule } from './cv/cv.module';
import { ServeStaticModule } from '@nestjs/serve-static'; // <-- IMPORT
import { join } from 'path'; // <-- IMPORT

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // <-- ADD THIS BLOCK
      rootPath: join(__dirname, '..', 'assets'),
      serveRoot: '/assets', // Serve files under /assets (e.g., /assets/Ishaan-Katara-CV.pdf)
    }),
    BlogModule,
    CvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
