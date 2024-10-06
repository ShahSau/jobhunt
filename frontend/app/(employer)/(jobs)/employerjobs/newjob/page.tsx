'use client'
import { useTheme } from '@/app/providers/ThemeProvider';
import Header from '../../../../components/Header'
import React from 'react'
import CreateJobForm from '@/app/components/CreateJobForm';
import Testimonials from '@/app/components/Testimonials';




const Page = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Header />
      {/**split the screen into two parts and hide the right part in small screen */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">

        {/**Left Part */}
        <div className="bg-blue-500 p-8 h-full overflow-y-scroll">
          <h1 className="text-white text-3xl">Left Part</h1>
          <p className="text-white mt-4">This part is always visible.</p>
          <CreateJobForm
            // jobTypeOptions={jobTypeOptions}
            // educationOptions={educationOptions}
            // industriesOptions={industriesOptions}
            // experienceOptions={experienceOptions}
          />
        </div>

        <div className={`p-8 hidden lg:block h-screen ${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'}`}>
          <Testimonials /> 
        </div>
      </div>
      {/* <form className={`${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'} p-6`}>
      <div className="space-y-12">
        <div className=" border-gray-900/10 pb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">New Job</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Create a new job.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6">
                Job Title
              </label>
              <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  placeholder="Enter Job Description"
                  required
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7">Job Details</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  pattern="\S+@\S+\.\S+"
                  title="Your email is invalid"
                  
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="address" className="block text-sm font-medium leading-6">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter Address"
                  
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="salary" className="block text-sm font-medium leading-6">
                Salary
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  placeholder="Enter Salary Range"
                  
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="company" className="block text-sm font-medium leading-6">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="jobType" className="block text-sm font-medium leading-6">
                Job Type
              </label>
              <div className="mt-2">
                <select
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {jobTypeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="education" className="block text-sm font-medium leading-6">
                Level of Education
              </label>
              <div className="mt-2">
                <select
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {educationOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="industry" className="block text-sm font-medium leading-6">
                Industry
              </label>
              <div className="mt-2">
                <select
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {industriesOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="experience" className="block text-sm font-medium leading-6">
                Level of Experience
              </label>
              <div className="mt-2">
                <select
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {experienceOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="position" className="block text-sm font-medium leading-6">
                Number of Positions
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  placeholder="Enter No. of Positions"
                  
                  required
                  min={1}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="remote" className="block text-sm font-medium leading-6">
                Remote
              </label>
              <div className="mt-2">
                <input
                   id="remote"
                   name="remote"
                   type="checkbox"
                   
                   className="block w-4 rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form> */}
    </div>
  )
}

export default Page