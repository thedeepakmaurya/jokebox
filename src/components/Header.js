import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='flex justify-between sticky p-5 bg-white top-0'>
            <h1 className=" text-cyan-800 font-bold text-3xl "><Link to="/">JokeBox</Link></h1>
            <div>
                <ul className='flex gap-5 '>
                    <li className='cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='cursor-pointer'><Link to="/about">About</Link></li>
                    <li className='cursor-pointer'><Link to="/blog">Blog</Link></li>
                    <li className='cursor-pointer'><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
               {
                  isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}><Link to="/">Logout</Link></button> : <button onClick={() => setIsLoggedIn(true)}><Link to="/form">Login</Link></button>
               }  
               <span className="material-symbols-outlined align-middle ml-2">
account_circle
</span>
            </div>
        </div>
    )
}

export default Header