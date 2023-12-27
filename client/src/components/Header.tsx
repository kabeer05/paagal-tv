"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Divider } from "@chakra-ui/react";

// Icons
import { SlLogout } from "react-icons/sl";
import { FaHome, FaBookmark, FaMedal, FaFilm, FaUserCog } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { PiConfettiFill } from "react-icons/pi";

type NavigationLink = {
  icon: JSX.Element;
  name: string;
  path: string;
};

const montserrat = Montserrat({
  display: "swap",
  weight: "700",
  subsets: ["latin", "latin-ext"],
});

const navigationLinks: Array<NavigationLink> = [
  {
    icon: <FaHome className="inline-block" />,
    name: "Home",
    path: "/",
  },
  {
    icon: <FaBookmark className="inline-block" />,
    name: "Watchlist",
    path: "/watchlist",
  },
  {
    icon: <FaUserCog className="inline-block" />,
    name: "Account",
    path: "/settings",
  },
  {
    icon: <FaClock className="inline-block" />,
    name: "Upcoming",
    path: "/upcoming",
  },
  {
    icon: <FaMedal className="inline-block" />,
    name: "Top Rated",
    path: "/top-rated",
  },
  {
    icon: <PiConfettiFill className="inline-block" />,
    name: "Surprise Me",
    path: "/surprise-me",
  },
];

const Header: React.FC<{}> = () => {
  const path = usePathname();

  return (
    <div className="w-[20vw] h-screen z-50 fixed top-0 left-0 border-r border-gray-200">
      <section className="w-full h-[15vh] flex items-center justify-center">
        <div className="w-[32px] h-[32px] bg-night-black flex items-center justify-center rounded-full">
          <FaFilm className="inline-block text-white" />
        </div>
        <h1
          className={`${montserrat.className} text-night-black text-3xl pl-2 cursor-default`}
        >
          Paagal TV
        </h1>
      </section>
      <section className="w-full h-[70vh] flex flex-col px-5 items-center justify-evenly">
        {navigationLinks.map((link) => (
          <Link
            href={link.path}
            key={link.name}
            className={`${
              path == link.path
                ? "bg-night-black text-white"
                : "hover:bg-gray-100 text-night-black"
            } transition-colors text-lg font-semibold w-full px-10 py-4 rounded-md flex items-center justify-start`}
          >
            {link.icon ? link.icon : ""}
            <span className="pl-2">{link.name}</span>
          </Link>
        ))}
      </section>
      <Divider />
      <section className="w-full h-[15vh] flex items-center justify-center px-5">
        <Link
          href="#"
          className="bg-red-500 w-full flex items-center justify-start px-10 py-4 rounded-md text-white font-semibold"
        >
          <SlLogout className="inline-block" />
          <span className="pl-4">Logout</span>
        </Link>
      </section>
    </div>
  );
};

export default Header;
