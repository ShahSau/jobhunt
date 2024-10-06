import React from 'react'
import { cn } from '../lib/utils'


const CheckBox = ({className, value,name, onChange}:{className?:string,value:boolean,onChange:(event: React.ChangeEvent<HTMLInputElement>) => void,name:string}) => {
  return (
    <div className='flex'>
        <input type="checkbox" className={cn('peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',className)} checked={value} onChange={onChange}/>
        <label className="ml-2 text-sm text-muted-foreground">{name}</label>
    </div>
  )
}

export default CheckBox