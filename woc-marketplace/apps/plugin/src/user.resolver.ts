import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PxmPlugin } from './plugin.entity';
import { PluginService } from './plugin.service';
import { User } from './user.entity';

@Resolver((of) => User)
export class UsersResolvers {
  constructor(private readonly postsService: PluginService) {}

  @ResolveField((of) => [PxmPlugin])
  public posts(@Parent() user: User): PxmPlugin[] {
    return this.postsService.forAuthor(user.id);
  }
}