"use client"
// pages/challenges.tsx
import { FC } from 'react';
//import Link from 'next/link';
import { motion } from 'framer-motion';

const Challenges: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold">FitChain Challenges</div>
          <nav className="flex space-x-4">
            <Link href="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
            <Link href="/charity" className="hover:text-blue-500">
              Charity
            </Link>
            <Link href="/marketplace" className="hover:text-blue-500">
              Marketplace
            </Link>
            <Link href="/profile" className="hover:text-blue-500">
              Profile
            </Link>
          </nav>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Challenge</button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Available Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Challenge Card Example */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-bold">October Step Challenge</h3>
            <p className="text-gray-500 mb-2">Ends: Oct 31, 2024</p>
            <p>Participants: 150</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Join Challenge
            </button>
          </motion.div>
          {/* Additional Challenge Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-bold">Weekly Running Challenge</h3>
            <p className="text-gray-500 mb-2">Ends: Oct 15, 2024</p>
            <p>Participants: 90</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Join Challenge
            </button>
          </motion.div>
          {/* Add more challenges here */}
        </div>
      </main>
    </div>
  );
};

export default Challenges;
