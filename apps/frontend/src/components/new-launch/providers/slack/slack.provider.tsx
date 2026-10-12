'use client';

import {
  PostComment,
  withProvider,
} from '@signalcast/frontend/components/new-launch/providers/high.order.provider';
import { FC } from 'react';
import { useSettings } from '@signalcast/frontend/components/launches/helpers/use.values';
import { SlackChannelSelect } from '@signalcast/frontend/components/new-launch/providers/slack/slack.channel.select';
import { SlackDto } from '@signalcast/nestjs-libraries/dtos/posts/providers-settings/slack.dto';
const SlackComponent: FC = () => {
  const form = useSettings();
  return (
    <div>
      <SlackChannelSelect {...form.register('channel')} />
    </div>
  );
};
export default withProvider({
  postComment: PostComment.COMMENT,
  minimumCharacters: [],
  SettingsComponent: SlackComponent,
  CustomPreviewComponent: undefined,
  dto: SlackDto,
  maximumCharacters: 400000,
});
