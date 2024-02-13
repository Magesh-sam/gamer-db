import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { sideNavbarCategories } from '@/lib/data';

import { Menu } from 'lucide-react';
import Link from 'next/link';

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="2xl:hidden block" aria-label="Open Sidebar">
        <Menu className="text-primary" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-3 w-full mt-3">
          {sideNavbarCategories.map((category) => (
            <li
              className="text-lg px-2 py-2 rounded-md text-white/75 hover:bg-primary transition-all flex-1 hover:text-black  "
              key={category.name}
            >
              <Link href={category.href}>{category.name} </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
