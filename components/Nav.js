'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'
import { cn } from '@/lib/utils'
const Nav = () => {
    const links = [{
        path: '/',
        name: 'Home'
    },{
        path: '/dadjokes',
        name: 'Dad Jokes'
    },{
        path: '/about',
        name: 'About'
    }]
    const pathname = usePathname()
  return (
    <nav>
        <ul className='flex gap-10 justify-center px-4 pt-2 items-center'>
            {links.map((link=>{
                return(
                    <li key={link.path}>
                        <Link className={cn("font-medium relative rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200",
                        pathname === link.path ? ('bg-slate-300') : ('')
                        )} href={link.path}>{link.name}</Link>
                    </li>
                )
            }))}
            <ModeToggle/>
        </ul>
    </nav>
  )
}

export default Nav