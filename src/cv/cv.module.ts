import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import { PrismaModule } from 'src/prisma/prisma.module'; // <-- This line is now valid

@Module({
  imports: [PrismaModule], // <-- This line is now valid
  controllers: [CvController],
  providers: [CvService],
})
export class CvModule {}
