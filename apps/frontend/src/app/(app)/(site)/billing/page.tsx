export const dynamic = 'force-dynamic';
import { BillingComponent } from '@signalcast/frontend/components/billing/billing.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@signalcast/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${'Signalcast'} Billing`,
  description: '',
};
export default async function Page() {
  return (
    <div className="bg-newBgColorInner flex-1 flex-col flex p-[20px] gap-[12px]">
      <BillingComponent />
    </div>
  );
}
