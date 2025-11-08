import { Controller, Post, Body, Get, Res, Header } from '@nestjs/common';
import { CvService } from './cv.service';
import type { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { StreamableFile } from '@nestjs/common'; // <-- IMPORT

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post('request')
  handleCVRequest(@Body() body: { name: string; email: string }) {
    return this.cvService.handleCVRequest(body);
  }

  // --- ADD THIS ENTIRE NEW ENDPOINT ---
  @Get('download')
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'attachment; filename="Ishaan-Katara-CV.pdf"')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), 'assets/Ishaan-Katara-CV.pdf'),
    );
    return new StreamableFile(file);
  }
  // --- END OF NEW ENDPOINT ---
}
