import ChangePasswordForm from '@/components/ChangePasswrord'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <ChangePasswordForm/>
      </Suspense>
    </div>
  )
}

export default page
