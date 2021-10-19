import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  @Directive('@external')
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => [Post])
  posts?: Post[];

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
