import React from 'react'
import { cn } from '../lib/utils'

const Label = ({htmlFor,label,theme}:{htmlFor:string,label:string,theme:string}) => {
  return (
    <label 
        htmlFor={htmlFor} className={cn(`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${theme === 'light' ? 'text-gray-900':'text-gray-100'}`)}
    >
        {label}
    </label>
  )
}

export default Label