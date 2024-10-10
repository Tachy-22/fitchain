"use client";
import Link from "next/link";
//import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-12 py-6">
      <div className="container mx-auto flex justify-between">
        <p>&copy; 2024 FitChain. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link className="hover:text-blue-500" href="#">
            About Us
          </Link>
          <Link className="hover:text-blue-500" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:text-blue-500" href="#">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
