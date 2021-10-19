import { Query, Args, ResolveField, Resolver, Parent, Int } from '@nestjs/graphql';
import { User } from './user.entity';
import { PluginService } from './plugin.service';
import { PxmPlugin } from './plugin.entity';

@Resolver((of) => PxmPlugin)
export class PluginResolver {
  constructor(private readonly pluginService: PluginService) {}

  @Query((returns) => PxmPlugin)
  findPxmPlugin(@Args('id', { type: () => Int }) id: number): PxmPlugin {
    return this.pluginService.findOne(id);
  }

  @Query((returns) => [PxmPlugin])
  getPxmPlugins(): PxmPlugin[] {
    return this.pluginService.all();
  }

  @ResolveField((of) => User)
  user(@Parent() PxmPlugin: PxmPlugin): any {
    return { __typename: 'User', id: PxmPlugin.authorId };
  }
}
