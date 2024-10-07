import React, { ReactNode } from 'react'
import { cn } from '../lib/utils'


interface BadgeProps {
    className?: string;
    children?: ReactNode;
    theme?: string;
    text:string
}
const Badge = ({className,text}:BadgeProps) => {
  return (
    <div className={cn('inline-flex items-center rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary-foreground border text-gray-800',className)}>
        {text}
    </div>
  )
}

export default Badge