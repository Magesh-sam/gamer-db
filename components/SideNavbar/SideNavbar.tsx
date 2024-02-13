import React from 'react'
import Link from 'next/link'
import { sideNavbarCategories } from '@/lib/data'

function Sidebar() {
  return (
      <aside className='max-w-[300px] overflow-x-auto sticky  top-20 left-4 pl-4 bottom-0 bg-background z-10 mt-20 '>
          <h2 className='text-2xl font-semibold text-primary mb-2 underline-offset-8 hover:underline '>Categories</h2>
          <ul className='flex flex-col gap-3 w-full'>
              {
                  sideNavbarCategories.map((category) => (
                    <li className='text-lg px-2 py-2 rounded-md text-white/75 hover:bg-primary transition-all flex-1 hover:text-black  ' key={category.name}>
                    <Link href={category.href}>{category.name}  </Link>
                </li>
                  ))
              }
        </ul>
    </aside>
  )
}

export default Sidebar