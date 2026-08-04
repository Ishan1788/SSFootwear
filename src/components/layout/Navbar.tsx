import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-tighter text-primary">
            SS FOOTWEAR
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-technical text-label-technical uppercase tracking-widest">
            {/* Products dropdown */}
            <div className="relative group">
              <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-1">
                Products
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </Link>
              <div className="absolute left-0 top-full w-64 bg-surface border border-border/30 shadow-lg p-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/products?category=men" className="text-sm hover:text-primary">Men</Link>
                  <Link to="/products?category=women" className="text-sm hover:text-primary">Women</Link>
                  <Link to="/products?category=kids" className="text-sm hover:text-primary">Kids</Link>
                  <Link to="/products?category=school" className="text-sm hover:text-primary">School</Link>
                  <Link to="/products?category=sports" className="text-sm hover:text-primary">Sports</Link>
                  <Link to="/products?category=industrial" className="text-sm hover:text-primary">Industrial</Link>
                  <Link to="/products?category=winter" className="text-sm hover:text-primary">Winter</Link>
                </div>
              </div>
            </div>


            <Link to="/factory" className="hover:text-primary transition-colors">Factory</Link>
            <Link to="/dealer" className="hover:text-primary transition-colors">Become Dealer</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button aria-label="Wishlist" className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button aria-label="Cart" className="hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-surface border-t border-border/30 p-4">
            <nav className="flex flex-col gap-4 font-technical text-label-technical uppercase tracking-widest">
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <Link to="/factory" className="hover:text-primary transition-colors">Factory</Link>
              <Link to="/dealer" className="hover:text-primary transition-colors">Become Dealer</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Announcement Bar */}
      <div className="bg-primary text-white text-center text-xs md:text-sm py-2 px-4 font-technical uppercase tracking-widest">
        🇳🇵 Proudly Manufacturing Footwear in Nepal Since 2009 · Trusted by 500+ Retailers Across Nepal
      </div>
    </>
  );
}