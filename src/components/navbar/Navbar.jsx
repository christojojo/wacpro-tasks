import React from 'react'
import { Link , Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='bg-slate-500 text-white flex justify-center items-center py-10'>
        <ul className='flex gap-14 *:text-lg'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/button">Buttons</Link>
          </li>
          <li>
            <Link to="/badge">Badge</Link>
          </li>
          <li>
          <Link to="/input">Input</Link>
          </li>
          <li>
          <Link to="/404">404</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar