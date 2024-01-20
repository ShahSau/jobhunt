import Link from 'next/link'
import React from 'react'
import { useTheme } from '../../context/ThemeProvider';


const JobsSide = ({recentJob, remoteJob}) => {
  const { theme } = useTheme();
  return (
    <div className='w-screen h-[1950px] md:h-[1000px] grid grid-rows-2 text-4xl md:grid-cols-2'>
    {/* left side */}
    <div className={`w-full ${theme === 'light'? 'bg-gray-100 text-black':'bg-gray-900 text-white'} centered md:h-[1000px]`}>
      <div>
            <div className="flex items-center justify-between space-x-4 p-2">
              <h2 className="text-xl font-bold">Recent Job</h2>
            </div>
            {/* recent job */}
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8  sm:gap-y-10 p-6">
              { recentJob.map((job, index) => (
                <Link href={`/jobs/${job.id}`} key={index}>
                  <div key={index} className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} rounded-md shadow-md`}>
                    <div className="flex items-center justify-between space-x-4 p-2">
                      <h2 className="text-lg font-medium ">{job.title}</h2>
                      <p className="text-sm font-medium ">{job.company}</p>
                    </div>
                    <p className='text-sm space-x-4 p-2'>{job.description.slice(0,70)+'...'}</p>
                    <div className="flex items-center justify-between space-x-4 p-2">
                      <p className="text-sm font-medium ">{job.remote ? 'Remote': job.address}</p>
                      <p className="text-sm font-medium ">Posted on: {new Date(job.createdAt).toDateString()}</p>
                    </div>

                  </div>
                </Link>
                ))
              }
              <Link href="/search" className="flex items-center justify-center whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View jobs
                {/* <span aria-hidden="true"> &rarr;</span> */}
              </Link>
            </div>
      </div>
    </div>

      {/* right side */}
    <div className={`w-full ${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'} centered md:h-[1000px]`}>
      <div>
            <div className="flex items-center justify-between space-x-4 p-2">
              <h2 className="text-xl font-bold">Remote Job</h2>
            </div>
            {/* recent job */}
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8  sm:gap-y-10 p-6">
              { remoteJob.map((job, index) => (
                <Link href={`/jobs/${job.id}`} key={index}>
                  <div key={index} className={`${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-700 text-gray-200'} rounded-md shadow-md`}>
                    <div className="flex items-center justify-between space-x-4 p-2">
                      <h2 className="text-lg font-medium">{job.title}</h2>
                      <p className="text-sm font-medium">{job.company}</p>
                    </div>
                    <p className='text-sm space-x-4 p-2'>{job.description.slice(0,70)+'...'}</p>
                    <div className="flex items-center justify-between space-x-4 p-2">
                      <p className="text-sm font-medium">{job.remote ? 'Remote': job.address}</p>
                      <p className="text-sm font-medium">Posted on: {new Date(job.createdAt).toDateString()}</p>
                    </div>

                  </div>
                </Link>
                ))
              }
              <Link href="/search" className="flex items-center justify-center whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all jobs
                {/* <span aria-hidden="true"> &rarr;</span> */}
              </Link>
            </div>
      </div>
    </div>
  </div>
  )
}

export default JobsSide