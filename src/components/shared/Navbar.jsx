"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navLinks = ["courses", "find a doctor", "for employers", "sign in"];

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const linkMap = {
    courses: "courses",
    "find-a-doctor": "find a doctor",
    "for-employers": "for employers",
    "sign-in": "sign in",
  };

  useEffect(() => {
    const link = pathname.split("/")[1];
    if (link && linkMap[link]) {
      setActiveLink(linkMap[link]);
    } else {
      setActiveLink("courses");
    }
  }, [pathname]);

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex items-center justify-end w-full">
            <div className="hidden md:flex md:space-x-8 md:ml-10 md:items-center">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className={`text-gray-800 capitalize hover:text-red-600 px-3 py-2 font-medium ${
                    activeLink === link ? "border-b-2 border-red-600" : ""
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </Link>
              ))}
              <Image
                src="/search.svg"
                alt="Search icon"
                width={20}
                height={20}
                className="cursor-pointer hover:scale-110"
              />
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <Image
                  src="/close.svg"
                  alt="Open menu"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              ) : (
                <Image
                  src="/burger.svg"
                  alt="Open menu"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${!isMenuOpen && "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
              className={`text-gray-800 capitalize hover:text-red-600 block px-3 py-2 text-base font-medium ${
                activeLink === link ? "border-b-2 border-red-600" : ""
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </Link>
          ))}
          <div className="px-3 py-2">
            <Image
              src="/search.svg"
              alt="Search icon"
              width={20}
              height={20}
              className="cursor-pointer hover:scale-110"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
