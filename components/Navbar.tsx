import Link from 'next/link';
import React from 'react';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#eab308"
    stroke="#eab308"
    viewBox="0 0 32 32"
    width={30}
    height={30}
  >
    <title>{'game'}</title>
    <path d="M4.469 8.156v-2.25h2.25v2.25h-2.25zm11.219-2.25h2.219v2.25h-2.219v-2.25zm4.468 6.719V8.156h2.25v8.969h-2.25v2.219h-2.25v2.25h2.25v2.25h2.25v2.219h-4.5v-2.219h-2.219v-2.25H6.718v2.25h-2.25v2.219H-.001v-2.219h2.25v-2.25h2.219v-2.25H2.249v-2.219h-2.25V8.156h2.25v4.469h2.219v-2.219h2.25v-2.25h2.25v2.25h4.469v-2.25h2.25v2.25h2.219v2.219h2.25zm-11.187 2.25v-2.25h-2.25v2.25h2.25zm6.719 0v-2.25h-2.25v2.25h2.25z" />
  </svg>
);

function Navbar() {
  return (
    <nav className="flex px-5 justify-between py-5 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <Link href="/" aria-label="Logo" className="flex items-center gap-3">
        <Logo />
        <span>WASD Games</span>
      </Link>
      <input
        type="search"
        placeholder="Search"
        className="rounded-md px-3   bg-background text-black shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fd5,0_0_15px_#fd5,0_0_30px_#fd5]  "
      />
    </nav>
  );
}

export default Navbar;
