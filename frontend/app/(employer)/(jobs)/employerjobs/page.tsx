'use client'
import Header from '../../../components/Header'
import React from 'react'
import { useTheme } from '@/app/providers/ThemeProvider';
import CompanyJobCard from '@/app/components/CompanyJobCard';
import { motion } from 'framer-motion';

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

const jobListings: JobListing[] = [
  {
    id: 1,
    title: 'Magento Developer',
    experience: '0-2 Yrs Exp.',
    company: 'Jobcy Technology Pvt.Ltd',
    location: 'California',
    salary: '$250 - $800 / month',
    tags: ['Full Time', 'Urgent', 'Private'],
    keywords: ['Ui designer', 'developer'],
    logo: '/placeholder.svg?height=40&width=40',
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Product Designer',
    experience: '0-5 Yrs Exp.',
    company: 'Jobcy Technology Pvt.Ltd',
    location: 'New York',
    salary: '$250 - $800 / month',
    tags: ['Internship'],
    keywords: ['Marketing', 'business'],
    logo: '/placeholder.svg?height=40&width=40',
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Marketing Director',
    experience: '2-4 Yrs Exp.',
    company: 'Jobcy Technology Pvt.Ltd',
    location: 'New York',
    salary: '$250 - $800 / month',
    tags: ['Part Time', 'Private'],
    keywords: ['Marketing', 'business'],
    logo: '/placeholder.svg?height=40&width=40',
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Project Manager',
    experience: '0-2 Yrs Exp.',
    company: 'Jobcy Technology Pvt.Ltd',
    location: 'California',
    salary: '$250 - $800 / month',
    tags: ['Full Time', 'Urgent', 'Private'],
    keywords: ['Ui designer', 'developer'],
    logo: '/placeholder.svg?height=40&width=40',
    isFavorite: true,
  },
  {
    id: 5,
    title: 'HTML Developer',
    experience: '2-4 Yrs Exp.',
    company: 'Jobcy Technology Pvt.Ltd',
    location: 'California',
    salary: '$250 - $800 / month',
    tags: ['Freelance', 'Internship'],
    keywords: ['Ui designer', 'developer'],
    logo: '/placeholder.svg?height=40&width=40',
    isFavorite: true,
  },
  {
    id: 6,
    title: 'HTML Developer',
    experience: '',
    company: 'Jobcy Technology Pvt.Ltd',
    location: 'New York',
    salary: '$250 - $800 / month',
    tags: ['Freelance', 'Urgent', 'Private'],
    keywords: ['Marketing', 'business'],
    logo: '/placeholder.svg?height=40&width=40',
    isFavorite: false,
  },
]


const Page = () => {
  const { theme } = useTheme();
  const cardItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
  };
  return (
    <div className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
      <Header />
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the form is in view
        transition={{ staggerChildren: 0.4 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-8 text-center"
          variants={cardItemVariants}
        >
          All Jobs Posted 
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
          {jobListings.map((job) => (
            <CompanyJobCard key={job.id} job={job} theme={theme}/>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Page