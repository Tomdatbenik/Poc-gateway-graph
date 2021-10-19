import { Injectable } from '@nestjs/common';
import { PxmPlugin } from './plugin.entity';

@Injectable()
export class PluginService {
  private PluginData: PxmPlugin[] = [
    new PxmPlugin(1, 'IsLive', 1),
    new PxmPlugin(2, 'WOC Import', 2),
    new PxmPlugin(2, 'WOC Export', 2),
    new PxmPlugin(3, 'Exporto', 3),
    new PxmPlugin(3, 'Sick.Co', 4),
  ];

  all(): PxmPlugin[] {
    return this.PluginData;
  }
  findOne(id: number): PxmPlugin {
    return this.PluginData.find((x) => x.id == id);
  }
  forAuthor(id: number): PxmPlugin[] {
    return this.PluginData.filter((x) => x.authorId == id);
  }
}
