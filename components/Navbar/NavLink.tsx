'use client';
import { INavLink } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

const NavLink: FC<INavLink> = ({ category, className }) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        className,
        pathname === category.href
          ? 'bg-primary !text-black hover:bg-primary/90'
          : '',
        `text-lg px-2 py-2  rounded-md text-white/75 hover:bg-primary transition-all duration-500  hover:text-black `,
      )}
      key={category.name}
      href={category.href}
    >
      {category.name}
    </Link>
  );
};

export default NavLink;
