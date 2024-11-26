import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function ProductCard({ image, title, description, price }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full hover:bg-white">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold">Rs. {price}</span>
          <button className="px-4 py-1 text-sm font-medium text-white bg-primary rounded hover:bg-primary-dark">
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
