import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { LuHeart } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";

const cardItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
  };




interface Job {
  logo: string;
  company: string;
  title: string;
  salary: string;
  experience: string;
  type: string;
  description: string;
  postedAgo: string;
}

const JobCard: React.FC<{ job: Job, theme:string }> = ({ job,theme }) => {
  return (
    <motion.div 
        className={`border p-6  rounded-lg shadow-lg relative ${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400 shadow-gray-500':'bg-gray-800 text-gray-100 shadow-gray-400'}`} 
        variants={cardItemVariants}
    >
    <div className="flex justify-between items-start mb-4">
      <Image src={job.logo} alt={job.company} className="w-10 h-10 rounded" />
      <button className=" hover:text-red-500">
        <LuHeart className="w-6 h-6" />
      </button>
    </div>
    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
    <p className=" mb-4">{job.company}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">{job.salary}</span>
      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">{job.experience}</span>
      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{job.type}</span>
    </div>
    <p className=" mb-4">{job.description}</p>

    <hr className="h-px my-8 bg-gray-400 border-0 " />
    <div className="flex justify-between items-center">
      <span className="text-gray-500 text-sm">{job.postedAgo}</span>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Details
        <MdOutlineArrowOutward className="w-6 h-6 inline-block ml-2 mb-1" />
      </button>
    </div>
  </motion.div>
  )
}

export default JobCard