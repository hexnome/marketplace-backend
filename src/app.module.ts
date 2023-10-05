import { RouterModule } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@redis/redis.module';

import { LoggerMiddleware } from '@common/middleware';
import { InkRequestMiddleware } from '@common/middleware/ink-request.middleware';
import { ActivityModule } from '@modules/activity';
import { AuthModule } from '@modules/auth';
import { CollectionModule } from '@modules/collection';
import { LaunchpadModule } from '@modules/launchpad';
import { ListingModule } from '@modules/listing';
import { UserModule } from '@modules/user';
import { OfferModule } from '@modules/offer';
import { MarketplaceModule } from '@modules/marketplace';
import { NftModule } from '@modules/nft';

import { CommonModule } from './common';
import { configuration } from './config';
import { HealthModule } from './health';
import { PrismaModule } from './prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ActivityModule,
    AuthModule,
    CollectionModule,
    CommonModule,
    HealthModule,
    LaunchpadModule,
    ListingModule,
    MarketplaceModule,
    NftModule,
    OfferModule,
    PrismaModule,
    RedisModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  // Global Middleware, Inbound logging
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware, InkRequestMiddleware).forRoutes('*');
  }
}
