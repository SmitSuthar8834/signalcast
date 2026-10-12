import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from '@signalcast/backend/services/auth/auth.service';
import { StripeService } from '@signalcast/nestjs-libraries/services/stripe.service';
import { PoliciesGuard } from '@signalcast/backend/services/auth/permissions/permissions.guard';
import { PermissionsService } from '@signalcast/backend/services/auth/permissions/permissions.service';
import { IntegrationManager } from '@signalcast/nestjs-libraries/integrations/integration.manager';
import { UploadModule } from '@signalcast/nestjs-libraries/upload/upload.module';
import { OpenaiService } from '@signalcast/nestjs-libraries/openai/openai.service';
import { ExtractContentService } from '@signalcast/nestjs-libraries/openai/extract.content.service';
import { CodesService } from '@signalcast/nestjs-libraries/services/codes.service';
import { PublicIntegrationsController } from '@signalcast/backend/public-api/routes/v1/public.integrations.controller';
import { PublicAuthMiddleware } from '@signalcast/backend/services/auth/public.auth.middleware';
import { SuperAdminGuard } from '@signalcast/backend/services/auth/super.admin.guard';

const authenticatedController = [PublicIntegrationsController];
@Module({
  imports: [UploadModule],
  controllers: process.env.MCP_ONLY ? [] : [...authenticatedController],
  providers: [
    AuthService,
    StripeService,
    OpenaiService,
    ExtractContentService,
    PoliciesGuard,
    PermissionsService,
    CodesService,
    IntegrationManager,
    SuperAdminGuard,
  ],
  get exports() {
    return [...this.imports, ...this.providers];
  },
})
export class PublicApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PublicAuthMiddleware).forRoutes(...authenticatedController);
  }
}

