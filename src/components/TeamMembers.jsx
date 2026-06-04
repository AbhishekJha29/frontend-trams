import React from 'react';
import { motion } from 'framer-motion';

const avatars = [
  { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop", size: "w-36 h-36", pos: "bottom-0 left-[-5%] md:left-[2%]" },
  { id: 2, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop", size: "w-36 h-36", pos: "bottom-[20%] left-[8%] md:left-[10%]" },
  { id: 3, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", size: "w-44 h-44", pos: "top-[10%] left-[20%] md:left-[22%]" },
  { id: 4, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop", size: "w-36 h-36", pos: "bottom-[5%] left-[35%] md:left-[30%]" },
  { id: 5, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop", size: "w-44 h-44", pos: "top-[30%] left-[45%] md:left-[45%]" },
  { id: 6, src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop", size: "w-36 h-36", pos: "bottom-[15%] left-[55%] md:left-[52%]" },
  { id: 7, src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop", size: "w-44 h-44", pos: "top-[5%] right-[15%] md:right-[20%]" },
  { id: 8, src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop", size: "w-36 h-36", pos: "bottom-[10%] right-[0%] md:right-[5%]" },
];

const TeamMembers = () => {
  return (
    <div className="relative w-full h-[420px] mb-20 px-4 md:px-0">
      <div className="relative w-full h-full max-w-7xl mx-auto overflow-visible">
        {avatars.map((avatar, index) => (
          <motion.div
            key={avatar.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className={`absolute ${avatar.pos} transition-all duration-300`}
          >
            <div className={`${avatar.size} rounded-full border-4 border-white overflow-hidden shadow-xl`}>
              <img src={avatar.src} alt="Team" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
