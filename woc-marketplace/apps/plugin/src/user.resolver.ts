import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PxmPlugin } from './plugin.entity';
import { PluginService } from './plugin.service';
import { User } from './user.entity';

@Resolver((of) => User)
export class UsersResolvers {
  constructor(private readonly pluginService: PluginService) {}

  @ResolveField((of) => [PxmPlugin])
  public plugins(@Parent() user: User): PxmPlugin[] {
    return this.pluginService.forAuthor(user.id);
  }
}