import { Injectable } from '@nestjs/common';

@Injectable()
export class CvService {
  // eslint-disable-next-line @typescript-eslint/require-await
  async handleCVRequest(data: {
    name: string;
    email: string;
  }): Promise<{ message: string }> {
    // In a real app, you'd save this to the database
    console.log('CV Request from:', data.name, data.email);

    // Return a success message
    return { message: 'Request logged! Your download will begin shortly.' };
  }
}
