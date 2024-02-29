import React, { useEffect, useState  } from 'react'
import { Link, useLocation } from 'react-router-dom'

function AsideRoute({}) {

const location = useLocation()
console.log(location.pathname);

const isActive = (path) => {
   return location.pathname === path; 
}
    return (
        <div className='bg-[#fafbfc] text-black w-[276px] h-screen border-r-[6px] border-[#f4f5f7] '>
            <aside className='p-[15px] mt-[40px]'>
                <ul className='*:text-[15px] *:pb-[15px] *:font-medium *:w-fit'>
                    <li className={isActive('/') ? 'text-primary' : ''}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={isActive('/button') ? 'text-primary' : ''}>
                        <Link to='/button'>Buttons</Link>
                    </li>
                    <li className={isActive('/badge') ? 'text-primary' : '' }>
                        <Link to='/badge'>Badge</Link>
                    </li>
                    <li className={isActive('/input') ? 'active' : ''}>
                        <Link to='/input'>Input</Link>
                    </li>
                    <li className={isActive('/404') ? "text-primary" : ''}>
                        <Link to='/404'>Error</Link>
                    </li>
                   
                </ul>
            </aside>
            <script>
               

            </script>
        </div>

    )
}

export default AsideRoute
