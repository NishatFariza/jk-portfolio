import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#111A28] h-[40px] px-8">
      <div>
        <h3 className="text-2xl text-white font-semibold">Jk</h3>
      </div>
      <div className='text-white flex gap-4'>
        <Link href="">About</Link>
        <Link href="">Skill</Link>
        <Link href="">Portfolio</Link>
        <Link href="">Contact</Link>
        <Link href="">Blog</Link>
      </div>
    </div>
  );
}

export default Header