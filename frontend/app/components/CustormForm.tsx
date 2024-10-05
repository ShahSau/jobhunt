import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaUser, FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { MdPhoto } from "react-icons/md";
import { useTheme } from '../providers/ThemeProvider';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaMobileScreenButton } from 'react-icons/fa6';
import FormInput from './FormInput';
import axios from 'axios';
import { decryptData } from '../utils/cryptoToken';
import Image from 'next/image';


const preset_key = process.env.PRESET_KEY || '';
const cloud_name = process.env.CLOUD_NAME || '';


const CustomForm: FC = () => {
    const { theme } = useTheme();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    cv: null as File | null | string,
    github: '',
    linkedin: '',
  });
  const [token, setToken] = useState<string | null>(null);


  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user') || '{}');
    setFormData({
        ...formData,
        username: user.username,
        email: user.email ,
        firstName: user.firstName ,
        lastName: user.lastName ,
        phone: user.phone ,
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const tokenString = window.localStorage.getItem('token');
    const salt = process.env.NEXT_PUBLIC_SALT|| '';
    const token = tokenString ? decryptData(tokenString, salt) : null;
    setToken(token);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
   
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) {
      return;
    }
    const picformData = new FormData();
    picformData.append('file', file);
    if (preset_key) {
        picformData.append('upload_preset', preset_key);
    } else {
      console.error('Preset key is not defined');
      return;
    }

    axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      picformData
    ).then((response)=>{
      if (response.status === 200) {
        // toast.success('File uploaded successfully')
        setFormData(prevState => ({ ...prevState, cv: response.data.url }));
        console.log('File uploaded successfully: ', picformData,formData);
        // setProcessLoading(false)
      }
    }).catch((error)=>{
        // toast.error('File upload failed')
        // setProcessLoading(false)
        console.error('Error uploading file: ', error)
    })
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data: ', formData);

    // Send data to the server
    try{

    const res = await axios.put('http://localhost:8080/api/auth/me/update', formData, {
        headers: {
            'Content-Type': 'application/json',
            token: `Bearer ${token}`,
        },
    });
    if (res.status === 200) {
        // toast.success('User updated successfully')
        setFormData({
            username: res.data.username,
            email: res.data.email,
            password: '',
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            phone: res.data.phone,
            cv: res.data.cv,
            github: res.data.github,
            linkedin: res.data.linkedin,
        });
        localStorage.setItem('user', JSON.stringify(res.data));
    }
    console.log('Response: ', res);
    } catch (error) {
        // toast.error('Error updating user')
    console.error('Error updating user: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className={`space-y-12  ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>
            {/* Profile */}
            <div className={`grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 md:grid-cols-3 ${theme === 'light' ? 'border-gray-900/10':'border-gray-500'}`}>

                <div className='md:ml-6'>
                    <h2 className={`text-base font-semibold leading-7 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>Profile</h2>
                    <p className={`mt-1 text-sm leading-6 ${theme === 'light' ? 'text-gray-600':'text-gray-300'}`}>
                    This information will be displayed publicly so be careful what you share.
                    </p>
                </div>

                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                    {/*github */}
                    <div className="sm:col-span-4">
                        <FormInput 
                            theme={theme} name='Github' label='github' Icon={FaGithub} placeholder="www.github.com/example" type="text"
                            value={formData.github}
                            onChange={handleChange}
                        />
                    </div>
            
                    {/*linkedin */}
                    <div className="sm:col-span-4">
                        <FormInput 
                            theme={theme} label='linkedin' Icon={FaLinkedin} placeholder="www.linkedin.com/example" type="text" name="Linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="cover-photo" className={`block text-sm font-medium leading-6 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>
                        CV
                    </label>
                    {!formData.cv && typeof formData.cv !== 'string' && (<div className={`mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10 ${theme === 'light' ? 'border-gray-900/25' : 'border-gray-500'}`}>
                        <div className="text-center">
                        <MdPhoto aria-hidden="true" className={`mx-auto h-12 w-12  ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}/>
                        <div className={`mt-4 flex text-sm leading-6  ${theme === 'light' ? 'text-gray-600':'text-gray-200'}`}>
                            <label
                            htmlFor="file-upload"
                            className={`relative cursor-pointer rounded-md font-semibold  text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500  ${theme === 'light' ? 'bg-gray-300':'bg-gray-800'}`}
                            >
                            <span>Upload a file</span>
                            <input 
                                id="file-upload" 
                                name="file-upload" 
                                type="file" className="sr-only" 
                                onChange={handleFileChange}
                            
                            />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className={`text-xs leading-5 ${theme === 'light' ? 'text-gray-600':'text-gray-200'}`}>PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>)}
                    {formData.cv && typeof formData.cv === 'string' && (
                        <div className="mt-4 flex justify-center">
                            <Image src={formData.cv} alt="CV" width={400} height={400} />
                        </div>
                    )}
                    </div>
                </div>

            </div>

            {/* Personal Information */}
            <div className={`grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 md:grid-cols-3 ${theme === 'light' ? 'border-gray-900/10':'border-gray-500'}`}>
                <div className='md:ml-6'>
                    <h2 className={`text-base font-semibold leading-7 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>Personal Information</h2>
                    <p className={`mt-1 text-sm leading-6 ${theme === 'light' ? 'text-gray-600':'text-gray-300'}`}>Use a permanent address where you can receive mail.</p>
                </div>

                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                    {/* First Name */}
                    <div className="sm:col-span-3">
                        <FormInput 
                            theme={theme} name='First Name' label='firstName' Icon={FaUser} placeholder="First Name" type="text"
                            value={formData.firstName}
                            onChange={handleChange}    
                        />
                    </div>

                    {/* Last Name */}
                    <div className="sm:col-span-3">
                        <FormInput 
                            theme={theme} name='Last Name' Icon={FaUserEdit} placeholder="Last Name" type="text" label='lastName'
                            value={formData.lastName}
                            onChange={handleChange}    
                        />
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-4">
                        <FormInput 
                            theme={theme} name='Email' Icon={FaEnvelope} placeholder="Email" type="email" label='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password */}
                    <div className="sm:col-span-4">
                        <FormInput
                            theme={theme} name='Password' Icon={RiLockPasswordLine} placeholder="********" type="password" label='password'
                            value={formData.password}
                            onChange={handleChange}    
                        />
                    </div>

                    {/* Username */}
                    <div className="sm:col-span-3">
                        <FormInput
                            theme={theme} name='Username' Icon={FaUserCircle} placeholder="Username" type="text" label='username'
                            value={formData.username}
                            onChange={handleChange}    
                        />
                    </div>

                    {/* Phone */}
                    <div className="sm:col-span-3">
                        <FormInput
                            theme={theme} name='Phone' Icon={FaMobileScreenButton} placeholder="Phone" type="tel" label='phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    
                    
                </div>
            </div>

        </div>

        <div className="py-6 flex items-center justify-center gap-x-6">
            <button type="button" className={`text-sm font-semibold leading-6 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>
                Cancel
            </button>
            <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Save
            </button>
        </div>

    </form>
  );
};

export default CustomForm;
