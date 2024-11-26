import React from "react";
import { motion } from "framer-motion";

export function PromoBanner() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://i.pinimg.com/474x/1c/a0/1b/1ca01b24290638692f08fad9cc51d0af.jpg"
            alt="Coffee Beans Left"
            className="w-32 h-32 object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Check out our best coffee beans</h2>
            <button variant="outline" size="lg">
              Explore our products
            </button>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://i.pinimg.com/474x/1c/a0/1b/1ca01b24290638692f08fad9cc51d0af.jpg"
            alt="Coffee Beans Right"
            className="w-32 h-32 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;
