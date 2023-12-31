"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

// Components
import { Input } from "@/components/ui/input";

const montserrat = Montserrat({
  display: "swap",
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

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
          <span className="text-grape">Paagal</span> TV
        </Link>
      </section>
      <section className="flex items-center justify-evenly">
        {navigationLinks.map((link) => (
          <Link
            href={link.path}
            className={`${montserrat.className} ${
              path == link.path
                ? "text-grape border-b-2 border-grape"
                : "text-white text-opacity-30"
            } h-full flex items-center justify-center px-1`}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </section>
      <section className="flex items-center justify-end pr-16">
        <Input
          className={`${montserrat.className} bg-rich-black text-white px-10 w-4/6 text-opacity-30`}
          placeholder="Search here"
        />
      </section>
    </div>
  );
};

export default Header;
