
import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: [join(process.cwd(), 'apps/posts/src/shema.gql')],
    }),
  ],
  providers: [PostsResolver, PostsService],
})
export class AppModule {}
