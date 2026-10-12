import { LifetimeDeal } from '@signalcast/frontend/components/billing/lifetime.deal';
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@signalcast/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: 'Signalcast Lifetime deal',
  description: '',
};
export default async function Page() {
  return <LifetimeDeal />;
}
