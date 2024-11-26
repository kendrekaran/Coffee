import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#1B1B1B] text-white py-12 px-10 md:20"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Coffee</h2>
          </div>
          <div>
            <h3 className="font-bold mb-4">PRIVACY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Order online</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Menu</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Find a location</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Plans & pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Get your franchise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Coffee. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
