import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["Home", "Studio", "Service", "Blog"]
    },
    {
      title: "Terms & Policies",
      links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"]
    },
    {
      title: "Follow Us",
      links: ["Instagram", "LinkedIn", "Youtube", "Twitter"]
    }
  ];

  return (
    <footer className="relative w-full bg-[#D7E6D8] pt-24 pb-10 px-4 md:px-8 overflow-hidden">

      {/* DECORATIVE PURPLE SHAPE */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[180px] h-[180px] md:w-[320px] md:h-[320px] bg-brand-purple rounded-bl-full opacity-100 z-0"
      />

      {/* NEWSLETTER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center text-center mb-24 z-10"
      >
        {/* PINK HAND-DRAWN STROKES */}
        <div className="mb-10 w-28 md:w-36">
          <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 35C25 15 75 15 95 35" stroke="#FFC0CB" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M10 40C30 20 70 20 90 40" stroke="#FFC0CB" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>

        <h2 className="text-[48px] md:text-[80px] lg:text-[100px] xl:text-[115px] font-light font-syne leading-[0.98] tracking-tighter text-black">
          Subscribe to <br className="hidden md:block" /> our newsletter
        </h2>

        <p className="mt-8 text-[15px] md:text-[19px] font-space font-light text-black/70 md:whitespace-nowrap">
          To make your stay special and even more memorable
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-14 bg-black text-white px-12 h-14 rounded-full text-[16px] font-medium transition-all shadow-xl hover:shadow-2xl"
        >
          Subscribe Now
        </motion.button>
      </motion.div>

      {/* DIVIDER */}
      <div className="w-[88%] mx-auto h-[1px] bg-black/10 my-24" />

      {/* FOOTER GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-20">
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="text-[20px] font-medium font-syne mb-10 tracking-tight">{col.title}</h4>
            <ul className="flex flex-col gap-5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[17px] font-space font-light text-black/65 hover:text-black transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT COLUMN */}
        <div>
          <h4 className="text-[20px] font-medium font-syne mb-10 tracking-tight">Contact</h4>
          <div className="flex flex-col gap-8 text-[17px] font-space font-light text-black/65">
            <p className="leading-relaxed">
              1498w Fluton ste, STE <br />
              2D Chcigo, IL 63867.
            </p>
            <p className="font-normal text-black/80">(123) 45678900</p>
            <a href="mailto:info@elementum.com" className="hover:text-black transition-colors underline underline-offset-8 decoration-black/20">
              info@elementum.com
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-24 pt-10 border-t border-black/5">
        <p className="text-[14px] font-space font-light text-black/40 tracking-wide">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
