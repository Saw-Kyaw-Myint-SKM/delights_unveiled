import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className="hidden sm:flex bg-gray-800 text-white pl-16 pr-16 pt-5 pb-5 flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex space-x-4 max-w-7xl ">
          <NavLink href='blog'className="text-white hover:text-gray-200"> Blog</NavLink>
          <NavLink href='about'className="text-white hover:text-gray-200"> About Us</NavLink>
          <NavLink href='contact'className="text-white hover:text-gray-200"> Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;