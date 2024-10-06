'use client'
import Header from '../../../../components/Header'
import React from 'react'
import CreateJobForm from '@/app/components/CreateJobForm';
import Testimonials from '@/app/components/Testimonials';



const Page = () => {

  return (
    <>
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
    </>
  )}



export default Page