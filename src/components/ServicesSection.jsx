import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const ServiceRow = ({ smallText, largeText, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-black/10 cursor-pointer"
  >
    <div className="w-full md:w-[25%] mb-4 md:mb-0">
      <p className="text-[14px] font-space font-light text-black/60 max-w-[200px]">
        {smallText}
      </p>
    </div>
    <div className="flex-1 relative">
      {/* Decorative circle for the 3rd row */}
      {index === 2 && (
        <div className="absolute -top-12 -left-12 w-32 h-32 md:w-48 md:h-48 -z-10 opacity-80 pointer-events-none">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#F4E04D" />
            <path d="M30 50 Q50 20 70 50 T70 80" stroke="#1B4D3E" strokeWidth="2" fill="none" opacity="0.3" />
            <circle cx="70" cy="30" r="5" fill="#A8E6CF" />
          </svg>
        </div>
      )}
      <h3 className="text-[32px] md:text-[48px] lg:text-[56px] font-light font-syne group-hover:translate-x-4 transition-transform duration-500">
        {largeText}
      </h3>
    </div>
    <div className="mt-4 md:mt-0">
      <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
        <ArrowRight size={20} />
      </div>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  const avatars = [
    // Left side
    { id: 1, src: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=100&h=100&fit=crop", size: "w-16 h-16", pos: "top-[10%] left-[5%]" },
    { id: 2, src: "https://images.unsplash.com/photo-1519085188654-a90f7a6857a2?w=100&h=100&fit=crop", size: "w-14 h-14", pos: "bottom-[20%] left-[8%]" },
    { id: 3, src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=120&h=120&fit=crop", size: "w-20 h-20", pos: "bottom-[40%] left-[2%]" },
    // Right side
    { id: 4, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop", size: "w-20 h-20", pos: "top-[15%] right-[5%]" },
    { id: 5, src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop", size: "w-16 h-16", pos: "top-[40%] right-[8%]" },
    { id: 6, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", size: "w-14 h-14", pos: "bottom-[15%] right-[10%]" },
    { id: 7, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop", size: "w-24 h-24", pos: "bottom-[35%] right-[2%]" },
  ];

  return (
    <section className="relative w-full bg-[#F3F3F3] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24">
          <div className="relative">
            <h2 className="text-[42px] md:text-[64px] lg:text-[72px] font-light font-syne text-black leading-tight">
              What we <span className="relative inline-block px-4">
                can
                <div className="absolute inset-0 bg-[#A8E6CF] rounded-full -z-10 transform scale-y-75" />
              </span>
              <span className="relative inline-block">
                offer
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#F4E04D]/60 -z-10 rounded-full" />
              </span> you!
            </h2>
          </div>
          <div className="hidden lg:block w-48 h-48 opacity-40 translate-x-12 translate-y-12">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
              <path d="M10 10C50 80 150 120 190 190" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Services List */}
        <div className="mb-4">
          <ServiceRow 
            index={0}
            smallText="Office of multiple interest content"
            largeText="Collaborative & partnership"
          />
          <ServiceRow 
            index={1}
            smallText="The hanger US Air force digital experimental"
            largeText="We talk about our weight"
          />
          <ServiceRow 
            index={2}
            smallText="Delta faucet content, social, digital"
            largeText="Piloting digital confidence"
          />
        </div>

        {/* Testimonial Section */}
        <div className="relative pt-5 pb-10">
          <div className="text-center mb-24">
            <h2 className="text-[36px] md:text-[48px] font-light font-syne text-black">
              <span className="relative inline-block px-4">
                What
                <div className="absolute inset-0 bg-[#A8E6CF] rounded-full -z-10 transform scale-y-75" />
              </span> our customer says <br />
              <span className="relative inline-block">
                About Us
                <div className="absolute -bottom-1 left-0 w-full h-3 bg-[#F4E04D]/60 -z-10 rounded-full" />
              </span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Magenta outlined portrait */}
            <div className="absolute -top-24 -left-12 md:-left-24 w-28 h-28 md:w-36 md:h-36 p-1 border-2 border-pink-500 rounded-xl -rotate-6 z-20 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" 
                alt="Client" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Testimonial Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#E8F5E9] p-10 md:p-20 rounded-[40px] text-center shadow-sm relative z-10"
            >
              <div className="flex justify-center mb-8">
                <Quote size={48} className="text-black/10 fill-black/10 rotate-180" />
              </div>
              <p className="text-[18px] md:text-[22px] font-space font-light text-black leading-relaxed">
                Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasnt used, which have also proved to be easy to use and reliable.
              </p>
            </motion.div>

            {/* Scattered Avatars */}
            <div className="absolute inset-0 pointer-events-none -z-0">
              {avatars.map((avatar) => (
                <motion.div
                  key={avatar.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + avatar.id * 0.05 }}
                  className={`absolute ${avatar.pos} ${avatar.size} rounded-full border-4 border-white overflow-hidden shadow-lg hidden md:block`}
                >
                  <img src={avatar.src} alt="User" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
