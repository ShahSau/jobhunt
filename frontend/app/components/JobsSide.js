import Link from 'next/link'
import React from 'react'

const JobsSide = ({recentJob, remoteJob}) => {
  return (
    <div className='w-screen h-[1950px] md:h-[1000px] grid grid-rows-2 text-white text-4xl md:grid-cols-2'>
    {/* left side */}
    <div className='w-full bg-gray-100 centered md:h-[1000px]'>
      <div>
            <div className="flex items-center justify-between space-x-4 p-2">
              <h2 className="text-lg font-medium text-gray-900">Recent Job</h2>
              <Link href="/search" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all
                {/* <span aria-hidden="true"> &rarr;</span> */}
              </Link>
            </div>
            {/* recent job */}
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8  sm:gap-y-10 p-6">
              { recentJob.map((job, index) => (
                <Link href={`/job/${job.id}`} key={index}>
                  <div key={index} className='bg-white rounded-md shadow-md'>
                    <div className="flex items-center justify-between space-x-4 p-2">
                      <h2 className="text-lg font-medium text-gray-900">{job.title}</h2>
                      <p className="text-sm font-medium text-gray-900">{job.company}</p>
                    </div>
                    <p className='text-black text-sm space-x-4 p-2'>{job.description.slice(0,70)+'...'}</p>
                    <div className="flex items-center justify-between space-x-4 p-2">
                      <p className="text-sm font-medium text-gray-900">{job.remote ? 'Remote': job.address}</p>
                      <p className="text-sm font-medium text-gray-900">{new Date(job.createdAt).toDateString()}</p>
                    </div>

                  </div>
                </Link>
                ))
              }
            </div>
      </div>
    </div>

      {/* right side */}
    <div className='w-full bg-white centered md:h-[1000px]'>
      <div>
            <div className="flex items-center justify-between space-x-4 p-2">
              <h2 className="text-lg font-medium text-gray-900">Recent Job</h2>
              <Link href="/search" className="whitespace-wrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all
                {/* <span aria-hidden="true"> &rarr;</span> */}
              </Link>
            </div>
            {/* recent job */}
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8  sm:gap-y-10 p-6">
              { remoteJob.map((job, index) => (
                <Link href={`/job/${job.id}`} key={index}>
                  <div key={index} className='bg-gray-100 rounded-md shadow-md'>
                    <div className="flex items-center justify-between space-x-4 p-2">
                      <h2 className="text-lg font-medium text-gray-900">{job.title}</h2>
                      <p className="text-sm font-medium text-gray-900">{job.company}</p>
                    </div>
                    <p className='text-black text-sm space-x-4 p-2'>{job.description.slice(0,70)+'...'}</p>
                    <div className="flex items-center justify-between space-x-4 p-2">
                      <p className="text-sm font-medium text-gray-900">{job.remote ? 'Remote': job.address}</p>
                      <p className="text-sm font-medium text-gray-900">{new Date(job.createdAt).toDateString()}</p>
                    </div>

                  </div>
                </Link>
                ))
              }
            </div>
      </div>
    </div>
  </div>
  )
}

export default JobsSide