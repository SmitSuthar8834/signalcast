export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { PlatformAnalytics } from '@signalcast/frontend/components/platform-analytics/platform.analytics';
import { isGeneralServerSide } from '@signalcast/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: 'Signalcast Analytics',
  description: '',
};
export default async function Index() {
  return <PlatformAnalytics />;
}
