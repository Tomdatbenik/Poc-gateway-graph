import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID!)
  id: number;

  @Field()
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
