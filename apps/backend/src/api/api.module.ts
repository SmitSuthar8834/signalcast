import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from '@signalcast/backend/api/routes/auth.controller';
import { AuthService } from '@signalcast/backend/services/auth/auth.service';
import { UsersController } from '@signalcast/backend/api/routes/users.controller';
import { AuthMiddleware } from '@signalcast/backend/services/auth/auth.middleware';
import { StripeService } from '@signalcast/nestjs-libraries/services/stripe.service';
import { PaymentController } from '@signalcast/backend/api/routes/payment.controller';
import { PaymentService } from '@signalcast/nestjs-libraries/services/payment/payment.service';
import { PaymentProviderManager } from '@signalcast/nestjs-libraries/services/payment/payment.provider.manager';
import { RevenueCatProvider } from '@signalcast/nestjs-libraries/services/payment/providers/revenuecat.provider';
import { AnalyticsController } from '@signalcast/backend/api/routes/analytics.controller';
import { PoliciesGuard } from '@signalcast/backend/services/auth/permissions/permissions.guard';
import { PermissionsService } from '@signalcast/backend/services/auth/permissions/permissions.service';
import { IntegrationsController } from '@signalcast/backend/api/routes/integrations.controller';
import { IntegrationManager } from '@signalcast/nestjs-libraries/integrations/integration.manager';
import { SettingsController } from '@signalcast/backend/api/routes/settings.controller';
import { PostsController } from '@signalcast/backend/api/routes/posts.controller';
import { MediaController } from '@signalcast/backend/api/routes/media.controller';
import { ClippingController } from '@signalcast/backend/api/routes/clipping.controller';
import { MediaWidgetController } from '@signalcast/backend/api/routes/media.widget.controller';
import { UploadWidgetAuthMiddleware } from '@signalcast/backend/services/auth/upload.widget.auth.middleware';
import { ClippingWidgetController } from '@signalcast/backend/api/routes/clipping.widget.controller';
import { ClippingWidgetAuthMiddleware } from '@signalcast/backend/services/auth/clipping.widget.auth.middleware';
import { UploadModule } from '@signalcast/nestjs-libraries/upload/upload.module';
import { BillingController } from '@signalcast/backend/api/routes/billing.controller';
import { NotificationsController } from '@signalcast/backend/api/routes/notifications.controller';
import { OpenaiService } from '@signalcast/nestjs-libraries/openai/openai.service';
import { ExtractContentService } from '@signalcast/nestjs-libraries/openai/extract.content.service';
import { CodesService } from '@signalcast/nestjs-libraries/services/codes.service';
import { CopilotController } from '@signalcast/backend/api/routes/copilot.controller';
import { PublicController } from '@signalcast/backend/api/routes/public.controller';
import { RootController } from '@signalcast/backend/api/routes/root.controller';
import { TrackService } from '@signalcast/nestjs-libraries/track/track.service';
import { ShortLinkService } from '@signalcast/nestjs-libraries/short-linking/short.link.service';
import { WebhookController } from '@signalcast/backend/api/routes/webhooks.controller';
import { SignatureController } from '@signalcast/backend/api/routes/signature.controller';
import { AutopostController } from '@signalcast/backend/api/routes/autopost.controller';
import { SetsController } from '@signalcast/backend/api/routes/sets.controller';
import { ThirdPartyController } from '@signalcast/backend/api/routes/third-party.controller';
import { MonitorController } from '@signalcast/backend/api/routes/monitor.controller';
import { NoAuthIntegrationsController } from '@signalcast/backend/api/routes/no.auth.integrations.controller';
import { EnterpriseController } from '@signalcast/backend/api/routes/enterprise.controller';
import { OAuthAppController } from '@signalcast/backend/api/routes/oauth-app.controller';
import { ApprovedAppsController } from '@signalcast/backend/api/routes/approved-apps.controller';
import {
  OAuthController,
  OAuthAuthorizedController,
} from '@signalcast/backend/api/routes/oauth.controller';
import { AnnouncementsController } from '@signalcast/backend/api/routes/announcements.controller';
import { AdminController } from '@signalcast/backend/api/routes/admin.controller';
import { AuthProviderManager } from '@signalcast/backend/services/auth/providers/providers.manager';
import { GithubProvider } from '@signalcast/backend/services/auth/providers/github.provider';
import { GoogleProvider } from '@signalcast/backend/services/auth/providers/google.provider';
import { AppleProvider } from '@signalcast/backend/services/auth/providers/apple.provider';
import { FarcasterProvider } from '@signalcast/backend/services/auth/providers/farcaster.provider';
import { WalletProvider } from '@signalcast/backend/services/auth/providers/wallet.provider';
import { OauthProvider } from '@signalcast/backend/services/auth/providers/oauth.provider';
import { StripeController } from '@signalcast/backend/api/routes/stripe.controller';

const authenticatedController = [
  UsersController,
  AnalyticsController,
  IntegrationsController,
  SettingsController,
  PostsController,
  MediaController,
  ClippingController,
  BillingController,
  NotificationsController,
  CopilotController,
  WebhookController,
  SignatureController,
  AutopostController,
  SetsController,
  ThirdPartyController,
  OAuthAppController,
  ApprovedAppsController,
  OAuthAuthorizedController,
  AnnouncementsController,
  AdminController,
];
@Module({
  imports: [UploadModule],
  controllers: process.env.MCP_ONLY
    ? [
        RootController,
        OAuthController,
        MediaWidgetController,
        ClippingWidgetController,
      ]
    : [
        RootController,
        PaymentController,
        StripeController,
        AuthController,
        PublicController,
        MonitorController,
        EnterpriseController,
        NoAuthIntegrationsController,
        OAuthController,
        MediaWidgetController,
        ClippingWidgetController,
        ...authenticatedController,
      ],
  providers: [
    AuthService,
    StripeService,
    PaymentService,
    PaymentProviderManager,
    RevenueCatProvider,
    OpenaiService,
    ExtractContentService,
    AuthMiddleware,
    UploadWidgetAuthMiddleware,
    PoliciesGuard,
    PermissionsService,
    CodesService,
    IntegrationManager,
    TrackService,
    ShortLinkService,
    AuthProviderManager,
    GithubProvider,
    GoogleProvider,
    AppleProvider,
    FarcasterProvider,
    WalletProvider,
    OauthProvider,
  ],
  get exports() {
    return [...this.imports, ...this.providers];
  },
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(...authenticatedController);
    consumer.apply(UploadWidgetAuthMiddleware).forRoutes(MediaWidgetController);
    consumer
      .apply(ClippingWidgetAuthMiddleware)
      .forRoutes(ClippingWidgetController);
  }
}
