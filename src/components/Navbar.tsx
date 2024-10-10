"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const connectWallet = () => {
    // Placeholder function for connecting wallet
    console.log("Wallet connected!");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">FitChain</Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
          <Link href="/challenges" className="hover:text-blue-500">
            Challenges
          </Link>
          <Link href="/marketplace" className="hover:text-blue-500">
            Marketplace
          </Link>
          <Link href="/charity" className="hover:text-blue-500">
            Charity
          </Link>
          <Link href="/profile" className="hover:text-blue-500">
            Profile
          </Link>
          <button
            onClick={connectWallet}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Connect Wallet
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/dashboard"
                className="hover:text-blue-500"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/challenges"
                className="hover:text-blue-500"
                onClick={toggleMenu}
              >
                Challenges
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="hover:text-blue-500"
                onClick={toggleMenu}
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="/charity"
                className="hover:text-blue-500"
                onClick={toggleMenu}
              >
                Charity
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="hover:text-blue-500"
                onClick={toggleMenu}
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  connectWallet();
                  toggleMenu();
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Connect Wallet
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
