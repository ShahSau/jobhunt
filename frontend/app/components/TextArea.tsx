import React, { ChangeEventHandler } from 'react'
import { cn } from '../lib/utils'

interface TextAreaProps {
    className?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    placeholder: string;
    name: string;
    theme?: string;
}

const TextArea = ({className,name,placeholder,value, onChange,theme}:TextAreaProps) => {
  return (
    <textarea
    className={cn(
      `flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${theme === 'light'?'bg-gray-300 border-gray-400' :'bg-gray-800 border-gray-300'}`,
      className
    )}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
  />
  )
}

export default TextArea