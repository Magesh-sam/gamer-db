
import React from 'react';
import { sideNavbarCategories } from '@/lib/data';
import NavLink from './NavLink';


function Sidebar() {

  return (
    <aside className="max-w-[300px] overflow-x-auto  bg-background ml-3 mt-20 2xl:block hidden ">
      <h2 className="text-2xl font-semibold text-primary mb-2 underline-offset-8 hover:underline ">
        Categories
      </h2>
      <ul className="flex flex-col gap-3 w-full">
        {
          sideNavbarCategories.map((category) => (
            <NavLink
              key={category.name}
              category={category}
            />
          ))
        }
      </ul>
    </aside>
  );
}

export default Sidebar;
