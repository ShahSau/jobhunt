'use client'
import Header from '../../../../components/Header'
import React from 'react'
import CreateJobForm from '@/app/components/CreateJobForm';
import Testimonials from '@/app/components/Testimonials';
import { useTheme } from '@/app/providers/ThemeProvider';


const Page = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
    <Header />
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">

      <div className="overflow-auto">
        <div className="">
          <CreateJobForm />
        </div> 
          
      </div>
      <div className="hidden md:block overflow-hidden p-4">
        <Testimonials />
      </div>
    </div>
    </div>
  )}



export default Page