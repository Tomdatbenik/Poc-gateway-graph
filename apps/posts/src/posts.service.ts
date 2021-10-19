import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  private postData: Post[] = [
    new Post(1, 'anus post', 1),
    new Post(2, 'kanker post', 1),
    new Post(3, 'poopie post', 1),
  ];

  all(): Post[] {
    return this.postData;
  }
  findOne(id: number): Post {
    return this.postData.find((x) => (x.id = id));
  }
  forAuthor(id: number): Post[] {
    return this.postData.filter((x) => (x.authorId = id));
  }
}
