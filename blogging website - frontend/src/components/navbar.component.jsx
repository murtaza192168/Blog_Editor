import React from 'react'
import logo from '../imgs/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        {/*Logo*/}
        <img src={logo} className='flex-none w-10' alt="" />
        {/* search bar */}
        {/* sign in sign up button */}
        {/* if user has logged in, will show the user image on right corner */}

    </nav>
  )
}

export default Navbar // we use default inorder to not need to use {} when Navbar component is imported