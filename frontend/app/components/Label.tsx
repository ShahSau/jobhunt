import React from 'react'
import { cn } from '../lib/utils'

interface LabelProps {
    htmlFor:string;
    label:string;
    theme:string;
    className?:string;
}

const Label = ({htmlFor,label,theme,className}:LabelProps) => {
  return (
    <label 
        htmlFor={htmlFor} className={cn(`text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`,className)}
    >
        {label}
    </label>
  )
}

export default Label