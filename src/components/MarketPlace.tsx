"use client";
// pages/marketplace.tsx
import { FC } from "react";
//import Link from "next/link";
import { motion } from "framer-motion";

const Marketplace: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
   
      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Marketplace Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Marketplace</h2>
          <p className="text-lg mb-6">
            Discover a variety of fitness products, services, and digital assets
            designed to enhance your fitness journey. Earn rewards, track your
            purchases, and contribute to a healthy and active lifestyle with
            transparency powered by blockchain.
          </p>
          <motion.button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Browse All Products
          </motion.button>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/path/to/image.jpg"
                alt="Fitness Tracker"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Fitness Tracker</h4>
              <p className="text-gray-700 mb-4">
                Track your fitness activity with our state-of-the-art fitness
                tracker. Monitor your steps, heart rate, and more.
              </p>
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Buy Now
              </motion.button>
            </div>
            {/* Additional Product Cards */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/path/to/image.jpg"
                alt="Yoga Mat"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Premium Yoga Mat</h4>
              <p className="text-gray-700 mb-4">
                Enhance your yoga practice with our durable, non-slip yoga mat,
                designed for comfort and stability.
              </p>
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Buy Now
              </motion.button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/path/to/image.jpg"
                alt="Virtual Training Session"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">
                Virtual Training Session
              </h4>
              <p className="text-gray-700 mb-4">
                Join our certified trainers for a virtual training session and
                achieve your fitness goals from home.
              </p>
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Shop by Category</h3>
          <div className="flex flex-wrap gap-6">
            <motion.div
              className="bg-blue-100 p-4 rounded-lg cursor-pointer hover:bg-blue-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Wearables
            </motion.div>
            <motion.div
              className="bg-blue-100 p-4 rounded-lg cursor-pointer hover:bg-blue-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Equipment
            </motion.div>
            <motion.div
              className="bg-blue-100 p-4 rounded-lg cursor-pointer hover:bg-blue-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Nutrition
            </motion.div>
            <motion.div
              className="bg-blue-100 p-4 rounded-lg cursor-pointer hover:bg-blue-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Digital Services
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8 bg-blue-100 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Start Your Shopping Journey
          </h3>
          <p className="text-lg mb-6">
            Whether you&rsquo;re looking for the latest fitness gear or personalized
            virtual training sessions, our marketplace has it all. Shop with
            confidence and earn rewards with every purchase!
          </p>
          <motion.button
            className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore Now
          </motion.button>
        </section>
      </main>
    </div>
  );
};

export default Marketplace;
