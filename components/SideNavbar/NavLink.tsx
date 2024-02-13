'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavLink({
  category,
}: {
  category: {
    name: string;
    href: string;
  };
}) {
  const pathname = usePathname();

  return (
    <li
      className={`text-lg px-2 py-2 rounded-md text-white/75 hover:bg-primary transition-all flex-1 hover:text-black ${pathname === category.href ? 'bg-primary !text-black' : ''} `}
      key={category.name}
    >
      <Link href={category.href}>{category.name} </Link>
    </li>
  );
}

export default NavLink;
