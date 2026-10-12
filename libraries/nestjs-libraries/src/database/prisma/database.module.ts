import { Global, Module } from '@nestjs/common';
import { PrismaRepository, PrismaService, PrismaTransaction } from './prisma.service';
import { OrganizationRepository } from '@signalcast/nestjs-libraries/database/prisma/organizations/organization.repository';
import { OrganizationService } from '@signalcast/nestjs-libraries/database/prisma/organizations/organization.service';
import { UsersService } from '@signalcast/nestjs-libraries/database/prisma/users/users.service';
import { UsersRepository } from '@signalcast/nestjs-libraries/database/prisma/users/users.repository';
import { SubscriptionService } from '@signalcast/nestjs-libraries/database/prisma/subscriptions/subscription.service';
import { SubscriptionRepository } from '@signalcast/nestjs-libraries/database/prisma/subscriptions/subscription.repository';
import { NotificationService } from '@signalcast/nestjs-libraries/database/prisma/notifications/notification.service';
import { IntegrationService } from '@signalcast/nestjs-libraries/database/prisma/integrations/integration.service';
import { IntegrationRepository } from '@signalcast/nestjs-libraries/database/prisma/integrations/integration.repository';
import { PostsService } from '@signalcast/nestjs-libraries/database/prisma/posts/posts.service';
import { PostsRepository } from '@signalcast/nestjs-libraries/database/prisma/posts/posts.repository';
import { IntegrationManager } from '@signalcast/nestjs-libraries/integrations/integration.manager';
import { MediaService } from '@signalcast/nestjs-libraries/database/prisma/media/media.service';
import { MediaRepository } from '@signalcast/nestjs-libraries/database/prisma/media/media.repository';
import { NotificationsRepository } from '@signalcast/nestjs-libraries/database/prisma/notifications/notifications.repository';
import { EmailService } from '@signalcast/nestjs-libraries/services/email.service';
import { StripeService } from '@signalcast/nestjs-libraries/services/stripe.service';
import { PaymentService } from '@signalcast/nestjs-libraries/services/payment/payment.service';
import { PaymentProviderManager } from '@signalcast/nestjs-libraries/services/payment/payment.provider.manager';
import { RevenueCatProvider } from '@signalcast/nestjs-libraries/services/payment/providers/revenuecat.provider';
import { ExtractContentService } from '@signalcast/nestjs-libraries/openai/extract.content.service';
import { OpenaiService } from '@signalcast/nestjs-libraries/openai/openai.service';
import { DeepgramService } from '@signalcast/nestjs-libraries/deepgram/deepgram.service';
import { ClippingService } from '@signalcast/nestjs-libraries/database/prisma/clipping/clipping.service';
import { ClippingRepository } from '@signalcast/nestjs-libraries/database/prisma/clipping/clipping.repository';
import { AgenciesService } from '@signalcast/nestjs-libraries/database/prisma/agencies/agencies.service';
import { AgenciesRepository } from '@signalcast/nestjs-libraries/database/prisma/agencies/agencies.repository';
import { TrackService } from '@signalcast/nestjs-libraries/track/track.service';
import { ShortLinkService } from '@signalcast/nestjs-libraries/short-linking/short.link.service';
import { WebhooksRepository } from '@signalcast/nestjs-libraries/database/prisma/webhooks/webhooks.repository';
import { WebhooksService } from '@signalcast/nestjs-libraries/database/prisma/webhooks/webhooks.service';
import { SignatureRepository } from '@signalcast/nestjs-libraries/database/prisma/signatures/signature.repository';
import { SignatureService } from '@signalcast/nestjs-libraries/database/prisma/signatures/signature.service';
import { AutopostRepository } from '@signalcast/nestjs-libraries/database/prisma/autopost/autopost.repository';
import { AutopostService } from '@signalcast/nestjs-libraries/database/prisma/autopost/autopost.service';
import { SetsService } from '@signalcast/nestjs-libraries/database/prisma/sets/sets.service';
import { SetsRepository } from '@signalcast/nestjs-libraries/database/prisma/sets/sets.repository';
import { ThirdPartyRepository } from '@signalcast/nestjs-libraries/database/prisma/third-party/third-party.repository';
import { ThirdPartyService } from '@signalcast/nestjs-libraries/database/prisma/third-party/third-party.service';
import { VideoManager } from '@signalcast/nestjs-libraries/videos/video.manager';
import { FalService } from '@signalcast/nestjs-libraries/openai/fal.service';
import { RefreshIntegrationService } from '@signalcast/nestjs-libraries/integrations/refresh.integration.service';
import { OAuthRepository } from '@signalcast/nestjs-libraries/database/prisma/oauth/oauth.repository';
import { OAuthService } from '@signalcast/nestjs-libraries/database/prisma/oauth/oauth.service';
import { AnnouncementsRepository } from '@signalcast/nestjs-libraries/database/prisma/announcements/announcements.repository';
import { AnnouncementsService } from '@signalcast/nestjs-libraries/database/prisma/announcements/announcements.service';
import { ErrorsRepository } from '@signalcast/nestjs-libraries/database/prisma/errors/errors.repository';
import { ErrorsService } from '@signalcast/nestjs-libraries/database/prisma/errors/errors.service';
import { AdminStatsRepository } from '@signalcast/nestjs-libraries/database/prisma/admin-stats/admin-stats.repository';
import { AdminStatsService } from '@signalcast/nestjs-libraries/database/prisma/admin-stats/admin-stats.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    PrismaRepository,
    PrismaTransaction,
    UsersService,
    UsersRepository,
    OrganizationService,
    OrganizationRepository,
    SubscriptionService,
    SubscriptionRepository,
    NotificationService,
    NotificationsRepository,
    WebhooksRepository,
    WebhooksService,
    IntegrationService,
    IntegrationRepository,
    PostsService,
    PostsRepository,
    StripeService,
    PaymentService,
    PaymentProviderManager,
    RevenueCatProvider,
    SignatureRepository,
    AutopostRepository,
    AutopostService,
    SignatureService,
    MediaService,
    MediaRepository,
    AgenciesService,
    AgenciesRepository,
    IntegrationManager,
    RefreshIntegrationService,
    ExtractContentService,
    OpenaiService,
    DeepgramService,
    ClippingService,
    ClippingRepository,
    FalService,
    EmailService,
    TrackService,
    ShortLinkService,
    SetsService,
    SetsRepository,
    ThirdPartyRepository,
    ThirdPartyService,
    OAuthRepository,
    OAuthService,
    VideoManager,
    AnnouncementsRepository,
    AnnouncementsService,
    ErrorsRepository,
    ErrorsService,
    AdminStatsRepository,
    AdminStatsService,
  ],
  get exports() {
    return this.providers;
  },
})
export class DatabaseModule {}
