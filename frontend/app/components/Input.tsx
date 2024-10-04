import React from 'react'

import { ChangeEventHandler } from 'react';

const Input = ({theme, value, onChange, label, name, type}:{theme:string, value:string,onChange: ChangeEventHandler<HTMLInputElement>, label:string, name:string, type:string}) => {
  return (
    <>
        <input 
            type={type} 
            className={`block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-600 appreance-none dark:focus:border-purple-500 focus:border-purple-600 peer ${theme === 'light' ? 'text-gray-900 focus:text-gray-800':'text-gray-100 focus:text-gray-200'}`} placeholder=''
            name={name}
            value={value}
            onChange={onChange}
        />
        <label htmlFor={name} className={`absolute text-sm duration-300 transform translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>{label}</label>
    </>
  )
}

export default Input