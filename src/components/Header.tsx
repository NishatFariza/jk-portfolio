import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#111A28] h-[40px] px-8 py-8">
      <div>
        <h3 className="text-3xl text-[#00cf5d] font-bold">Jk</h3>
      </div>
      <div className="text-white flex gap-4 text-xl">
        <Link href="">About</Link>
        <Link href="">Skill</Link>
        <Link href="">Portfolio</Link>
        <Link href="">Contact</Link>
        <Link href="">Blog</Link>
      </div>
      <div>
        <button className="border-2 border-green-400 py-3 px-5 rounded-md text-white text-xl flex gap-2">
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
          <span>Resume</span>
        </button>
      </div>
    </div>
  );
}

export default Header