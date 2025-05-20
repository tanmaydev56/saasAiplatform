// app/login/page.tsx

import LoginForm from '@/components/LoginPage';
import Loader from '@/components/Loader';
import { Suspense } from 'react';

export default  function Page() {

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen w-full"><Loader /></div>}>
      <LoginForm />
    </Suspense>
  );
}
