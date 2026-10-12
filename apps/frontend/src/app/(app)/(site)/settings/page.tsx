import { SettingsPopup } from '@signalcast/frontend/components/layout/settings.component';
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@signalcast/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${'Signalcast'} Settings`,
  description: '',
};
export default async function Index(props: {
  searchParams: Promise<{
    code: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  return <SettingsPopup />;
}
