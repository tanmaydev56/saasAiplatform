import LoginForm from '@/components/LoginPage'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <LoginForm/>
      </Suspense>
    </div>
  )
}

export default page
