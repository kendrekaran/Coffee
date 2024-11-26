import React from "react";
import { motion } from "framer-motion";

export function Newsletter() {
  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="relative flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left Image */}
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://i.pinimg.com/474x/3a/be/c7/3abec76cfcbb81afaa653476bdfe2604.jpg"
            alt="Coffee beans left"
            className="w-32 h-32 object-cover md:w-40 md:h-40"
          />

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Join in and get 15% Off!</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and get 15% off your first order.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 text-white bg-primary rounded-md hover:bg-primary-dark">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://i.pinimg.com/474x/3a/be/c7/3abec76cfcbb81afaa653476bdfe2604.jpg"
            alt="Coffee beans right"
            className="w-32 h-32 object-cover md:w-40 md:h-40"
          />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
