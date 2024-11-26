import React from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard"; // Ensure the path is correct

const coffeeProducts = [
  {
    image: "https://i.pinimg.com/474x/e6/66/27/e666274ae48540fa878bd49965fd36ba.jpg",
    title: "Lungo Coffee",
    description: "Rich espresso with hot water",
    price: 199,
  },
  {
    image: "https://i.pinimg.com/474x/63/7c/5c/637c5c5fa04522d8187a6eafdeec5bf1.jpg",
    title: "Dalgona Coffee",
    description: "Whipped coffee with milk",
    price: 159,
  },
  {
    image: "https://images.unsplash.com/photo-1527156231393-7023794f363c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
    title: "Iced Coffee",
    description: "Cold brew with ice",
    price: 149,
  },
  {
    image: "https://i.pinimg.com/474x/02/33/0e/02330e3846d906fb591395fa04423c9c.jpg",
    title: "Filter Coffee",
    description: "Traditional filtered coffee",
    price: 99,
  },
];

const dessertProducts = [
  {
    image: "https://i.pinimg.com/474x/00/3f/0f/003f0f0351967a7cb6212a8d9bfaf889.jpg",
    title: "Gulab Jamun",
    description: "Sweet milk solid balls",
    price: 199,
  },
  {
    image: "https://i.pinimg.com/474x/37/1e/e7/371ee7bec88d3f6daa4e32846450963c.jpg",
    title: "Chocolate Tiramisu",
    description: "Coffee-flavored Italian dessert",
    price: 250,
  },
  {
    image: "https://i.pinimg.com/474x/21/f7/c9/21f7c91fb15046eec16dbf3cd24ad04a.jpg",
    title: "Churros",
    description: "Fried dough with chocolate",
    price: 170,
  },
  {
    image: "https://i.pinimg.com/474x/dc/4b/c8/dc4bc828307c09b5b2bc56fc7bf1e1b5.jpg",
    title: "Australian Lamingtons",
    description: "Chocolate-coated sponge cake",
    price: 280,
  },
];

function ProductsSection() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8">OUR SPECIAL COFFEE</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {coffeeProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">OUR SPECIAL DESSERT</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {dessertProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductsSection;
