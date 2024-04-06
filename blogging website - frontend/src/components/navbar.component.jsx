import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../imgs/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        {/*Logo*/}
        <Link to='/' className='flex-none w-10'>
        <img src={logo} className='w-full' alt="" /></Link>
        {/* search bar */}
        <div className='absolute bg-white w-full left-0 mt-0.5 top-full  border-b border-grey py-5 px-[5vw]'>
            <input type="text"
                   placeholder='Search'
                   className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%]
                    md: pr-6 rounded-full placeholder:text-dark-grey' />
        </div>
        {/* sign in sign up button */}
        {/* if user has logged in, will show the user image on right corner */}

    </nav>
  )
}

export default Navbar // we use default inorder to not need to use {} when Navbar component is imported