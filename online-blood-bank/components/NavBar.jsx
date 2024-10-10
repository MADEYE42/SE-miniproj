import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white w-full flex justify-between">
      <div>
        <Link href="/">
        
          <span className="text-xl cursor-pointer">Online Blood Bank</span>
        </Link>
      </div>
      <div>
        <Link href="/login">
          <span className="mr-4 cursor-pointer">Login</span>
        </Link>
        <Link href="/register">
          <span className="cursor-pointer">Register</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
