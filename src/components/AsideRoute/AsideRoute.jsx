import React, { useEffect, useState  } from 'react'
import { Link, useLocation } from 'react-router-dom'

function AsideRoute({}) {

const location = useLocation()
// console.log(location.pathname);

const isActive = (path) => {
   return location.pathname === path; 
}
    return (
        <div className='bg-asideBg text-black w-[276px] h-screen border-r-[6px] border-asideBorder sticky top-0'>
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
                    <li className={isActive('/input') ? 'text-primary' : ''}>
                        <Link to='/input'>Input</Link>
                    </li>
                    <li className={isActive('/checkbox') ? "text-primary" : ''}>
                        <Link to='/checkbox'>checkbox</Link>
                    </li>
                    <li className={isActive('/404') ? "text-primary" : ''}>
                        <Link to='/404'>Error</Link>
                    </li>                     
                    <li className={isActive('/todo') ? "text-primary" : ''}>
                        <Link to='/todo'>TodoList</Link>
                    </li>   
                    <li className={isActive('/radio') ? "text-primary" : ''}>
                        <Link to='/radio'>Radio Button</Link>
                    </li> 
                    <li className={isActive('/loader') ? "text-primary" : ''}>
                        <Link to='/loader'>Loader</Link>
                    </li> 
                    
                    <li className={isActive('/navbar') ? "text-primary" : '' }>
                        <Link to='/navbar'>Navbar</Link>
                    </li> 
                    <li className={isActive('/modal') ? "text-primary" : '' }>
                        <Link to='/modal'>Modal</Link>
                    </li> 
                    <li className={isActive('/calculator') ? "text-primary" : '' }>
                        <Link to='/calculator'>Calculator</Link>
                    </li> 
                    <li className={isActive('/linebargraph') ? "text-primary" : '' }>
                        <Link to='/linebargraph'>LineBarGraph</Link>
                    </li> 
                    <li className={isActive('/chartjs') ? "text-primary" : '' }>
                        <Link to='/chartjs'>ChartJs</Link>
                    </li> 
                    {/* <li className={isActive('/clickme') ? "text-primary" : '' }>
                        <Link to='/clickme'>Click Me</Link>
                    </li>  */}
                     {/* <li className={isActive('/table') ? "text-primary" : ''}>
                        <Link to='/table'>Table</Link>
                    </li>    */}
                               
                </ul>
            </aside>
            <script>
                
            </script>
        </div>

    )
}

export default AsideRoute
