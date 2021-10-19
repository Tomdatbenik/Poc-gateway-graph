import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'users', url: 'http://localhost:3002/graphql' },
          { name: 'profile', url: 'http://localhost:4002/graphql' },
          { name: 'plugins', url: 'http://localhost:3001/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}
