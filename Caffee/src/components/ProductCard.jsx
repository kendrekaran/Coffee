import React from "react";

export function ProductCard({ image, title, description, price }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-500 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">₹{price}</span>
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
