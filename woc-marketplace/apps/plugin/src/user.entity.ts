import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { PxmPlugin } from './plugin.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  @Directive('@external')
  id: number;

  @Field((type) => [PxmPlugin])
  plugins?: PxmPlugin[];
}