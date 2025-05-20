import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-blue-100 animate-ping opacity-75"></div>
        <div className="absolute inset-4 rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Loader;
