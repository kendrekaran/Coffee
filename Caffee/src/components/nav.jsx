import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-sm sticky top-0 z-50"
    >
      <a href="/" className="text-2xl font-bold">Coffee</a>
      <div className="hidden md:flex items-center space-x-6">
        <a href="/" className="hover:text-primary">HOME</a>
        <a href="/coffee" className="hover:text-primary">COFFEE</a>
        <a href="/bakery" className="hover:text-primary">BAKERY</a>
        <a href="/shop" className="hover:text-primary">SHOP</a>
        <a href="/about" className="hover:text-primary">ABOUT</a>
        <a href="/login" className="hover:text-primary">LOGIN</a>
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Search className="w-5 h-5" />
      </button>
    </motion.nav>
  );
}

export default Nav;
