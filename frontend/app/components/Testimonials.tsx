import {motion} from 'framer-motion'
import Image from 'next/image';
import React from "react";
import { useTheme } from '../providers/ThemeProvider';

const testimonials = [
  {
    text: "Jobhunt's advanced filtering system helped us find the perfect candidate for our marketing position. The app's user-friendly interface made it easy to navigate and shortlist candidates.",
    imageSrc: 'https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213538/avatar-caleb-monroe_udwzjt.jpg',
    name: "Emily Chen",
    position: "HR Manager",
    company: "GreenTech Inc",
  },
  {
    text: "We were struggling to find qualified candidates for our software engineering role, but Jobhunt's AI-powered matching algorithm connected us with top talent. The app's video interview feature was a game-changer!",
    imageSrc: 'https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213636/avatar-cameron-yang_zeqvzn.jpg',
    name: "David Lee",
    position: "Talent Acquisition Specialist",
    company: "CodeFusion Ltd",
  },
  {
    text: "Jobhunt allowed us to search and connect with candidates on-the-go. The app's real-time notifications ensured we never missed an opportunity to engage with potential hires.",
    imageSrc: 'https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213931/avatar-kyla-clay_bijmu1.jpg',
    name: "Rachel Patel",
    position: "Recruiter",
    company: "HR Solutions",
  },
  {
    text: "Jobhunt's comprehensive candidate profiles provided us with a 360-degree view of each applicant. The app's analytics tools helped us track our hiring metrics and optimize our recruitment strategy.",
    imageSrc: 'https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213727/avatar-lena-everett_hksomz.jpg',
    name: "Michael Brown",
    position: "CEO",
    company: "StartupX",
  },
  {
    text: "We were impressed with Jobhunt's customer support team, who were always available to assist us with any queries or issues. The app's intuitive design made it easy for our team to use.",
    imageSrc: 'https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213750/avatar-erica-wyatt_bebovc.jpg',
    name: "Sophia Rodriguez",
    position: "Operations Manager",
    company: "PeopleOps",
  },
  {
    text: "Jobhunt's integration with our existing ATS was seamless, allowing us to streamline our hiring process and reduce time-to-hire. The app's candidate management features were particularly useful.",
    imageSrc: 'https://res.cloudinary.com/dlcevwqwr/image/upload/v1728213778/avatar-noel-baldwin_o6gdux.jpg',
    name: "James Kim",
    position: "Talent Manager",
    company: "GlobalCorp",
  },
];


const TestimonialsColumn = (props:{className?:string; testimonials: typeof testimonials, duration?:number}) => {
  const { theme } = useTheme();
    return (
        <div className={ props.className}>
          <motion.div 
            className="flex flex-col"
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: props.duration || 10,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear'
            }}
          >
            {[... new  Array(2)].fill(0).map((_,index)=>(
              <div key={index}>
                {props.testimonials.map(({ text, imageSrc, name, position,company }, index) => (
                  <div key={index}
                    className={`flex items-center p-4 my-4 rounded-lg shadow-md transition duration-200 ${theme === 'light'? 'bg-gray-800 text-gray-100': 'bg-gray-100 text-gray-400'}`}
                  >
                    <Image
                      src={imageSrc}
                      alt={name}
                      className="rounded-full mr-4 mb-6"
                      width={48}
                      height={48}
                    />
                    <div>
                      <p className="font-semibold">
                        <span className="text-blue-600 text-xl font-bold">“</span>
                        {text}
                        <span className="text-blue-600 text-xl font-bold">“</span>
                      </p>
                      <p className="mt-2 text-sm">
                        {name}, {position} at{' '}{company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
    )}


const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={20}/>
        </div>
      </div>
    </section>
  )};

export default Testimonials