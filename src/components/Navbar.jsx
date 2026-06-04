import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <nav className="fixed top-0 left-0 w-full h-[90px] z-50 flex items-center bg-brand-bg/80 backdrop-blur-md px-8 md:px-16 border-b border-black/5">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="text-[24px] font-medium tracking-tight font-syne cursor-pointer">
          Elementum
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-12 text-[15px] font-normal text-black/80">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="transition-colors hover:text-black">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 transition-transform active:scale-90"
          >
            {isOpen ? <X size={28} strokeWidth={1.2} /> : <Menu size={28} strokeWidth={1.2} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[90px] left-0 w-full bg-brand-bg border-b border-black/5 px-8 py-12 lg:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[28px] font-syne font-light"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
