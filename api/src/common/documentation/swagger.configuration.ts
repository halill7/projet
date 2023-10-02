import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {INestApplication} from '@nestjs/common';
class SwaggerConfiguration {
    constructor() {
    }
    config(app: INestApplication<any>) {
        const config = new DocumentBuilder()
            .setTitle('NestJS API')
            .setDescription('NestJS swagger document')
            .setVersion('1.0')
            .addBearerAuth(
                {
                    description: `Please enter token`,
                    name: 'Authorization',
                    bearerFormat: 'Bearer',
                    scheme: 'Bearer',
                    type: 'http',
                    in: 'Header'
                },
                'access-token',
            )
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('docs', app, document);
    }
}
const swaggerConfiguration = new SwaggerConfiguration();
export {swaggerConfiguration};