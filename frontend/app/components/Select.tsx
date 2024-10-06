import React from 'react'
import { cn } from '../lib/utils'
import { FaChevronDown } from "react-icons/fa";
const Select= ({values,classNameS,classNameD,placeholder,classNameO}:{values:string[],classNameS:string,classNameD:string,placeholder:string,classNameO:string}) => {
  return (
    <select className={cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',classNameS)}>
        <div className={cn('"relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',classNameD)}>
            <option value="" >
                {placeholder}
            </option>
            {values.map((value) => (
                <option key={value} value={value} className={cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',classNameO)}>
                    {value}
                </option>
            ))}
            <FaChevronDown className="h-4 w-4 opacity-50" />
        </div>
    </select>
  )
}

export default Select
