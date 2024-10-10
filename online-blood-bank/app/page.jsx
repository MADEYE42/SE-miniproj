// src/app/page.js
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import CustomLink from '@/components/CustomLink';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <header className="bg-red-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Online Blood Bank</h1>
        <p className="text-xl">Donate blood, save lives, and manage your donations effortlessly.</p>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Join Us Today</h2>
          <div className="space-x-4">
            <CustomLink
              href="/register"
              className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700"
            >
              Register as a Donor
            </CustomLink>
            <CustomLink
              href="/login"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
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
