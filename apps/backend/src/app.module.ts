import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from '@signalcast/nestjs-libraries/database/prisma/database.module';
import { ApiModule } from '@signalcast/backend/api/api.module';
import { APP_GUARD } from '@nestjs/core';
import { PoliciesGuard } from '@signalcast/backend/services/auth/permissions/permissions.guard';
import { PublicApiModule } from '@signalcast/backend/public-api/public.api.module';
import { ThrottlerBehindProxyGuard } from '@signalcast/nestjs-libraries/throttler/throttler.provider';
import { ThrottlerModule } from '@nestjs/throttler';
import { AgentModule } from '@signalcast/nestjs-libraries/agent/agent.module';
import { ThirdPartyModule } from '@signalcast/nestjs-libraries/3rdparties/thirdparty.module';
import { VideoModule } from '@signalcast/nestjs-libraries/videos/video.module';
import { SentryModule } from '@sentry/nestjs/setup';
import { FILTER } from '@signalcast/nestjs-libraries/sentry/sentry.exception';
import { ChatModule } from '@signalcast/nestjs-libraries/chat/chat.module';
import { getTemporalModule } from '@signalcast/nestjs-libraries/temporal/temporal.module';
import { TemporalRegisterMissingSearchAttributesModule } from '@signalcast/nestjs-libraries/temporal/temporal.register';
import { InfiniteWorkflowRegisterModule } from '@signalcast/nestjs-libraries/temporal/infinite.workflow.register';
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';
import { ioRedis } from '@signalcast/nestjs-libraries/redis/redis.service';

@Global()
@Module({
  imports: [
    SentryModule.forRoot(),
    DatabaseModule,
    ApiModule,
    PublicApiModule,
    AgentModule,
    ThirdPartyModule,
    VideoModule,
    ChatModule,
    getTemporalModule(false),
    TemporalRegisterMissingSearchAttributesModule,
    InfiniteWorkflowRegisterModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 3600000,
          limit: process.env.API_LIMIT ? Number(process.env.API_LIMIT) : 90,
        },
      ],
      storage: new ThrottlerStorageRedisService(ioRedis),
    }),
  ],
  controllers: [],
  providers: [
    FILTER,
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PoliciesGuard,
    },
  ],
  exports: [
    DatabaseModule,
    ApiModule,
    PublicApiModule,
    AgentModule,
    ThrottlerModule,
    ChatModule,
  ],
})
export class AppModule {}
