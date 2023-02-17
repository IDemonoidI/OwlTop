import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
const configservice = app.get(ConfigService)
 const port = configservice.get('port')
  await app.listen(port);
}
bootstrap();
