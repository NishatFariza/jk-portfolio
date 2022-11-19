import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const menus = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skill",
    label: "Skill",
  },
  {
    href: "#portfolio",
    label: "Portfolio",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative flex justify-between items-center h-[120px] px-8">
      <a href="#">
        <Image src="/images/logo.png" height={80} width={80} alt="" />
      </a>

      <div className="hidden gap-4 text-xl text-white lg:flex">
        {menus.map((menu) => (
          <Link key={menu.href} href={menu.href}>
            {menu.label}
          </Link>
        ))}
      </div>

      <div className="hidden lg:block">
        <Link
          href="/myResume/resume.pdf"
          download={true}
          className="flex gap-2 px-5 py-3 text-xl text-white transition duration-300 border-2 border-green-600 rounded-md hover:bg-green-600"
        >
          <span>Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Link>
      </div>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden"
      >
        {mobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#00cf5d"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00cf5d"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        )}
      </button>

      {mobileMenuOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col gap-3  bg-[#1d293a] top-[110px] p-8 w-[95%] z-50">
          {menus.map((menu) => (
            <Link key={menu.href} href={menu.href}>
              {menu.label}
            </Link>
          ))}
          <Link
            href="/myResume/resume.pdf"
            download={true}
            className="flex items-center justify-center gap-2 px-5 py-3 text-white transition duration-300 border-2 border-green-600 rounded-md text-md hover:bg-green-600"
          >
            <span>Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
