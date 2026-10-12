'use client';

import React from 'react';
import { useT } from '@signalcast/react/translation/get.transation.service.client';
import dynamic from 'next/dynamic';
import AuthenticationComponent from '@signalcast/frontend/components/settings/authentication.component';
import EmailNotificationsComponent from '@signalcast/frontend/components/settings/email-notifications.component';
import ShortlinkPreferenceComponent from '@signalcast/frontend/components/settings/shortlink-preference.component';
import DeleteAccountComponent from '@signalcast/frontend/components/settings/delete-account.component';

const MetricComponent = dynamic(
  () => import('@signalcast/frontend/components/settings/metric.component'),
  {
    ssr: false,
  }
);

export const GlobalSettings = () => {
  const t = useT();
  return (
    <div className="flex flex-col">
      <h3 className="text-[20px]">{t('global_settings', 'Global Settings')}</h3>
      <AuthenticationComponent />
      <MetricComponent />
      <EmailNotificationsComponent />
      <ShortlinkPreferenceComponent />
      <DeleteAccountComponent />
    </div>
  );
};
