import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // More specific CORS configuration for production
  app.enableCors({
    origin: 'https://clinic-frontend-bay.vercel.app/', // <-- PASTE YOUR VERCEL URL HERE
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
