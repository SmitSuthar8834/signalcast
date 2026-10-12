'use client';

import { InstagramContinue } from '@signalcast/frontend/components/new-launch/providers/continue-provider/instagram/instagram.continue';
import { FacebookContinue } from '@signalcast/frontend/components/new-launch/providers/continue-provider/facebook/facebook.continue';
import { LinkedinContinue } from '@signalcast/frontend/components/new-launch/providers/continue-provider/linkedin/linkedin.continue';
import { GmbContinue } from '@signalcast/frontend/components/new-launch/providers/continue-provider/gmb/gmb.continue';
import { YoutubeContinue } from '@signalcast/frontend/components/new-launch/providers/continue-provider/youtube/youtube.continue';
import { TumblrContinue } from '@signalcast/frontend/components/new-launch/providers/continue-provider/tumblr/tumblr.continue';

export const continueProviderList = {
  instagram: InstagramContinue,
  facebook: FacebookContinue,
  'linkedin-page': LinkedinContinue,
  gmb: GmbContinue,
  youtube: YoutubeContinue,
  tumblr: TumblrContinue,
};
