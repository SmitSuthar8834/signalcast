import { Module } from '@nestjs/common';
import { PostActivity } from '@signalcast/orchestrator/activities/post.activity';
import { getTemporalModule } from '@signalcast/nestjs-libraries/temporal/temporal.module';
import { DatabaseModule } from '@signalcast/nestjs-libraries/database/prisma/database.module';
import { AutopostActivity } from '@signalcast/orchestrator/activities/autopost.activity';
import { EmailActivity } from '@signalcast/orchestrator/activities/email.activity';
import { IntegrationsActivity } from '@signalcast/orchestrator/activities/integrations.activity';
import { VideoActivity } from '@signalcast/orchestrator/activities/video.activity';
import { MediaActivity } from '@signalcast/orchestrator/activities/media.activity';
import { ClippingActivity } from '@signalcast/orchestrator/activities/clipping.activity';
import { VideoModule } from '@signalcast/nestjs-libraries/videos/video.module';
import { HealthController } from '@signalcast/orchestrator/health.controller';

const activities = [
  PostActivity,
  AutopostActivity,
  EmailActivity,
  IntegrationsActivity,
  VideoActivity,
  MediaActivity,
  ClippingActivity,
];
@Module({
  imports: [
    DatabaseModule,
    VideoModule,
    getTemporalModule(true, require.resolve('./workflows'), activities),
  ],
  controllers: [HealthController],
  providers: [...activities],
  get exports() {
    return [...this.providers, ...this.imports];
  },
})
export class AppModule {}
