import { Parent, Query, ResolveField, Resolver, ResolveReference } from '@nestjs/graphql';
import { Post } from './post.interface';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query('getPost')
  getPost() {
    return this.postsService.getOne();
  }

  @Query('getOne')
  getOne() {
    return this.postsService.getOne();
  }

  @ResolveField('user')
  getUser(@Parent() post: Post) {
    return { __typename: 'User', id: post.userId };
  }
  
  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
      console.log(reference)
    return this.postsService.findById(reference.id);
  }
}


