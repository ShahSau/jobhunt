'use client'
import React, { FC } from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { RiMoneyDollarCircleLine, RiBriefcase4Line, RiTimeLine } from 'react-icons/ri'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/Card'
import { useTheme } from '../providers/ThemeProvider'

interface JobStatCardProps {
  title: string;
  avgSalary: number;
  jobCount: number;
  expNeeded: number;
  theme: string;
}

const cardItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
};
const JobStatCard: FC<JobStatCardProps> = ({ title, avgSalary, jobCount, expNeeded,theme }) => (
  <motion.div
    className="p-6 flex flex-col space-y-4"
    variants={cardItemVariants}
  >
    <Card className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}> 
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>These statistics are based on the job advertisements posted on our platform.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className={`flex items-center space-x-2 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>
          <RiMoneyDollarCircleLine className="text-green-500" size={24} />
          <span className="text-lg font-medium">
            ${typeof avgSalary === 'number' ? avgSalary.toLocaleString() : 'N/A'}
          </span>
        </div>
        <div className={`flex items-center space-x-2 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>
          <RiBriefcase4Line className="text-blue-500" size={24} />
          <span>{typeof jobCount === 'number' ? `${jobCount.toLocaleString()} jobs` : 'N/A'}</span>
        </div>
        <div className={`flex items-center space-x-2 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>
          <RiTimeLine className="text-yellow-500" size={24} />
          <span>{typeof expNeeded === 'number' ? `${expNeeded} years exp. needed` : 'N/A'}</span>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)


const Page = () => {
  const { theme } = useTheme()
  const jobData = [
    { id: 1, title: 'Software Engineer', avgSalary: 95000, jobCount: 5000, expNeeded: 3 },
    { id: 2, title: 'Data Scientist', avgSalary: 105000, jobCount: 3000, expNeeded: 4 },
    { id: 3, title: 'UX Designer', avgSalary: 85000, jobCount: 2000, expNeeded: 2 },
    { id: 4, title: 'Product Manager', avgSalary: 110000, jobCount: 1500, expNeeded: 5 },
    { id: 5, title: 'DevOps Engineer', avgSalary: 100000, jobCount: 2500, expNeeded: 3 },
    { id: 6, title: 'Frontend Developer', avgSalary: 90000, jobCount: 4000, expNeeded: 2 },
    { id: 7, title: 'Backend Developer', avgSalary: 95000, jobCount: 3500, expNeeded: 3 },
    { id: 8, title: 'Fullstack Developer', avgSalary: 100000, jobCount: 3000, expNeeded: 3 },
    { id: 9, title: 'Mobile Developer', avgSalary: 95000, jobCount: 2000, expNeeded: 3 },
    { id: 10, title: 'QA Engineer', avgSalary: 85000, jobCount: 1500, expNeeded: 2 }
  ]

  return (
    <div className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
        <Header />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the form is in view
          transition={{ staggerChildren: 0.4 }}

          className="max-w-7xl mx-auto"
        >
        <motion.h1
          className="text-3xl font-bold mb-8 text-center"
          variants={cardItemVariants}
        >
          Job Market Statistics
        </motion.h1>
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          >
          {jobData.map((job) => (
            <JobStatCard key={job.id} {...job} theme={theme}/>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Page