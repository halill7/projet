import { NestFactory } from '@nestjs/core';
import { AppModule } from './home/app.module';
import {HttpExceptionFilter} from "@common/config/exception/http-exception.filter";
import {SwaggerModule} from "@nestjs/swagger";
import {swaggerConfiguration} from "@common/documentation";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  swaggerConfiguration.config(app);
  await app.listen(3000);
}
bootstrap();
