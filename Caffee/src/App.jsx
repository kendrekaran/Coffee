import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import CategoryIcons from "./components/category-icons";
import ProductsSection from "./components/products-section";
import PromoBanner from "./components/promo-banner";
import Testimonials from "./components/testimonials";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <CategoryIcons />
      <ProductsSection />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
