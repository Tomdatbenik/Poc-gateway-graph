import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { PluginResolver } from './plugin.resolver';
import { PluginService } from './plugin.service';
import { User } from './user.entity';
import { UsersResolvers } from './user.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [PluginResolver, UsersResolvers, PluginService],
})
export class AppModule {}
