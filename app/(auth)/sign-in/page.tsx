import Loader from '@/components/Loader'
import LoginForm from '@/components/LoginPage'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
      <LoginForm/>
      </Suspense>
    </div>
  )
}

export default page
