import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/api.config';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutinterceptor } from './common/interceptors/timeOut.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors( new TimeOutinterceptor());

  const options = new DocumentBuilder()
    .setTitle('Flights Api')
    .setDescription('Microservices schedule flights app')
    .setVersion('2.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });
  
  await app.listen(config.PORT, () => {
    console.log(`🚀 Server running on port => ${config.PORT} 🚀`);
    //console.log(`📑 Swagger API docs: ${config.SWAGGER_FULL_ROUTE} 📑`);
  });
}
bootstrap();
