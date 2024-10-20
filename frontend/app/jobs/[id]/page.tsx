'use client'
import { useTheme } from '@/app/providers/ThemeProvider'
import Header from '@/app/components/Header'
import React from 'react'
import { motion } from 'framer-motion'
import { FaUserLarge,FaLocationDot,FaBriefcase,FaCalendarDays } from "react-icons/fa6";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa";
import { IoPhonePortraitSharp,IoMail,IoGlobeOutline } from "react-icons/io5";
import { IoMdPin } from "react-icons/io";
import {  CiLinkedin } from "react-icons/ci";
const LazyMapComponent = React.lazy(() => import('@/app/components/Map'));



const cardItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
};

const Page = () => {
  const { theme } = useTheme()
  return (
    <div className={`pb-6 ${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
      <Header />
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the form is in view
        transition={{ staggerChildren: 0.4 }}
        >
        <motion.h1
          className="text-3xl font-bold mb-8 text-center"
          variants={cardItemVariants}
        >
          Job Details
        </motion.h1>
        
        <div className="container mx-auto p-4 font-sans">
          <div className={`shadow-lg rounded-lg overflow-hidden border ${theme === 'light' ? ' border-gray-400':''}` }>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className='flex space-x-2'>
                  <h1 className="text-2xl font-bold mb-2">Product Designer / UI Designer</h1>
                  <button className="p-2 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="">
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className='border border-gray-500 p-6'>
                  <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
                  <ul className="space-y-3">
                    {[
                      { icon: FaUserLarge, title: "Job Title", value: "Product Designer" },
                      { icon: FaBriefcase, title: "Experience", value: "0-3 Years" },
                      { icon: FaLocationDot, title: "Location", value: "New york" },
                      { icon: AiTwotoneDollarCircle, title: "Offered Salary", value: "$35k - $45k" },
                      { icon: LuGraduationCap, title: "Qualification", value: "Bachelor Degree" },
                      { icon: FaBuilding, title: "Industry", value: "Private" },
                      { icon: FaCalendarDays, title: "Date Posted", value: "Posted 2 hrs ago" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-purple-200 p-2 rounded-full mr-3">
                          <item.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm">{item.title}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t pt-8 border-gray-400">
                      <h2 className="text-xl font-semibold mb-4">Company Overview</h2>
                      <h6 className="text-lg font-semibold mb-4">Jobcy Technology Pvt.Ltd</h6>
                      <p className=" mb-4">Since July 2017</p>
                      <ul className="space-y-3">
                      <li className="flex items-center">
                        <IoPhonePortraitSharp className="w-5 h-5 text-purple-500 mr-3" />
                        <span>+599 560 56555</span>
                      </li>
                      <li className="flex items-center">
                        <IoMail className="w-5 h-5 text-purple-500 mr-3" />
                        <span>jobcytechnology@info.com</span>
                      </li>
                      <li className="flex items-center">
                        <IoGlobeOutline className="w-5 h-5 text-purple-500 mr-3" />
                        <span>www.jobcytechnology.pvt.ltd.com</span>
                      </li>
                      <li className="flex items-center">
                        <IoMdPin className="w-5 h-5 text-purple-500 mr-3" />
                        <span>Oakridge Lane Richardson</span>
                      </li>
                      </ul>
                      
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <p className="mb-4">
                    As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product
                    and data talent. You will help the team design beautiful interfaces that solve business challenges for our
                    clients. We work with a number of Tier 1 banks on building out their digital capabilities. This role is for
                    someone who is eager to learn, but has already demonstrated core UI and UX skills as a Product Designer.
                  </p>

                  <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Have sound knowledge of commercial activities.</li>
                    <li>Build next-generation web applications with a focus on the client side.</li>
                    <li>Work on multiple projects at once, and consistently meet draft deadlines.</li>
                    <li>Have already graduated or are currently in any year of study.</li>
                    <li>Revise the work of previous designers to create a unified aesthetic for our brand materials.</li>
                  </ul>

                  <h2 className="text-xl font-semibold mb-4">Qualification</h2>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>B.C.A / M.C.A under National University course complete.</li>
                    <li>3 or more years of professional design experience.</li>
                    <li>Have already graduated or are currently in any year of study.</li>
                    <li>Advanced degree or equivalent experience in graphic and web design.</li>
                  </ul>

                  <h2 className="text-xl font-semibold mb-4">Skill & Experience</h2>
                  <ul className="list-disc pl-5 space-y-2  mb-4">
                    <li>Understanding of key Design Principal.</li>
                    <li>Proficiency With HTML, CSS, Tailwind.</li>
                    <li>WordPress: 1 year (Required).</li>
                    <li>Experience designing and developing responsive design websites.</li>
                    <li>Web designing: 1 year (Preferred).</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["PHP", "JS", "Marketing", "React", "Photoshop"].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>


              <div className="mt-8 border-t pt-8 border-gray-400">
                <h2 className="text-xl font-semibold mb-4">Job Location</h2>
                <div className="h-96 bg-gray-300 rounded-lg">
                  <div className="h-full flex items-center justify-center text-gray-500">
                    <LazyMapComponent />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-left justify-left">
                <span className=" mr-4">Share this job:</span>
                <button className=" bg-blue-500 text-white rounded">
                    <CiLinkedin className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Page