import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white text-center py-6 mt-8 shadow-inner">
      <p className="text-lg font-semibold">
        &copy; 2024 Online Blood Bank. All rights reserved.
      </p>
      <p className="text-yellow-500 mt-2">Donate blood, save lives.</p>
      <div className="flex justify-center mt-4 space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
