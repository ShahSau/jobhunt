import React from 'react'
import Link from 'next/link'
import { IoLocationSharp } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
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
                <div key={job.id} className="ml-6 md:ml-0 group group/item singleJob w-[250px] p-[20px] bg-gray-100 rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                  <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:opacity-50'>{job.title}</h1>
                  </span>
                  <h6 className='text-[#1d1d1d] group-hover:opacity-50'>{job.address}</h6>

                  <span className='flex items-center text-[#1d1d1d] gap-1 group-hover:opacity-50'>
                    <BiTimeFive/>{new Date(job.createdAt).toDateString()}
                  </span>

                  <p className='text-[13px] text-[#1d1d1d] pt-[20px] border-t-[2px] mt-[20px] group-hover:opacity-50'>
                      {job.description.slice(0, 150)+'...'}
                  </p>

                  <div className='company flex items-center gap-2'>
                      <span className='text-[14px] py-[1rem] block group-hover:opacity-50'>{job.company}</span>
                  </div>

                  <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover:bg-indigo-500 group-hover:text-white'>
                      Apply Now
                  </button>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  )
}

export default JobHunt