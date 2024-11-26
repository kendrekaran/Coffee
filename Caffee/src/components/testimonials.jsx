import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jane Adams",
    role: "Coffee Enthusiast",
    avatar: "https://i.pinimg.com/474x/67/5a/38/675a38ce823dd61885f620474b2b98cd.jpg",
    content:
      "I've been ordering from here for ten years. The quality of the product is consistently high! I'm grateful for the care that is apparently put into the roasts and the excellent service you provide.",
    rating: 5,
  },
  {
    name: "Sam Williams",
    role: "Entrepreneur",
    avatar: "https://i.pinimg.com/474x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg",
    content:
      "I've been ordering beans from you for ten years. The quality of the product is consistently high! I'm grateful for the care that is apparently put into the roasts and the excellent service you provide.",
    rating: 5,
  },
  {
    name: "Morgan Gonzales",
    role: "Coffee Lover",
    avatar: "https://i.pinimg.com/474x/b5/ec/7c/b5ec7c850e7099ab05fead7238988126.jpg",
    content:
      "I've been ordering beans from you for ten years. The quality of the product is consistently high! I'm grateful for the care that is apparently put into the roasts and the excellent service you provide.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-2">Come and join</h2>
          <p className="text-xl">OUR HAPPY CUSTOMERS</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
