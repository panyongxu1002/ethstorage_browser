import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('EthStorage Browser Indexer Api')
    // .setDescription('eth_storage backend_indexer')
    .setVersion('1.0')
    // .addTag('Api/V1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apiDoc', app, document);
  await app.listen(3001);
}

bootstrap();
