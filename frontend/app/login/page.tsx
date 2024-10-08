'use client'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineUnlock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { useTheme } from '../providers/ThemeProvider'
import Input from '../components/Input'
import { validateFormData } from '../utils/validation'
import { schemaLogin } from '../schemas/login.schema'
import { useRouter } from 'next/navigation'
import { encryptData } from '../utils/cryptoToken'
import { useUser } from '../providers/AuthProvider'
import Button from '../components/Button'



type FormData = {
  email: string,
  password: string
}

type Errors = {
  email?: string;
  password?: string;
};

const Page = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { setUserSignedIn } = useUser();



  const [state, setState] = useState<FormData>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state)
    const { errors } = validateFormData(schemaLogin, state);

    if (errors) {
      setErrors(errors);
      console.log(errors);
      return;
    }
    setErrors({});

    // Send data to the server
    fetch(`http://localhost:8080/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    }).then(res => res.json()).then(data => {
      if (data.token) {
        const salt = process.env.NEXT_PUBLIC_SALT;
        if (!salt) {
          console.error('Salt is not defined');
          return;
        }
        const encryptedToken = encryptData(data.token, salt);
        setUserSignedIn(true);
        localStorage.setItem('token', encryptedToken);
        localStorage.setItem('user', JSON.stringify(data.data));;
        
        router.push('/myprofile');
      }
    }).catch(err => {
      console.log(err) //use toast to show error message
    })

  }

  return (
    <div className={`h-[100vh] flex justify-center items-center bg-cover ${theme === 'light' ? 'bg-gray-300 text-gray-900':'bg-gray-800 text-gray-100'}`}>
      <div className={`border border-slate-400 rounded-md p-8 shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-30 relative ${theme=== 'light' ? 'bg-slate-200' :'bg-slate-500'}`}>
        <h1 className={`text-4xl font-bold text-center mb-6 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>Login</h1>
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

          <Button type='button' text='Login' className='w-full mb-4 text-[18px] mt-6 rounded-full text-purple-600 hover:bg-purple-600 py-2 transition-colors duration-300 hover:text-gray-100' />
          
          <div>
            <span className='m-4 flex justify-center'><Link href='/register' className='text-purple-500'> Create an account </Link></span>
          </div>


        </form>
      </div>
    </div>

  )
}

export default Page