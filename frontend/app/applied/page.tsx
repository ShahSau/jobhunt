'use client'
import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { useTheme } from '../providers/ThemeProvider'
import JobCard from '../components/JobCard'
const jobs = [
  {
    id: 1,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Project Leader",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$900/ Month",
    experience: "2 Year",
    type: "Permanent",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "30 min ago",
  },
  {
    id: 2,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Graphic Designer",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$350/ Month",
    experience: "Min 0.6 Year",
    type: "Temporary",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "30 min ago",
  },
  {
    id: 3,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Store Manager",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$950/ Month",
    experience: "Min. 1.5 Year",
    type: "Permanent",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "15 days ago",
  },
  {
    id: 4,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Product Designer",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$750/ Month",
    experience: "Min. 1 Year",
    type: "Temporary",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "15 days ago",
  },
  {
    id: 5,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Product Sales Specialist",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$780/ Month",
    experience: "Min. 1 Year",
    type: "Temporary",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "2 days ago",
  },
  {
    id: 6,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Business Associate",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$780/ Month",
    experience: "Min. 1 Year",
    type: "Internship",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "2 days ago",
  },
  {
    id: 7,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Product Sales Specialist",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$780/ Month",
    experience: "Min. 1 Year",
    type: "Permanent",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "2 days ago",
  },
  {
    id: 8,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Business Associate",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$780/ Month",
    experience: "Min. 1 Year",
    type: "Permanent",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "2 days ago",
  },
  {
    id: 9,
    logo: "/placeholder.svg?height=40&width=40",
    title: "Business Associate",
    company: "Jobcy Technology Pvt.Ltd",
    salary: "$780/ Month",
    experience: "Min. 1 Year",
    type: "Permanent",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    postedAgo: "2 days ago",
  },
]
const Page = () => {
  const cardItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
  };
  const { theme } = useTheme();
  return (
    <div className={` ${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
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
            Jobs Applied
          </motion.h1>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mx-4"
            >
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} theme={theme}/>
           ))}
      </motion.div>
      </motion.div>
    </div>



  )
}

export default Page