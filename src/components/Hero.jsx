import React from 'react';
import { motion } from 'framer-motion';

const avatars = [
  { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop", size: "w-28 h-28 md:w-32 md:h-32", pos: "bottom-[10%] left-[-3%]" },
  { id: 2, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop", size: "w-28 h-28 md:w-32 md:h-32", pos: "bottom-[45%] left-[10%]" },
  { id: 3, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", size: "w-36 h-36 md:w-40 md:h-40", pos: "top-[5%] left-[22%]" },
  { id: 4, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop", size: "w-28 h-28 md:w-32 md:h-32", pos: "bottom-[5%] left-[38%]" },
  { id: 5, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop", size: "w-36 h-36 md:w-40 md:h-40", pos: "top-[20%] left-[52%]" },
  { id: 6, src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop", size: "w-28 h-28 md:w-32 md:h-32", pos: "bottom-[20%] left-[65%]" },
  { id: 7, src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop", size: "w-36 h-36 md:w-40 md:h-40", pos: "top-[10%] right-[12%]" },
  { id: 8, src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop", size: "w-28 h-28 md:w-32 md:h-32", pos: "bottom-[15%] right-[2%]" },
];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative h-[calc(100vh-90px)] w-full overflow-hidden flex flex-col items-center bg-[#F3F3F3]">
      
      {/* LEFT DECORATION: Black Curved Line - Resized & Repositioned */}
      <div className="absolute top-[5%] left-[-30px] w-[140px] md:w-[180px] h-[350px] pointer-events-none opacity-30">
        <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path d="M0 0C150 150 -50 450 250 600" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* RIGHT DECORATION: Purple Shape - Resized & Repositioned */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-[12%] right-[-40px] w-[130px] h-[260px] bg-brand-purple rounded-l-full opacity-50 pointer-events-none"
      />

      {/* TOP CONTENT: Headline & Description */}
      <div className="flex-1 flex flex-col items-center justify-center pt-4 text-center z-10 px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Headline - Size Reduced */}
          <motion.h1 
            variants={itemVariants}
            className="text-[34px] md:text-[64px] lg:text-[84px] xl:text-[96px] font-light font-syne leading-[1.05] tracking-tighter text-black"
          >
            The <span className="relative inline-block">
              thinkers and
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-5 text-brand-yellow -z-10" viewBox="0 0 400 30" fill="none">
                <path d="M5 20C100 5 300 5 395 20" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            doers were <span className="relative inline-block px-3 md:px-5">
              changing
              <div className="absolute inset-0 bg-brand-pink rounded-full -z-10 transform scale-y-90" />
            </span>
            <br />
            the <span className="relative inline-block px-3 md:px-5">
              status
              <div className="absolute inset-0 bg-brand-green rounded-full -z-10 transform scale-y-90" />
            </span> Quo with
          </motion.h1>

          {/* Description - Spacing Reduced (mt-4) */}
          <motion.p 
            variants={itemVariants}
            className="mt-4 max-w-[700px] text-[14px] md:text-[18px] font-normal font-space text-black/80 leading-relaxed px-4"
          >
            We are a team of strategists, designers communicators, researchers.Together. <br className="hidden md:block" />
            we belive that progress only hghappens when you refuse to play things safe.
          </motion.p>
        </motion.div>
      </div>

      {/* BOTTOM CONTENT: Avatar Cluster - Composition Refined */}
      <div className="relative w-full h-[320px] max-w-[1400px] mx-auto mb-4 overflow-visible">
        {avatars.map((avatar, index) => (
          <motion.div
            key={avatar.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, zIndex: 30 }}
            className={`absolute ${avatar.pos} transition-all duration-300`}
          >
            <div className={`${avatar.size} rounded-full border-4 border-white overflow-hidden shadow-lg`}>
              <img src={avatar.src} alt="Team" className="w-full h-full object-cover object-center" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
