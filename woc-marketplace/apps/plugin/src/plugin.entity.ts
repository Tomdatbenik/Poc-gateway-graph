import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class PxmPlugin {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  authorId: number;

  @Field((type) => User)
  user?: User;

  constructor(id: number, title: string, authorId: number) {
    this.id = id;
    this.title = title;
    this.authorId = authorId;
  }
}
