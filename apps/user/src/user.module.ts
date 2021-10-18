import { Module } from '@nestjs/common';
import {GraphQLFederationModule  } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { join } from 'path';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: [join(process.cwd(), 'apps/user/src/shema.gql')],
    }),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
