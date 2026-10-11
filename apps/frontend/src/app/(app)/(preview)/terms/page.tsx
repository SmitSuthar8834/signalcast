export const dynamic = 'force-dynamic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signalcast Terms of Service',
  description: '',
};

export default async function Terms() {
  return (
    <div className="max-w-[720px] mx-auto p-[24px] flex flex-col gap-[16px]">
      <h1 className="text-[28px] font-[600]">Terms of Service</h1>
      <p>
        These terms are a placeholder for the private beta. The final terms
        will be published here before the public launch.
      </p>
      <p>
        Until then, Signalcast is provided as is, without warranty, and you
        remain responsible for the content you publish to your connected
        channels.
      </p>
    </div>
  );
}
