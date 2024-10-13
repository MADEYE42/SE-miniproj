import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-red-900 p-4 text-white w-full flex justify-between items-center shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer hover:text-yellow-500 transition duration-300">
            Online Blood Bank
          </span>
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/login">
          <span className="cursor-pointer hover:text-yellow-500 transition duration-300 text-lg">
            Login
          </span>
        </Link>
        <Link href="/register">
          <span className="cursor-pointer bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 text-lg">
            Register
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
