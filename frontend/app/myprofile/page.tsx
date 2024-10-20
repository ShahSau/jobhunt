'use client'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useUser } from '../providers/AuthProvider'
//import { useRouter } from 'next/navigation'
//import CustomForm from '../components/CustormForm'
import { useTheme } from '../providers/ThemeProvider'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/Card'
import Button from '@/app/components/Button'
import Image from 'next/image'
import { IoMdDownload } from 'react-icons/io'
import Badge from '@/app/components/Badge'
import { MdPhoneAndroid,MdLocationOn,MdOutlineEmail } from 'react-icons/md'
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { motion } from 'framer-motion'
import { IoPencil } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
const Page = () => {
  const { userSignedIn } = useUser()
  //const router = useRouter()
  const { theme } = useTheme()
  

  useEffect(() => {
    // if(!userSignedIn) {
    //   router.push('/login')
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignedIn])
  
  return (
    // <div className={` ${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'}`}>
    //   <Header />
    //   <h1 className="text-3xl font-bold flex justify-center mb-6">
    //     My Profile Page
    //   </h1>
    //   {/* <CustomForm /> */}
    // </div>

    <div className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-6">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -200 }} 
            animate={{ opacity: 1, x: 0 }}      
            transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
            className='md:col-span-1'
          >
            <Card className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213727/avatar-lena-everett_hksomz.jpg"
                      alt="Gabriel Palmer"
                      width={150}
                      height={150}
                      className="rounded-full mb-4 transition-transform duration-300 ease-in-out "
                    />
                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      <span className="sr-only">Edit image</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold">Gabriel Palmer</h2>
                  <p className="text-muted-foreground">Creative Designer</p>
                </div>
                <div className="mt-6 space-y-4">
                  <div className='pb-4'>
                    <div className='flex space-x-2'>
                      <h3 className="font-semibold pb-2">Profile Overview</h3>
                      <IoPencil className="w-6 h-6 text-muted-foreground" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div className='font-bold'>Categories</div>
                      <div>Accounting / Finance</div>
                      <div className='font-bold'>Offered Salary</div>
                      <div>$450 per hour</div>
                      <div className='font-bold'>Languages</div>
                      <div>English, Turkish, Japanese</div>
                      <div className='font-bold'>Experience</div>
                      <div>3 Years</div>
                      <div className='font-bold'>Qualification</div>
                      <div>Associate Degree</div>
                    </div>
                  </div>
                  
                  <Button type='button' icon={<IoMdDownload />} text='Download CV' className='w-full mb-4 text-[18px] mt-6 rounded-full bg-purple-600 py-2 transition-colors duration-300 text-gray-100' />
                  
                </div>
                <div className="mt-6 mb-4">
                  <div className='flex'>
                    <h3 className="font-semibold mb-2">Professional Skills</h3>
                    <IoMdAdd className="w-6 h-6 text-muted-foreground" />
                  </div>
                 
                  <div className="flex flex-wrap gap-2">
                    <Badge text='User Interface Design' />
                    <Badge text='Web Design' />
                    <Badge text='Responsive Design' />
                    <Badge text='Mobile App Design' />
                  </div>
                </div>

                <Card className={`${theme === 'light' ? 'border-gray-400':''}`}>
                  <CardHeader>
                    <div className='flex space-x-2'>
                      <CardTitle>Contact Details</CardTitle>
                      <IoPencil className="w-6 h-6 text-muted-foreground" />
                    </div>
                    
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className='mr-2 h-8 w-8 justify-center items-center flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'>
                          <FaLinkedinIn className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <span>linkedin.com/in/shahriarksaurov</span>
                      </li>
                      <li className="flex items-center">
                        <div className='mr-2 h-8 w-8 justify-center items-center flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'>
                          <BsGithub className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <span>github.com/shahriarksaurov</span>
                      </li>
                      <li className="flex items-center">
                        <div className='mr-2 h-8 w-8 justify-center items-center flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'>
                          <MdOutlineEmail className="h-6 w-6 text-muted-foreground" />
                        </div>

                        <span>shahriarksaurov@gmail.com</span>
                      </li>
                      <li className="flex items-center">
                      <div className='mr-2 h-8 w-8 justify-center items-center flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'>
                          <MdLocationOn className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <span>Berlin, Germany</span>
                      </li>
                      <li className="flex items-center">
                        <div className='mr-2 h-8 w-8 justify-center items-center flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'>
                          <MdPhoneAndroid className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <span>+1234566455214</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>


          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 200 }} 
            animate={{ opacity: 1, x: 0 }}      
            transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
            className='md:col-span-2'
          >
            <Card className={`${theme === 'light' ? 'bg-gray-300 text-gray-900 border-gray-400':'bg-gray-800 text-gray-100'}`}>
              <CardContent className="p-6">
                <section className="mb-8">
                  <div className='flex space-x-2'>
                    <h3 className="text-2xl font-bold mb-4">About Me</h3>
                    <IoPencil className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience.
                    Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the
                    card title and bulk the card&apos;s content Moltin gives you platform.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    As a highly skilled and successful product development and design specialist with more than 4 Years of My
                    experience lies in successfully conceptualizing, designing, and modifying consumer products specific to
                    interior design and home furnishings.
                  </p>
                </section>

                <section className="mb-8">
                  <div className='flex justify-between items-center'>
                    <h3 className="text-2xl font-bold mb-4">Education</h3>
                    <IoMdAdd className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        degree: "BCA - Bachelor of Computer Applications",
                        school: "International University",
                        years: "2004 - 2010",
                        description:
                          "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successful product development and design specialist with more than 4 Years of My experience.",
                      },
                      {
                        degree: "MCA - Master of Computer Application",
                        school: "International University",
                        years: "2010 - 2012",
                        description:
                          "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successful product development and design specialist with more than 4 Years of My experience.",
                      },
                      {
                        degree: "Design Communication Visual",
                        school: "International University",
                        years: "2012-2015",
                        description:
                          "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successful product development and design specialist with more than 4 Years of My experience.",
                      },
                    ].map((edu, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                            {edu.degree[0]}
                          </div>
                        </div>
                        <div>
                          <div className='flex space-x-3'>
                            <h4 className="font-semibold">{edu.degree}</h4>
                            <IoPencil className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {edu.school} - ({edu.years})
                          </p>
                          <p className="mt-2 text-muted-foreground">{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className='flex justify-between items-center'>
                    <h3 className="text-2xl font-bold mb-4">Experience</h3>
                    <IoMdAdd className="w-8 h-8 text-muted-foreground" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          W
                        </div>
                      </div>
                      <div>
                        <div className='flex space-x-2'>
                          <h4 className="font-semibold">Web Design & Development Team Leader</h4>
                          <IoPencil className="w-6 h-6 text-muted-foreground" />
                        </div>
                        
                        <p className="text-sm text-muted-foreground">Creative Agency - (2013 - 2016)</p>
                        <p className="mt-2 text-muted-foreground">
                          There are many variations of passages of available, but the majority alteration in some form. As a
                          highly skilled and successful product development and design specialist with more than 4 Years of My
                          experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          W
                        </div>
                      </div>
                      <div>
                        <div className='flex space-x-2'>
                          <h4 className="font-semibold">Web Design & Development Team Leader</h4>
                          <IoPencil className="w-6 h-6 text-muted-foreground" />
                        </div>
                        
                        <p className="text-sm text-muted-foreground">Creative Agency - (2013 - 2016)</p>
                        <p className="mt-2 text-muted-foreground">
                          There are many variations of passages of available, but the majority alteration in some form. As a
                          highly skilled and successful product development and design specialist with more than 4 Years of My
                          experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          W
                        </div>
                      </div>
                      <div>
                        <div className='flex space-x-2'>
                          <h4 className="font-semibold">Web Design & Development Team Leader</h4>
                          <IoPencil className="w-6 h-6 text-muted-foreground" />
                        </div>
                        
                        <p className="text-sm text-muted-foreground">Creative Agency - (2013 - 2016)</p>
                        <p className="mt-2 text-muted-foreground">
                          There are many variations of passages of available, but the majority alteration in some form. As a
                          highly skilled and successful product development and design specialist with more than 4 Years of My
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Page