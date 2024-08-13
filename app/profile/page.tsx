import { redirect } from 'next/navigation';



import { GeneralInformationForm } from '@/components/account/general-information-form';
import { activeCustomer } from '@/lib/api';

const ProfilePage = async () => {
  const {data} = await activeCustomer();

  if (!data.activeCustomer) {
    redirect('/login');
  }

  return (
    <div className='space-y-8 font-heading'>
      <h1 className='text-3xl font-semibold'>Profile</h1>
      <div className='gird'>
        <GeneralInformationForm {...data.activeCustomer} />
      </div>
    </div>
  );
};

export default ProfilePage;