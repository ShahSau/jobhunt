import React, { ChangeEvent, useState } from 'react'
import { useTheme } from '@/app/providers/ThemeProvider';
import Button from './Button';
import { Card,CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';
import BoxInput from './BoxInput';
import Label from './Label';
import Select from './Select';
import TextArea from './TextArea';
import CheckBox from './CheckBox';
import { HiUserCircle } from "react-icons/hi";

import { motion } from 'framer-motion';

const jobTypeOptions = ["Permanent", "Temporary", "Intership"];
const educationOptions = ["Bachelors", "Masters", "Phd"];
const industriesOptions = [
  "Business",
  "Information Technology",
  "Banking",
  "Education",
  "Telecommunication",
  "Others",
];
const experienceOptions = [
  "No Experience",
  "1 Years",
  "2 Years",
  "3 Year+",
];
const CreateJobForm = () => {
  const { theme } = useTheme();
  const [formData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    requirements: "",
    remote: false,
  });

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
  }

  return (
    <div className=''>
      <Card className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}> 
        <CardHeader>
          <CardTitle>Create a New Job</CardTitle>
          <CardDescription>Fill out the form below to post a new job opening.</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.form
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the form is in view
             transition={{ staggerChildren: 0.2 }}
             
          >
            <div className="grid w-full items-center gap-4">
              {/*Company information */}
              <motion.h2 variants={formItemVariants} className="text-xl font-semibold mb-4">1. Your company</motion.h2>

              <motion.div variants={formItemVariants} className="flex flex-col space-y-1.5"> {/* Company Name */}
                <Label htmlFor="company" label="Company Name" theme={theme} />
                <BoxInput name="company" placeholder="Your Company Name" type='text' value={formData.company} onChange={onChange} theme={theme}/>
              </motion.div>

              <motion.div variants={formItemVariants}  className="flex flex-col space-y-1.5"> {/* Address */}
                <Label htmlFor="address" label="Address" theme={theme} />
                <BoxInput name="address" placeholder="e.g. New York, NY or Remote" type='text' value={formData.location} onChange={onChange} theme={theme}/>
              </motion.div>

              <motion.div variants={formItemVariants}  className="col-span-full">
                <Label htmlFor="photo" label="Company Logo" theme={theme} />
                <div className="mt-2 flex items-center gap-x-3">
                  <HiUserCircle aria-hidden="true" className={`h-12 w-12 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`} />
                  <button
                    type="button"
                    className={`rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset ${theme === 'light' ? 'bg-gray-300 text-gray-900 ring-gray-400':'bg-gray-800 text-gray-100 ring-gray-200'}`}
                  >
                    Change
                  </button>
                </div>
              </motion.div>

              <motion.div variants={formItemVariants}  className="flex flex-col space-y-1.5"> {/* Email */}
                <Label htmlFor="email" label="Email" theme={theme} />
                <BoxInput name="email" placeholder="e.g. New York, NY or Remote" type='text' value={formData.location} onChange={onChange} theme={theme}/>
              </motion.div>

              <motion.div variants={formItemVariants}  className="flex flex-col space-y-1.5">
                <Label htmlFor="industry" label="Industry " theme={theme} />
                <Select placeholder="Select Industry" values={industriesOptions}/> 
              </motion.div>


              {/*Company information */}
              <motion.h2 variants={formItemVariants} className="text-xl font-semibold mb-4">2. The Role</motion.h2>

              <motion.div variants={formItemVariants}  className="flex flex-col space-y-1.5"> {/* Job Title */}
                <Label htmlFor="title" label="Position Name" theme={theme} />
                <BoxInput name="title" placeholder="e.g. Senior React Developer" type='text' value={formData.title} onChange={onChange} theme={theme}/>
              </motion.div>
              
              <motion.div variants={formItemVariants}  className="flex flex-col space-y-1.5">
                <Label htmlFor="description" label="Position Description" theme={theme} />
                <TextArea name="description" placeholder="Enter the job description..." value={formData.description} onChange={onChange} theme={theme}/>
              </motion.div>

              <motion.div variants={formItemVariants}  className="flex flex-col space-y-1.5">
                <Label htmlFor="type" label="Job Type" theme={theme} />
                <Select placeholder="Select Job Type" values={jobTypeOptions} />
              </motion.div>

              <motion.div variants={formItemVariants}  className="flex flex-col space-y-1.5">
                <Label htmlFor="salary" label="Salary Range" theme={theme} />
                <BoxInput name="salary" placeholder="e.g. $80,000 - $120,000" type='text' value={formData.salary} onChange={onChange} theme={theme}/>
              </motion.div>

              <motion.div variants={formItemVariants}  className='flex flex-col space-y-1.5'>
                <Label htmlFor="education" label="Education" theme={theme} />
                <Select placeholder="Select Education" values={educationOptions} />
              </motion.div>

              <motion.div variants={formItemVariants}  className='flex flex-col space-y-1.5'>
                <Label htmlFor="experience" label="Experience" theme={theme} />
                <Select placeholder="Select Experience" values={experienceOptions} />
              </motion.div>

              <motion.div variants={formItemVariants}  className='flex flex-col space-y-1.5'>
                <Label htmlFor="experience" label="Number of open positions" theme={theme} />
                <BoxInput name="experience" placeholder="Number of open positions" type='number' value={formData.title} onChange={onChange} theme={theme}/>
              </motion.div>

              <motion.div variants={formItemVariants}  className='flex flex-col space-y-1.5'>
                <Label htmlFor="remote" label="Remote" theme={theme} />
                <CheckBox value={formData.remote} onChange={onChange} name='This is a remote position'/>
              </motion.div>

              <motion.div variants={formItemVariants}  className="flex flex-col space-y-1.5">
                <Label htmlFor="keywords" label="KeyWords" theme={theme} />
                <TextArea name="keywords" placeholder="Enter keywords seperated by comma..." value={formData.description} onChange={onChange}theme={theme}/>
              </motion.div>
            </div>
          </motion.form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type='button' text='Clear' className='w-full mb-4 text-[18px] mt-6 rounded-full text-gray-600 py-2' />
          <Button type='button' text='Create Job Posting' className='w-full mb-4 text-[18px] mt-6 rounded-full text-purple-600 hover:bg-purple-600 py-2 transition-colors duration-300 hover:text-gray-100' />
        </CardFooter>
      </Card>
    </div>
  )
}

export default CreateJobForm