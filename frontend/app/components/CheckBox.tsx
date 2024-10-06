import React from 'react'
import { cn } from '../lib/utils'
import { FaCheck } from "react-icons/fa";
const CheckBox = ({className}:{className:string}) => {
  return (
    <div className={cn('peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',className)}>
        <input type="checkbox" className="peer sr-only" />
        <div className='flex items-center justify-center text-current'>
        <FaCheck className="h-4 w-4"/>
        </div>
    </div>
  )
}

export default CheckBox