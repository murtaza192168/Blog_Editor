import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import logo from '../imgs/logo.png'

const Navbar = () => {
  // make use of react hook (useState) for toggle functionality of search
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)
  return (
    <nav className='navbar'>
        {/*Logo*/}
        <Link to='/' className='flex-none w-10'>
        <img src={logo} className='w-full' alt="" />
        </Link>
        {/* search bar */}
        <div className={'absolute bg-white w-full left-0 mt-0.5 top-full  border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0  md:p-0 md:show md:w-auto ' + (searchBoxVisibility ? "show" : "hide")}>
            <input type="text"
                   placeholder='Search'
                   className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%]
                    md: pr-6 rounded-full placeholder:text-dark-grey md:pl-12' />
                    {/* Search icon */}
                    <i class="fi fi-rr-search absolute right-[10%] md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>

                    
        </div>
        <div className='flex items-center gap-3 md:gap-6 ml-auto'>
          <button className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center' onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}>
            <i class="fi fi-rr-search text-xl">
            </i>
          </button>
        </div>
        {/* sign in sign up button */}
        {/* if user has logged in, will show the user image on right corner */}

    </nav>
  )
}

export default Navbar // we use default inorder to not need to use {} when Navbar component is imported