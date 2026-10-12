import { IntegrationValidationTool } from '@signalcast/nestjs-libraries/chat/tools/integration.validation.tool';
import { IntegrationTriggerTool } from '@signalcast/nestjs-libraries/chat/tools/integration.trigger.tool';
import { IntegrationSchedulePostTool } from './integration.schedule.post';
import { GenerateVideoOptionsTool } from '@signalcast/nestjs-libraries/chat/tools/generate.video.options.tool';
import { VideoFunctionTool } from '@signalcast/nestjs-libraries/chat/tools/video.function.tool';
import { GenerateVideoTool } from '@signalcast/nestjs-libraries/chat/tools/generate.video.tool';
import { VideoStatusTool } from '@signalcast/nestjs-libraries/chat/tools/video.status.tool';
import { ClippingTool } from '@signalcast/nestjs-libraries/chat/tools/clipping.tool';
import { ClippingStatusTool } from '@signalcast/nestjs-libraries/chat/tools/clipping.status.tool';
import { ClippingWidgetTicketTool } from '@signalcast/nestjs-libraries/chat/tools/clipping.widget.ticket.tool';
import { GenerateImageTool } from '@signalcast/nestjs-libraries/chat/tools/generate.image.tool';
import { IntegrationListTool } from '@signalcast/nestjs-libraries/chat/tools/integration.list.tool';
import { GroupListTool } from '@signalcast/nestjs-libraries/chat/tools/group.list.tool';
import { UploadFromUrlTool } from '@signalcast/nestjs-libraries/chat/tools/upload.from.url.tool';
import { MediaListTool } from '@signalcast/nestjs-libraries/chat/tools/media.list.tool';
import { PostsListTool } from '@signalcast/nestjs-libraries/chat/tools/posts.list.tool';
import { PostSettingsTool } from '@signalcast/nestjs-libraries/chat/tools/post.settings.tool';
import { UploadWidgetTool } from '@signalcast/nestjs-libraries/chat/tools/upload.widget.tool';
import { UploadWidgetTicketTool } from '@signalcast/nestjs-libraries/chat/tools/upload.widget.ticket.tool';
import { UploadWidgetStatusTool } from '@signalcast/nestjs-libraries/chat/tools/upload.widget.status.tool';

export const toolList = [
  IntegrationListTool,
  GroupListTool,
  IntegrationValidationTool,
  IntegrationTriggerTool,
  IntegrationSchedulePostTool,
  PostsListTool,
  PostSettingsTool,
  GenerateVideoOptionsTool,
  VideoFunctionTool,
  GenerateVideoTool,
  VideoStatusTool,
  ClippingTool,
  ClippingStatusTool,
  ClippingWidgetTicketTool,
  GenerateImageTool,
  UploadFromUrlTool,
  MediaListTool,
  UploadWidgetTool,
  UploadWidgetTicketTool,
  UploadWidgetStatusTool,
];
