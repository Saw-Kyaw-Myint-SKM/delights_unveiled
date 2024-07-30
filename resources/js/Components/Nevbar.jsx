import { Link } from '@inertiajs/react';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="hidden sm:flex bg-gray-800 text-white pl-16 pr-16 pt-5 pb-5 flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex space-x-4">
            <Link href='home' className="hover:text-gray-400"> Home </Link>
            <Link href='shop' className="hover:text-gray-400"> Shop </Link>
            <Link href='about' className="hover:text-gray-400"> About Us </Link>
            <Link href='contact' className="hover:text-gray-400"> Contact Us </Link>
        </div>
      </div>
      <div>
        <Link href='login' className='hover:text-gray-400'>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;