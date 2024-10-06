import React from 'react'
import { cn } from '../lib/utils'


interface SelectProps {
    values:string[];
    classNameS?:string;
    classNameD?:string;
    placeholder:string;
    classNameO?:string;
}


const Select= ({values,classNameS,placeholder,classNameO}:SelectProps) => {
  return (
    <select className={cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',classNameS)}>
        <option value="" >
            {placeholder}
        </option>
        {values.map((value) => (
            <option key={value} value={value} className={cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',classNameO)}>
                {value}
            </option>
        ))}

    </select>
  )
}

export default Select
