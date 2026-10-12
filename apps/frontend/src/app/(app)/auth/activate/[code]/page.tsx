export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { AfterActivate } from '@signalcast/frontend/components/auth/after.activate';
import { isGeneralServerSide } from '@signalcast/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${
    'Signalcast'
  } - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <AfterActivate />;
}
