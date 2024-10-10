"use client";
// pages/profile.tsx

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Profile: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold">FitChain Profile</div>
          <nav className="flex space-x-4">
            <Link href="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
            <Link href="/challenges" className="hover:text-blue-500">
              Challenges
            </Link>
            <Link href="/charity" className="hover:text-blue-500">
              Charity
            </Link>
            <Link href="/marketplace" className="hover:text-blue-500">
              Marketplace
            </Link>
          </nav>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Your Profile</h2>

        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Profile Picture and Info */}
          <div className="flex items-center space-x-6 mb-6">
            <img
              src="/profile-pic.jpg"
              alt="Profile Picture"
              className="w-24 h-24 rounded-full border border-gray-300"
            />
            <div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">johndoe@example.com</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <h4 className="text-xl font-semibold">120</h4>
              <p className="text-gray-600">Challenges Completed</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold">2500</h4>
              <p className="text-gray-600">Total Steps</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold">15</h4>
              <p className="text-gray-600">Charity Donations</p>
            </div>
          </div>

          {/* Profile Settings */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 p-4 rounded-lg"
              >
                <h4 className="text-md font-semibold">Personal Information</h4>
                <p className="text-gray-600">
                  Update your name, email, and contact details.
                </p>
                <Link
                  href="/profile/edit"
                  className="text-blue-500 hover:underline"
                >
                  Edit Profile
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 p-4 rounded-lg"
              >
                <h4 className="text-md font-semibold">Account Security</h4>
                <p className="text-gray-600">
                  Manage your password and two-factor authentication.
                </p>
                <Link
                  href="/profile/security"
                  className="text-blue-500 hover:underline"
                >
                  Security Settings
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 p-4 rounded-lg"
              >
                <h4 className="text-md font-semibold">Privacy Settings</h4>
                <p className="text-gray-600">
                  Adjust your privacy and visibility preferences.
                </p>
                <Link
                  href="/profile/privacy"
                  className="text-blue-500 hover:underline"
                >
                  Privacy Settings
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
