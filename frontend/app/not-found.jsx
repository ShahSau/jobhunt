'use client'
import React from 'react'
import Link from 'next/link'
import { useTheme } from '../context/ThemeProvider'

const NotFound = () => {
    const { theme } = useTheme();
  return (
        <div className={`lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 ${theme === 'light'? 'bg-white text-indigo-500':'bg-black text-indigo-300'} h-screen`}>
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 font-bold text-2xl">
                                Looks like you&apos;ve found the
                                doorway to the great nothing
                            </h1>
                            <p className="my-2 mb-6">Sorry about that! Please visit our homepage to get where you need to go.</p>
                            <Link href="/" className="sm:w-full lg:w-auto my-6 border rounded md py-4 px-8 text-center bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
  )
}

export default NotFound