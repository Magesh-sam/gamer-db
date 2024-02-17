import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Sidebar from './Sidebar';
import NavItems from './NavItems';

function Navbar() {
  return (
    <nav className=" col-span-2 flex px-5 justify-between py-5 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <Image
            src="/Gamer-DB.png"
            alt="gamer db logo"
            width={512}
            height={512}
            className="w-10 h-10 rounded-sm"
          />
          <Link
            href="/"
            aria-label="Logo"
            className=" text-3xl font-bold text-primary text-nowrap"
          >
            Gamer DB
          </Link>
        </div>
        <NavItems />
      </div>
      <Sidebar />
    </nav>
  );
}

export default Navbar;
