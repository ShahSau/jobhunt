'use client'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useUser } from '../providers/AuthProvider'
import { useRouter } from 'next/navigation'
import CustomForm from '../components/CustormForm'
import { useTheme } from '../providers/ThemeProvider'

const Page = () => {
  const { userSignedIn } = useUser()
  const router = useRouter()
  const { theme } = useTheme()
  

  useEffect(() => {
    if(!userSignedIn) {
      router.push('/login')
    }
  }, [userSignedIn])
  return (
    <div className={` ${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'}`}>
      <Header />
      <h1 className="text-3xl font-bold flex justify-center mb-6">
        My Profile Page
      </h1>
      <CustomForm />
    </div>
  )
}

export default Page