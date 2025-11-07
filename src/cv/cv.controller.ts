import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { CvService } from './cv.service';

@Controller('api/cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Get('download')
  downloadCv(@Res() res: Response) {
    const file = this.cvService.getCvFile();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="\\Ishaan-Katara-CV.pdf\\"',
    });
    file.pipe(res);
  }
}
