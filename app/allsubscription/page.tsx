

import { redirect } from 'next/navigation';

import { getSubscriptions } from '@/lib/api';
import { SubscriptionInformationForm } from '@/components/account/subscribe-informmation-form';

const SubscribePage = async () => {
  const { data } = await getSubscriptions();

  if (!data.getSubscriptions) {
    redirect('/login');
  }

  return (
    <div className="space-y-8 font-heading">
      <h1 className="text-3xl font-semibold"></h1>
      <div className="grid">
        <SubscriptionInformationForm className="some-class" items={data.getSubscriptions.items} />
      </div>
    </div>
  );
};

export default SubscribePage;
