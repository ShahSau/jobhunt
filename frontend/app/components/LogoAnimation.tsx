"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Sample logo data - replace with your actual logos
const logos = [
  { id: 1, src: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1729506225/logo1_c1azni.jpg", alt: "Logo 1" },
  { id: 2, src: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1729506226/logo3_u1dzez.jpg", alt: "Logo 2" },
  { id: 3, src: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1729506225/logo2_tyn2ap.jpg", alt: "Logo 3" },
  { id: 4, src: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1729506487/logo4_jjkorm.webp", alt: "Logo 4" },
  { id: 5, src: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1729506653/logo7_vlfybt.webp", alt: "Logo 5" },
  { id: 6, src: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1729506653/logo8_mf6ijb.webp", alt: "Logo 6" },
  { id: 7, src: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1729506653/logo6_oaztgd.webp", alt: "Logo 7" },
  { id: 8, src: "https://res.cloudinary.com/dlcevwqwr/image/upload/v1729506653/logo5_b8plml.webp", alt: "Logo 8" },
]
const LogoAnimation = () => {
    const [duplicatedLogos, setDuplicatedLogos] = useState(logos)

    useEffect(() => {
      // Duplicate the logos to create a seamless loop
      setDuplicatedLogos([...logos, ...logos])
    }, [])
  
    return (
      <div className="w-full overflow-hidden bg-gray-100 py-10">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-30%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo) => (
            <div key={logo.id} className="mx-4 flex items-center justify-center">
              <img src={logo.src} alt={logo.alt} className="h-12 w-12 " />
            </div>
          ))}
        </motion.div>
      </div>
    )
}

export default LogoAnimation