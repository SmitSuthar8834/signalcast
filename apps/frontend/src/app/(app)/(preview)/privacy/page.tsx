export const dynamic = 'force-dynamic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signalcast Privacy Policy',
  description: '',
};

export default async function Privacy() {
  return (
    <div className="max-w-[720px] mx-auto p-[24px] flex flex-col gap-[16px]">
      <h1 className="text-[28px] font-[600]">Privacy Policy</h1>
      <p>
        This policy is a placeholder for the private beta. The final policy
        will be published here before the public launch and before any social
        network app review.
      </p>
      <p>
        Signalcast stores your account e-mail, the OAuth tokens of the channels
        you connect and the posts and media you schedule. Tokens are used only
        to publish and read analytics on your behalf. You can disconnect a
        channel or delete your account at any time from Settings, which removes
        the stored tokens.
      </p>
    </div>
  );
}
