import { Args, Int, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private usersService: UserService) {}

  @Query((returns) => User)
  getUser(@Args('id', { type: () => Int }) id: number): User {
    return this.usersService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): User {
    return this.usersService.findById(reference.id);
  }
}