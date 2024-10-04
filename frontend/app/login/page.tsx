import Link from 'next/link'
import React from 'react'
import { AiOutlineUnlock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'


const Page = () => {
  return (
    <div className='text-black h-[100vh] flex justify-center items-center bg-cover bg-red-200'>
      <div>
        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
          <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
            <form>
              <div className='relative my-6'>
                <BiUser className='absolute top-1'/>
                <input type='text' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appreance-none dark:focus:border-blue-500 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                <label htmlFor='email' className='absolute text-sm text-white duration-300 transform translate-y-6 scale-75 top-1 left-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>
              </div>

              <div className='relative my-6'>
                <AiOutlineUnlock className='absolute top-1'/>
                <input type='password' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appreance-none dark:focus:border-blue-500 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                <label htmlFor='password' className='absolute text-sm text-white duration-300 transform translate-y-6 scale-75 top-1 left-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Password</label>
              </div>

              <button type='submit' className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'>Login</button>

              <div>
                <span className='m-4'>New here?<Link href='/register' className='text-blue-500'> Create an account </Link></span>
              </div>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Page