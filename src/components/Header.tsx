import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <div>
          <div>
              <h3>Jk</h3>
          </div>
          <div>
              <Link href="">
                <a>About</a>
              </Link>
              <Link href="">
                <a>Skill</a>
              </Link>
              <Link href="">
                <a>Portfolio</a>
              </Link>
              <Link href="">
                <a>Contact</a>
              </Link>
              <Link href="">
                <a>Blog</a>
              </Link>
          </div>
     </div>
  )
}

export default Header