import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center ">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464979681340-bdd28a61699e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Coffee being poured into a cup with latte art"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="container relative z-10 p-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-white"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-2"
          >
            Welcome!
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            We serve the richest coffee in the city!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button size="lg" variant="secondary">
              Order Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
