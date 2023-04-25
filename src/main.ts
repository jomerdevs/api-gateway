import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/api.config';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutinterceptor } from './common/interceptors/timeOut.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors( new TimeOutinterceptor());
  
  await app.listen(config.PORT, () => {
    console.log(`🚀 Server running on port => ${config.PORT} 🚀`);
    //console.log(`📑 Swagger API docs: ${config.SWAGGER_FULL_ROUTE} 📑`);
  });
}
bootstrap();
