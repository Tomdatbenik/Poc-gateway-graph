import { Injectable } from '@nestjs/common';
import { PxmPlugin } from './plugin.entity';

@Injectable()
export class PluginService {
  private PluginData: PxmPlugin[] = [
    new PxmPlugin(1, 'anus Plugin', 1),
    new PxmPlugin(2, 'kanker Plugin', 1),
    new PxmPlugin(3, 'poopie Plugin', 1),
  ];

  all(): PxmPlugin[] {
    return this.PluginData;
  }
  findOne(id: number): PxmPlugin {
    return this.PluginData.find((x) => (x.id = id));
  }
  forAuthor(id: number): PxmPlugin[] {
    return this.PluginData.filter((x) => (x.authorId = id));
  }
}

