'use client'
import React from 'react'
import Header from '../components/Header'
import { FaHeart } from "react-icons/fa";
import { MdLocationPin,MdEuro,  } from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";
import Button from '../components/Button';
import Badge from '../components/Badge';
import { motion } from 'framer-motion';
import { useTheme } from '../providers/ThemeProvider';




interface JobListingProps {
  logo: string
  title: string
  company: string
  location: string
  salary: string
  tags?: string[]
  experience?: string
}

const cardItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
};



function JobListing({ logo, title, company, location, salary, tags = [], experience }: JobListingProps) {
  return (
    <motion.div 
      variants={cardItemVariants}
      className="flex items-center space-x-4 p-4 border rounded-lg mx-12"
    >
      <img src={logo} alt={`${company} logo`} className="w-12 h-12 rounded" /> 
      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm">{company}</p>
        <div className="flex lg:items-center space-x-2 mt-1 text-sm flex-col lg:flex-row">
          <MdLocationPin className="w-4 h-4" />
          <span>{location}</span>
          <MdEuro className="w-4 h-4 lg:ml-2" />
          <span>{salary}</span>
          
            <>
              <IoBriefcase className="w-4 h-4 lg:ml-2" />
              <span>{experience}</span>
            </>
          
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Badge key={index} text={tag} />
            ))}
          </div>
        )}
      </div>
      <div className="space-x-2 hidden md:flex">
        <Button type='button' icon='' text='Remove from fav' className=' text-red-500 broder border-red-500' />
        <Button type='button' icon='' text='Job details' className=' text-red-500 ' />
      </div>
    </motion.div>
  )
}

const Page = () => {
  const { theme } = useTheme()
  const jobs = [
    {
      logo: "/placeholder.svg?height=48&width=48",
      title: "Business Associate",
      company: "Jobcy Technology Pvt.Ltd",
      location: "California",
      salary: "$250 - $800 / month",
      tags: ["Part Time", "Urgent"],
      experience: "0-2 Yrs Exp.",
    },
    {
      logo: "/placeholder.svg?height=48&width=48",
      title: "Business Associate",
      company: "Jobcy Technology Pvt.Ltd",
      location: "California",
      salary: "$250 - $800 / month",
      tags: ["Part Time", "Urgent"],
      experience: "0-2 Yrs Exp.",
    },
    {
      logo: "/placeholder.svg?height=48&width=48",
      title: "Marketing Director",
      company: "Creative Agency",
      location: "New York",
      salary: "$250 - $800 / month",
      tags: ["Part Time", "Private"],
      experience: "2-4 Yrs Exp.",
    },
    {
      logo: "/placeholder.svg?height=48&width=48",
      title: "Marketing Director",
      company: "Creative Agency",
      location: "New York",
      salary: "$250 - $800 / month",
      tags: ["Part Time", "Private"],
      experience: "2-4 Yrs Exp.",
    },
    {
      logo: "/placeholder.svg?height=48&width=48",
      title: "HTML Developer",
      company: "Jobcy Technology Pvt.Ltd",
      location: "California",
      salary: "$250 - $800 / month",
      tags: ["Freelance", "Freelance"],
      experience: "2-4 Yrs Exp.",
    },
    {
      logo: "/placeholder.svg?height=48&width=48",
      title: "Marketing Director",
      company: "Creative Agency",
      location: "New York",
      salary: "$250 - $800 / month",
      tags: ["Part Time", "Private"],
      experience: "2-4 Yrs Exp.",
    },
    {
      logo: "/placeholder.svg?height=48&width=48",
      title: "HTML Developer",
      company: "Jobcy Technology Pvt.Ltd",
      location: "California",
      salary: "$250 - $800 / month",
      tags: ["Freelance", "Freelance"],
      experience: "2-4 Yrs Exp.",
    },

  ]
  return (
    // render only the visible job on the screen
    <div className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
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
          My Favourite Jobs
        </motion.h1>
        <motion.div className="space-y-4 w-full xl:w-2/3 ml-0  xl:ml-80">
          {jobs.map((job, index) => (
            <JobListing key={index} {...job} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Page