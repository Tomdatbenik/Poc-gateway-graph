import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      gateway: {
        serviceList: [
          { name: 'posts', url: 'http://localhost:3000/graphql' },
          { name: 'users', url: 'http://localhost:3001/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}
