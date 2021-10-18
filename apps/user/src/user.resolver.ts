
import { Logger } from '@nestjs/common';
import { Resolver, Query, Args, ResolveReference, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private usersService: UserService) {}

  @Query()
  getUser(@Args('id') id: string) {
    return this.usersService.findById(id);
  }
  
  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    console.log(reference)
    return this.usersService.findById(reference.id);
  }
}
