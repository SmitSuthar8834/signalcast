export const dynamic = 'force-dynamic';
import { LaunchesComponent } from '@signalcast/frontend/components/launches/launches.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@signalcast/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: 'Signalcast Calendar',
  description: '',
};
export default async function Index() {
  return <LaunchesComponent />;
}
