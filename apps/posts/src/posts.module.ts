import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { User } from './user.entity';
import { UsersResolvers } from './user.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [PostsResolver, UsersResolvers, PostsService],
})
export class AppModule {}

