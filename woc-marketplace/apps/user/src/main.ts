import { NestFactory } from '@nestjs/core';
import { AppModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}
bootstrap();
