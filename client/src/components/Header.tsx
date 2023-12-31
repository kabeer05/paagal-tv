"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLink = {
  name: string;
  path: string;
};

const navigationLinks: Array<NavigationLink> = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "My List",
    path: "/watchlist",
  },
  {
    name: "Surprise Me",
    path: "/surprise-me",
  },
  // {
  //   name: "Account",
  //   path: "/settings",
  // },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header: React.FC<{}> = () => {
  const path = usePathname();

  return (
    <div className="w-full h-[12vh] bg-oxford-blue grid grid-cols-3">
      <section className="flex items-center">
        <Link href="/" className="text-white text-3xl font-bold pl-16">
          Movie Night
        </Link>
      </section>
      <section></section>
      <section className="flex items-center"></section>
    </div>
  );
};

export default Header;
