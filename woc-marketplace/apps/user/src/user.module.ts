import { Module } from '@nestjs/common';
import { GraphQLFederationModule  } from '@nestjs/graphql';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  providers: [UserResolver, UserService],
})
export class AppModule {}
