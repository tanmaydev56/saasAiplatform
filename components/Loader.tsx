import React from 'react';

const Loader = () => {
  return (
   
       <div className="relative w-24 h-24">
        {/* Outer ring glow */}
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-l-[#FACC15] border-r-[#FDE047] animate-spin"></div>

        {/* Soft pulsing glow */}
        <div className="absolute inset-1.5 rounded-full bg-[#fde0473a] animate-ping opacity-70"></div>

        {/* Inner core */}
        <div className="absolute inset-4 rounded-full bg-[#FACC15] shadow-[0_0_20px_#FACC15]"></div>
      </div>
    
   
  );
};

export default Loader;
