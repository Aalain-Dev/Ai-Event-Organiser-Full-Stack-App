"use client";

import { SignInButton } from "@clerk/nextjs";

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
          <SignInButton mode="modal">
            <button className="btn bg-white text-black px-5 py-2 rounded-2xl hover:bg-black hover:text-white cursor-pointer ">Sign In</button>
          </SignInButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
