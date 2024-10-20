import React from 'react'
import { LuUser,LuDownload } from "react-icons/lu";
import { IoLocationOutline,IoLogoLinkedin,IoLogoGithub } from "react-icons/io5";
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Freelancer {
    id: number
    name: string
    rate: number
    image: string
    rating: number
    experience: number
    description: string
    status: "online" | "offline"
  }
  const cardItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
  };
const CandidateCard = ({freelancer,theme}: {freelancer: Freelancer, theme:string}) => {
  return (
    <motion.div 
        key={freelancer.id} 
        className={`rounded-lg shadow-md p-6 flex flex-col border shadow-gray-500 ${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}
        variants={cardItemVariants}
        >
            <div className="flex items-center mb-4">
              <Image
                src={freelancer.image}
                alt={freelancer.name}
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{freelancer.name}</h2>
                <div className='flex flex-row'>
                    <IoLocationOutline className='mt-1 mr-1'/>
                    <span className="">Location</span>
                </div>
                
                <div className='flex flex-row space-x-4 mt-2'>
                    <p className='hover:text-gray-700 cursor-pointer'><IoLogoGithub /></p>
                    <p className='hover:text-blue-700 cursor-pointer'><IoLogoLinkedin /></p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-evenly mb-4 border border-purple-400 rounded-md p-1">
              <span className="  p-1">Exp:{freelancer.experience} Years</span>
              <span className="  p-1">$450003</span>
              <span className=" p-1">+12345688</span>
            </div>
            <p className=" mb-4">{freelancer.description}</p>
            <div className="mt-auto">
                <button className="w-full bg-purple-500 text-white py-2 rounded-md mb-2 flex items-center justify-center">
                    <LuUser className="w-4 h-4 mr-2" />
                    View Profile
                </button>
                <button className="w-full bg-purple-100 text-purple-500 py-2 rounded-md flex items-center justify-center">
                    <LuDownload className="w-4 h-4 mr-2" />
                    Download CV
                </button>
            </div>
          </motion.div>
  )
}

export default CandidateCard