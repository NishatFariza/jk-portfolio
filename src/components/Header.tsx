import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";



const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative flex justify-between items-center h-[120px] px-8">
      <a href="#">
        <img src="/images/logo.png" alt="" />
      </a>
      <div className="text-white flex gap-4 text-xl">
        <Link href="#about">About</Link>
        <Link href="#skill">Skill</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <div>
        <Link
          
          href="/myResume/resume.pdf"
          download={true}
          className="border-2 border-green-600 py-3 px-5 rounded-md text-white text-xl flex gap-2 hover:bg-green-600 transition duration-300"
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
    </div>
  );
};

export default Header;
