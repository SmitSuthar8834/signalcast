import { MediaLayoutComponent } from '@signalcast/frontend/components/new-layout/layout.media.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@signalcast/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: 'Signalcast Media',
  description: '',
};

export default async function Page() {
  return <MediaLayoutComponent />
}
