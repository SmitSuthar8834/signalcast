export const dynamic = 'force-dynamic';
import { Login } from '@signalcast/frontend/components/auth/login';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@signalcast/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: 'Signalcast Login',
  description: '',
};
export default async function Auth() {
  return <Login />;
}
