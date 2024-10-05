import React, { ComponentType } from 'react'


const FormInput = ({theme, label, Icon,placeholder,type}:{theme:string,  label:string, Icon: ComponentType, placeholder:string,type:string}) => {
  return (
    <>
        <label htmlFor={label} className={`block text-sm font-medium leading-6  ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`}>
            {label}
        </label>
        <div className="mt-2">
            <div className={`flex rounded-md shadow-sm ring-1 ring-inset sm:max-w-md  ${theme === 'light' ? 'ring-gray-900':'ring-gray-500'}`}>
                <span className={`flex select-none items-center pl-3 sm:text-sm mr-4  ${theme === 'light' ? 'text-gray-600':'text-gray-200'}`}><Icon /></span>
                <input
                    id={label}
                    name={label}
                    type={type}
                    placeholder={placeholder}
                    className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6 ${theme === 'light' ? 'text-gray-900 placeholder:text-gray-800':'text-gray-100 placeholder:text-gray-300'}`}
                />
            </div>
        </div>
    </>
  )
}

export default FormInput