import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
const configservice = app.get(ConfigService)
 const port = configservice.get('port')

  const config= new DocumentBuilder()
  .setTitle('OwlTop api')
    .setDescription('this api for OwlTop')
    .setVersion("1.0.0")
    .addTag('API')
    .build()
    const document= SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)
  await app.listen(port);
}
bootstrap();
