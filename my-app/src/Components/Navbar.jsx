"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-transparent">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        
        {/* Logo */}
        <a href="/">
          <img
            src="https://www.bizdateup.com/assets/images/logo.svg"
            alt="BizDateUp Logo"
            className="w-[180px] md:w-[240px] lg:w-[280px]"
          />
        </a>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-gray-700 hover:text-black">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-5 hover:opacity-90 transition">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
