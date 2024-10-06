import React, { ChangeEventHandler } from 'react'
import { cn } from '../lib/utils'

interface BoxInputProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string;
    type: string;
    placeholder: string;
    className?: string;
    theme?: string;
}

const BoxInput = ({ value, onChange, name, type,placeholder,className,theme}:BoxInputProps) => {
  return (
    <input
        type={type}
        className={cn(`flex h-10 w-full  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${theme === 'light'?'bg-gray-300 border-gray-400' :'bg-gray-800 border-gray-300'}`,className)}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
    />
  )
}

export default BoxInput