import { NestFactory } from '@nestjs/core';
import { PluginModule } from './plugin.module';

async function bootstrap() {
  const app = await NestFactory.create(PluginModule);
  await app.listen(3000);
}
bootstrap();
