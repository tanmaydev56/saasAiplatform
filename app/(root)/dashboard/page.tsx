
import { supabase } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  ;
 const session = await supabase.auth.getSession()
  const user = session.data.session?.user
  
  if (user) {
    redirect('/sign-in')
  }

  return (
    <div>
      Hello, this is the Home Page
    </div>
  )
}

export default page
