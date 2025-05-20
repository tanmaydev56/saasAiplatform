import ChangePasswordForm from '@/components/ChangePasswrord'
import Loader from '@/components/Loader'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
      <ChangePasswordForm/>
      </Suspense>
    </div>
  )
}

export default page
