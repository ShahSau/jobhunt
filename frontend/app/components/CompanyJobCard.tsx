import Image from 'next/image';
import React, { FC } from 'react'
import { GoPencil } from "react-icons/go";
interface JobListing {
    id: number
    title: string
    experience: string
    company: string
    location: string
    salary: string
    tags: string[]
    keywords: string[]
    logo: string
    isFavorite: boolean
  }
  const tagColors: { [key: string]: string } = {
    'Full Time': 'bg-green-100 text-green-800',
    Urgent: 'bg-yellow-100 text-yellow-800',
    Private: 'bg-blue-100 text-blue-800',
    Internship: 'bg-purple-100 text-purple-800',
    'Part Time': 'bg-red-100 text-red-800',
    Freelance: 'bg-indigo-100 text-indigo-800',
  }
const CompanyJobCard: FC<{ job: JobListing,theme:string }> = ({ job,theme }) => {
  return (
    <div 
        className={`rounded-lg p-6 flex flex-col justify-between border shadow-md ${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400 shadow-gray-500':'bg-gray-800 text-gray-100 shadow-gray-400'} hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out`}
    >
        <div>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                    <Image src={job.logo} alt={job.company} className="w-10 h-10 mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">{job.title}</h2>
                        <p className="text-sm">{job.experience}</p>
                    </div>
                </div>
                <button
                    className={`text-red-500 focus:outline-none opacity-100`}
                >
                    <GoPencil className="w-6 h-6" fill='currentColor'  />
                </button>
            </div>
            <p className=" mb-2">{job.company}</p>
            <div className="flex items-center  mb-4">
                <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {job.location}
            </div>
            <div className="flex items-center  mb-4">
                <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
                </svg>
                {job.salary}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                <span key={index} className={`px-2 py-1 rounded-full text-xs font-medium ${tagColors[tag]}`}>
                    {tag}
                </span>
                ))}
            </div>
        </div>
        <div className="mt-4">
            <p>
            Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the cards content Moltin gives you platform.
            </p>
        <div className="flex items-center mb-2 mt-6">
            <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            ></path>
            </svg>
            Keywords : {job.keywords.join(', ')}
        </div>
        
        </div>
    </div>
  )
}

export default CompanyJobCard