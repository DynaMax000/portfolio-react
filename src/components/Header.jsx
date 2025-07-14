import React from 'react'

function Header() {
  return (
    <>
      <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
        <div className='text-2xl font-bold'>My Portfolio</div>
        <nav className='space-x-4'>
          <a href='#about' className='hover:text-gray-400'>About</a>
          <a href='#projects' className='hover:text-gray-400'>Projects</a>
          <a href='#contact' className='hover:text-gray-400'>Contact</a>
        </nav>
      </header>
    </>
  )
}

export default Header