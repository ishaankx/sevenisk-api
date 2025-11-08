/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // <-- IMPORT

@Injectable()
export class CvService {
  constructor(private prisma: PrismaService) {} // <-- INJECT PRISMA

  async handleCVRequest(data: {
    name: string;
    email: string;
  }): Promise<{ message: string }> {
    
    // This is the logic that was missing.
    // It saves the user's details to your new CvRequest table.
    await this.prisma.cvRequest.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });

    console.log('CV Request logged from:', data.name, data.email);

    // This now correctly has an 'await' and will not fail.
    return { message: 'Request logged! Your download will begin shortly.' };
  }
}
