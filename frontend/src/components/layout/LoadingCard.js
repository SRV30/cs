import React from "react";

const LoadingCard = () => {
  return (
    <div className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow-lg overflow-hidden">
      <div className="bg-gray-200 h-48 animate-pulse"></div>

      <div className="p-4">
        <div className="bg-gray-200 w-3/4 h-6 mb-3 animate-pulse"></div>

        <div className="bg-gray-200 h-4 mb-3 animate-pulse"></div>

        <div className="flex justify-between items-center">
          <div className="bg-gray-200 w-1/4 h-4 animate-pulse"></div>
          <div className="bg-gray-200 w-1/4 h-4 animate-pulse"></div>
        </div>

        <div className="mt-3">
          <div className="bg-gray-200 w-1/2 h-8 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
