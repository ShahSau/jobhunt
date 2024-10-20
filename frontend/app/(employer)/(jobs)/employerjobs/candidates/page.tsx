'use client'
import CandidateCard from '@/app/components/CandidateCard'
import Header from '@/app/components/Header'
import { useTheme } from '@/app/providers/ThemeProvider'
import { motion } from 'framer-motion'
import React from 'react'
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
const cardItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0,transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1]} },
};
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
const freelancers: Freelancer[] = [
  {
    id: 1,
    name: "Brooke Hayes",
    rate: 310,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213538/avatar-caleb-monroe_udwzjt.jpg",
    rating: 4.5,
    experience: 4,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "online",
  },
  {
    id: 2,
    name: "Cerys Woods",
    rate: 450,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213727/avatar-lena-everett_hksomz.jpg",
    rating: 5,
    experience: 2,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "offline",
  },
  {
    id: 3,
    name: "Jeffrey Montgomery",
    rate: 280,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213653/avatar-harry-bender_pktko6.jpg",
    rating: 4.5,
    experience: 7,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "online",
  },
  {
    id: 4,
    name: "Cerys Woods",
    rate: 450,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213750/avatar-erica-wyatt_bebovc.jpg",
    rating: 5,
    experience: 2,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "offline",
  },
  {
    id: 5,
    name: "Jeffrey Montgomery",
    rate: 280,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213931/avatar-kyla-clay_bijmu1.jpg",
    rating: 4.5,
    experience: 7,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "online",
  },
  {
    id: 6,
    name: "Cerys Woods",
    rate: 450,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213653/avatar-harry-bender_pktko6.jpg",
    rating: 5,
    experience: 2,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "offline",
  },
  {
    id: 7,
    name: "Jeffrey Montgomery",
    rate: 280,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213727/avatar-lena-everett_hksomz.jpg",
    rating: 4.5,
    experience: 7,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "online",
  },
  {
    id: 8,
    name: "Cerys Woods",
    rate: 450,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213538/avatar-caleb-monroe_udwzjt.jpg",
    rating: 5,
    experience: 2,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "offline",
  },
  {
    id: 9,
    name: "Jeffrey Montgomery",
    rate: 280,
    image: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213931/avatar-kyla-clay_bijmu1.jpg",
    rating: 4.5,
    experience: 7,
    description: "Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.",
    status: "online",
  },
]
const Page = () => {
  const { theme } = useTheme();
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
          All Candidates applied for the job
        </motion.h1>
        <div 
          className="m-6 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {
            freelancers.map((freelancer) => (
              <CandidateCard key={freelancer.id} freelancer={freelancer} theme={theme} />
            ))

          }
        </div>
      </motion.div>



      <div className="flex justify-center items-center mt-8 ">
        <button className="p-2 rounded-full border border-gray-300 mr-2">
          <CiCircleChevLeft className="w-8 h-8" />
        </button>
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-full mx-1 ${
              page === 1 ? 'bg-purple-500 text-white' : 'bg-gray-400'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="p-2 rounded-full border border-gray-300 ml-2">
          <CiCircleChevRight className="w-8 h-8" />
        </button>
      </div>


    </div>
  )
}

export default Page