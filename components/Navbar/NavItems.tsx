"use client"
import { NavbarCategories } from "@/lib/data"
import NavLink from "./NavLink"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


function NavItems() {
  const pathname = usePathname();

  return (
    <ul className="  gap-5 ml-5 hidden md:flex ">
      {
        NavbarCategories.map((category) => (
          <Link className={cn(pathname === category.href ? "text-primary":"text-white/70"," hover:text-primary transition-all duration-500 text-lg" )}key={category.name} href={category.href}  >
            {category.name}
          </Link>
        ))
      }
   </ul>
  
  )
}

export default NavItems