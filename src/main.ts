import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- THIS IS THE FIX ---
  // We provide an array of allowed origins
  app.enableCors({
    origin: [
      'https://sevenisk-frontend.vercel.app', // Your new Vercel deploy URL
      'https://www.sevenisk.com', // Your final custom domain
      'http://localhost:3001', // For your local testing
    ],
  });
  // --- END OF FIX ---

  await app.listen(3000);
}
bootstrap();
