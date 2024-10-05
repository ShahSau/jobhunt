'use client'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineUnlock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { useTheme } from '../providers/ThemeProvider'
import Input from '../components/Input'
import { FaUserEdit, FaUserTag } from 'react-icons/fa'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { validateFormData } from '../utils/validation'
import { schemaRegistration } from '../schemas/register.schema'
import { useRouter } from 'next/navigation'

type FormData = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phone: string
}

type Errors = {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
};

const Page = () => {
  const { theme } = useTheme();

  const [state, setState] = useState<FormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: ''
  })
  const [errors, setErrors] = useState<Errors>({})

  const router= useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { errors } = validateFormData(schemaRegistration, state);

    if (errors) {
      setErrors(errors);
      console.log(errors);
      return;
    }
    setErrors({});
    //const jk = process.env.NEXT_PUBLIC_API_URL
    fetch(`http://localhost:8080/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    }).then(res => res.json()).then(data => {
      if(data.success){
        // use toast to show success message and redirect to login page
        setTimeout(() => {
        router.push('/login')
        }, 2000)
      }
    }).catch(err => {
      console.log(err) //use toast to show error message
    })

  }

  return (
    <div className={`h-[100vh] flex justify-center items-center bg-cover ${theme === 'light' ? 'bg-gray-300 text-gray-900':'bg-gray-800 text-gray-100'}`}>
      <div className={`border border-slate-400 rounded-md p-8 shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-30 relative ${theme=== 'light' ? 'bg-slate-200' :'bg-slate-500'}`}>
        <h1 className={`text-4xl font-bold text-center mb-6 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>Register</h1>
        <form onSubmit={
          handleSubmit
        }>
          {/*Eamil */}
          <div className='relative my-8'>
            <Input theme={theme} value={state.email} onChange={handleChange} label='Your Email' name="email" type="text"/>
            <BiUser className='absolute top-1 right-1'/>
            {errors.email && <p style={{ color: 'red', marginTop: '12px' }}>{errors.email}</p>} {/* Display email error message */}
          </div>

          {/*Password */}
          <div className='relative my-8'>
            <Input theme={theme} value={state.password} onChange={handleChange} label='Your Password' name="password" type="password"/>
            <AiOutlineUnlock className='absolute top-1 right-1'/>
            {errors.password && <p style={{ color: 'red', marginTop: '12px' }}>{errors.password}</p>} {/* Display password error message */}
          </div>

          {/*First Name */}
          <div className='relative my-8'>
            <Input theme={theme} value={state.firstName} onChange={handleChange} label='First Name' name="firstName" type="text"/>
            <FaUserEdit className='absolute top-1 right-1'/>
            {errors.firstName && <p style={{ color: 'red', marginTop: '12px' }}>{errors.firstName}</p>} {/* Display first name error message */}
          </div>

          {/*Last Name */}
          <div className='relative my-8'>
            <Input theme={theme} value={state.lastName} onChange={handleChange} label='Last Name' name="lastName" type="text"/>
            <FaUserTag className='absolute top-1 right-1'/>
            {errors.lastName && <p style={{ color: 'red', marginTop: '12px' }}>{errors.lastName}</p>} {/* Display last name error message */}
          </div>

          {/*Phone */}
          <div className='relative my-8'>
            <Input theme={theme} value={state.phone} onChange={handleChange} label='Phone' name="phone" type="text"/>
            <MdOutlinePhoneAndroid className='absolute top-1 right-1'/>
            {errors.phone && <p style={{ color: 'red', marginTop: '12px' }}>{errors.phone}</p>} {/* Display phone error message */}
          </div>

          <button type='submit' className={`w-full mb-4 text-[18px] mt-6 rounded-full text-purple-600 hover:bg-purple-600 py-2 transition-colors duration-300 hover:text-gray-100 ${theme === 'light' ? 'bg-gray-300':'bg-gray-800'}`}>Register</button>

          <div>
            <span className='m-4 flex justify-center'><Link href='/register' className='text-purple-500'> Login to your account </Link></span>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Page