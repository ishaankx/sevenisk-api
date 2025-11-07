import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { createReadStream } from 'fs';

@Injectable()
export class CvService {
  getCvFile() {
    const filePath = join(__dirname, '../../assets/Ishaan-Katara-CV.pdf');
    return createReadStream(filePath);
  }
}
