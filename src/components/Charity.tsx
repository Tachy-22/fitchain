"use client";
// pages/charity.tsx
import { FC } from "react";
//import Link from "next/link";
import { motion } from "framer-motion";

const Charity: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold">FitChain Charity Events</div>
          <nav className="flex space-x-4">
            <Link href="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
            <Link href="/challenges" className="hover:text-blue-500">
              Challenges
            </Link>
            <Link href="/marketplace" className="hover:text-blue-500">
              Marketplace
            </Link>
            <Link href="/profile" className="hover:text-blue-500">
              Profile
            </Link>
          </nav>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Charity Fitness Events</h2>
          <p className="text-lg mb-6">
            Participate in our charity fitness events and contribute to
            meaningful causes while staying fit. Track your progress, donate
            with full transparency using blockchain technology, and earn rewards
            for your efforts. Together, we can make a difference!
          </p>
          <motion.button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Join an Event
          </motion.button>
        </section>

        {/* Upcoming Charity Events */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Upcoming Charity Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Run for Education</h4>
              <p className="text-gray-700 mb-4">
                Join us in a 10k run to support education for underprivileged
                children. All donations go directly to verified educational
                charities.
              </p>
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Register
              </motion.button>
            </div>
            {/* Additional Event Cards */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">
                Cycling for Clean Water
              </h4>
              <p className="text-gray-700 mb-4">
                Participate in a cycling event to raise funds for clean water
                initiatives in rural communities. Track your progress and see
                how your donations help.
              </p>
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Register
              </motion.button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">
                Charity Walk for Health
              </h4>
              <p className="text-gray-700 mb-4">
                A 5km walk to raise awareness and funds for health services in
                low-income areas. Walk, donate, and receive exclusive rewards!
              </p>
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Register
              </motion.button>
            </div>
          </div>
        </section>

        {/* Previous Charity Events */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Past Events and Impact</h3>
          <p className="text-lg mb-6">
            See the results of our previous charity events and the impact your
            contributions have made.
          </p>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">
                Marathon for Climate Action
              </h4>
              <p className="text-gray-700 mb-4">
                This event raised over 500 tokens for reforestation projects.
                Participants received special NFTs commemorating their
                contribution.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">
                Yoga for Mental Health Awareness
              </h4>
              <p className="text-gray-700 mb-4">
                Funds raised provided free mental health resources for 200
                people in need. Top participants earned exclusive rewards.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8 bg-blue-100 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
          <p className="text-lg mb-6">
            Whether you want to join a fitness event, donate to a cause, or
            simply stay active, FitChain offers the tools and transparency you
            need.
          </p>
          <motion.button
            className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore More Events
          </motion.button>
        </section>
      </main>
    </div>
  );
};

export default Charity;
