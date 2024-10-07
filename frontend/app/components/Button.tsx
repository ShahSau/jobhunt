import React, { ReactNode } from 'react'
import { cn } from '../lib/utils';

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  className?: string;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, text, className,icon }) => {
  return (
    <button 
        type={type} className={cn(" inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className)}
    >
        <span className='mr-4'>{icon}</span>
        {text}

    </button>
  )
}

export default Button