import { Module } from '@nestjs/common';
import {GraphQLFederationModule  } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [UserResolver],
})
export class UserModule {}
