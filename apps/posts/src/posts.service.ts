import { Injectable } from '@nestjs/common';
import { Post } from './post.interface';

@Injectable()
export class PostsService {
  findById(id: string) {
          return {
        id: 1,
        title: "CodeMonkey",
        body: "This is a body",
        userId: 2
      } as Post;
  }
  getOne(): Post {
    return {
      id: 1,
      title: "CodeMonkey",
      body: "This is a body",
      userId: 2
    } as Post;
  }
}
