import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import CustomLink from '@/components/CustomLink';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <header className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Welcome to the <span className="text-yellow-300">Online Blood Bank</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
          Donate blood, save lives, and manage your donations effortlessly.
        </p>
      </header>

      <main className="flex-grow flex items-center justify-center py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">
            Join Us Today
          </h2>
          <div className="space-y-4 sm:space-x-6 sm:space-y-0 flex flex-col sm:flex-row justify-center">
            <CustomLink
              href="/register"
              className="bg-green-600 text-white py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105"
            >
              Register as a Donor
            </CustomLink>
            <CustomLink
              href="/login"
              className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
            >
              Login to Your Account
            </CustomLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
