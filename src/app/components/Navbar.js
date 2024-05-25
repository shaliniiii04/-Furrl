"use client"
import React from 'react';
import Link from 'next/link';
import { FaSave, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-10" style={{ backgroundColor: "#ffc001", boxShadow: "0 5px 4px rgba(0, 0, 0, 0.1)"  }}>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl">#Vibe Page</span>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* Left empty for flexibility */}
          </div>
          <div className="flex items-center ">
            <Link href="https://furrl.in/wishlist">
              
                <FaSave className="h-6 w-6 text-black mr-4 cursor-pointer" />
              
            </Link>
            <Link href="https://furrl.in/cart">
             
                <FaShoppingCart className="h-6 w-6 text-black cursor-pointer" />
         
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
