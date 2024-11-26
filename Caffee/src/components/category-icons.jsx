import React from "react";
import { motion } from "framer-motion";
import { Coffee, CoffeeIcon, Cake } from "lucide-react";

const categories = [
  { icon: Coffee, label: "Hot Coffee" },
  { icon: CoffeeIcon, label: "Cold Coffee" },
  { icon: Coffee, label: "Our Coffee" },
  { icon: Cake, label: "Bakery" },
];

export function CategoryIcons() {
  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="p-4 bg-primary/10 rounded-full">
              <category.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium">{category.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CategoryIcons;
