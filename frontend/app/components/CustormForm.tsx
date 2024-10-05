import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaUser, FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { MdPhoto } from "react-icons/md";
import { useTheme } from '../providers/ThemeProvider';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaMobileScreenButton } from 'react-icons/fa6';
import FormInput from './FormInput';
import axios from 'axios';


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

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const file = e.target.files ? e.target.files[0] : null;
    // setFormData({ ...formData, cv: file });
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


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
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
                        <FormInput theme={theme} label='Github' Icon={FaGithub} placeholder="www.github.com/example" type="text"/>
                    </div>
            
                    {/*linkedin */}
                    <div className="sm:col-span-4">
                        <FormInput theme={theme} label='Linkedin' Icon={FaLinkedin} placeholder="www.linkedin.com/example" type="text"/>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="cover-photo" className={`block text-sm font-medium leading-6 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>
                        CV
                    </label>
                    <div className={`mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10 ${theme === 'light' ? 'border-gray-900/25' : 'border-gray-500'}`}>
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
                    </div>
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
                        <FormInput theme={theme} label='First Name' Icon={FaUser} placeholder="First Name" type="text"/>
                    </div>

                    {/* Last Name */}
                    <div className="sm:col-span-3">
                        <FormInput theme={theme} label='Last Name' Icon={FaUserEdit} placeholder="Last Name" type="text"/>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-4">
                        <FormInput theme={theme} label='Email' Icon={FaEnvelope} placeholder="Email" type="email"/>
                    </div>

                    {/* Password */}
                    <div className="sm:col-span-4">
                        <FormInput theme={theme} label='Password' Icon={RiLockPasswordLine} placeholder="********" type="password"/>
                    </div>

                    {/* Username */}
                    <div className="sm:col-span-3">
                        <FormInput theme={theme} label='Username' Icon={FaUserCircle} placeholder="Username" type="text"/>
                    </div>

                    {/* Phone */}
                    <div className="sm:col-span-3">
                        <FormInput theme={theme} label='Phone' Icon={FaMobileScreenButton} placeholder="Phone" type="tel"/>
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
