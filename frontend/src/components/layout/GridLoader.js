import React from "react";

const GridLoader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-6 h-6 bg-blue-600 animate-pulse"></div>
        ))}
      </div>
    </div>
  );
};

export default GridLoader;
