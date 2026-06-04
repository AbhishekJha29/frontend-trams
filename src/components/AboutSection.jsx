import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full px-8 md:px-16 overflow-hidden bg-[#F3F3F3]">
      {/* Soft Peach Radial Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#FFF5EE] rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#FFF5EE] rounded-full blur-[120px] opacity-60" />
      </div>
      
      {/* Top Row: Tomorrow... */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16"
      >
        <div className="flex-1 relative">
          {/* Red curved line */}
          <div className="absolute -top-12 -left-8 w-32 h-32 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <path d="M10 80C30 40 70 20 90 10" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <h2 className="text-[42px] md:text-[64px] lg:text-[72px] font-light font-syne leading-[1.1] text-black">
            Tomorrow should be <br />
            <span className="relative inline-block">
              better
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-brand-yellow/60 -z-10 rounded-full" />
            </span> than
            <span className="relative inline-block px-6 bg-green-200 rounded-full">
              today
              <div className="absolute inset-0 bg-brand-green rounded-full -z-10 transform scale-y-90" />
            </span>
          </h2>

          <div className="mt-12 max-w-[450px] relative">
            {/* Pink rectangle decoration (background/overlay style) */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full border border-brand-pink/30 rounded-2xl" />
            <p className="text-[16px] md:text-[18px] font-space font-light leading-relaxed">
              We focus on the future of your brand, ensuring that every step taken today leads to a more impactful tomorrow.
            </p>
            <div className="mt-6">
              <a href="#" className="text-[16px] font-space font-medium border-b border-black pb-1 hover:border-brand-yellow transition-colors">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop" 
              alt="Team Work" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative shapes - Small yellow square */}
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand-yellow rounded-lg -z-10" />
        </div>
      </motion.div>



      {/* Bottom Row: See how... */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16"
      >
        <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-white shadow-xl flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop" 
            alt="Collaborative Progress" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 relative">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-light font-syne leading-[1.1] text-black">
            See how we can<br />
            help you
            <span className="relative inline-block px-6">
              progress
              <div className="absolute inset-0 bg-brand-green rounded-full -z-10 transform scale-y-90" />
            </span>
          </h2>

          <div className="mt-6 max-w-[420px] relative">
            {/* Pink rectangle decoration */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full border border-brand-pink/30 rounded-2xl" />
            <p className="text-[15px] md:text-[17px] font-space font-light leading-relaxed">
              Our holistic approach combines strategy, design, and technology to push boundaries and help your brand grow.
            </p>
            <div className="mt-8">
              <a href="#" className="text-[16px] font-space font-medium border-b-2 border-brand-yellow pb-1">
                Read more
              </a>
            </div>
          </div>

          {/* Yellow Square decoration */}
          <div className="absolute top-0 right-10 w-10 h-10 bg-brand-yellow rounded-lg -z-10" />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
