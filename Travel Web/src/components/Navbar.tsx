import React from 'react';
import { Plane } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Plane className="h-8 w-8 text-sky-500" />
                <span className="text-2xl font-bold text-sky-500">WOY</span>
              </div>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-sky-500">Home</a>
                <a href="#" className="text-gray-700 hover:text-sky-500">Product</a>
                <a href="#" className="text-gray-700 hover:text-sky-500">Contact Us</a>
                <a href="#" className="text-gray-700 hover:text-sky-500">About Us</a>
              </div>
            </div>
          </div>
          <button className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;