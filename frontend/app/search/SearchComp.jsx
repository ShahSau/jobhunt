import React from 'react'
import Link from 'next/link'
import { IoLocationSharp } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import moment from 'moment';
const SearchComp = ({jobs}) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {jobs && jobs.map((job, index) => (
              <Link href={`/jobs/${job.id}`} key={index}>
                <div key={job.id} className="ml-6 md:ml-0 group group/item singleJob w-[250px] p-[28px] bg-gray-100 rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                  <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:opacity-50'>{job.title}</h1>
                  </span>
                  <h6 className='text-[#1d1d1d] group-hover:opacity-50 flex items-center gap-1'><IoLocationSharp/>{job.address}</h6>

                  <span className='flex items-center text-[#1d1d1d] gap-1 group-hover:opacity-50'>
                    
                    <BiTimeFive/>{moment(job.createdAt).fromNow()}
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
  )
}

export default SearchComp