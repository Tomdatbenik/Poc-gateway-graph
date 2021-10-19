import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UsersResolver } from './user.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  providers: [UsersResolver, UserService],
})
export class AppModule {}
