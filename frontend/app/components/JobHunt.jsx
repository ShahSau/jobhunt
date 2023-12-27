import React from 'react'
import Link from 'next/link'
import { IoLocationSharp } from "react-icons/io5";
const JobHunt = ({name, data}) => {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">{name}</h2>
            <Link href="/search" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View all {name}
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {data && data.map((job) => (
              <Link href={`/jobs/${job.id}`}>
                <div key={job.id} className="h-[100px]  lg:h-[300px] group relative aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100 ">
                  <div className="flex text-base font-bold text-gray-900 group-hover:opacity-0 px-2">
                    <h3>
                      <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {job.title}
                      </div>
                    </h3>
                  </div>
                
                  <div className="flex items-center p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                    <div className="w-full rounded-md bg-indigo-500 bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                      Apply Now
                    </div>
                  </div>
                  <div className="mt-6 flex text-base font-normal text-gray-900 group-hover:opacity-0 px-2">
                    <p>
                      {job.description.slice(0, 150)+'...'}
                    </p>
                  </div>
                  <div className="mt-40 flex text-base font-medium text-gray-900 group-hover:opacity-0 justify-center gap-7">
                    <p className='flex'><IoLocationSharp />{job.remote === true ? 'Remote' : job.address}</p>
                    <p>${job.salary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  )
}

export default JobHunt