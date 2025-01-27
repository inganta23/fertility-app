"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    "courses",
    "find a doctor",
    "for employers",
    "sign in",
    "all us providers",
    "info@fertilityiq.com",
    "terms of use",
    "privacy policy",
    "FAQs",
  ];

  return (
    <footer className="bg-[#F48265] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-10 sm:gap-0">
          <Image
            src="/inflection.svg"
            alt="Logo"
            width={150}
            height={33}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7482%) hue-rotate(163deg) brightness(99%) contrast(107%)",
            }}
          />
          <div className="flex gap-10">
            <Image
              src="/woman_owned.svg"
              alt="Woman Owned Logo"
              width={100}
              height={33}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7482%) hue-rotate(163deg) brightness(99%) contrast(107%)",
              }}
            />
            <div className="rounded-full border border-white w-24 h-24 overflow-hidden">
              <Image
                src="/deborah.svg"
                alt="Owner profile"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex sm:justify-between flex-col sm:flex-row gap-10 text-sm border-t border-white/20 pt-6">
          <div className="flex justify-center flex-wrap sm:justify-normal sm:w-3/5 sm:items-end">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                className={`text-white block mx-2 my-1 text-base h-5 font-medium border-b border-white hover:border-b-2 ${
                  link !== "info@fertilityiq.com" && "capitalize"
                }`}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="sm:w-2/5 flex sm:items-end">
            <div className="text-sm">
              Our content is for informational purposes only
              <span>
                <hr className="inline-block w-4 h-px bg-white mx-1 align-middle" />
              </span>
              it's not a substitute for medical advice, diagnosis or treatment.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
