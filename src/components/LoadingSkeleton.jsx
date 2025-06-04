import React from 'react';

const LoadingSkeleton = () => {
  // Create an array of 4 elements for the skeleton
  const skeletons = Array.from({ length: 4 }, (_, index) => index);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletons.map((index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col animate-pulse"
        >
          {/* Image skeleton */}
          <div className="h-48 bg-gray-300"></div>
          
          {/* Content skeleton */}
          <div className="p-4 flex-grow flex flex-col">
            {/* Date & location skeleton */}
            <div className="flex items-center mb-2">
              <div className="h-4 w-4 bg-gray-300 rounded-full mr-2"></div>
              <div className="h-3 w-24 bg-gray-300 rounded"></div>
              <div className="h-4 w-4 bg-gray-300 rounded-full ml-4 mr-2"></div>
              <div className="h-3 w-16 bg-gray-300 rounded"></div>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="h-4 w-4 bg-gray-300 rounded-full mr-2"></div>
              <div className="h-3 w-32 bg-gray-300 rounded"></div>
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-2 mb-4 flex-grow">
              <div className="h-3 w-full bg-gray-300 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
            </div>
            
            {/* Button skeleton */}
            <div className="h-9 w-full bg-gray-300 rounded-md mt-auto"></div>
          </div>
          
          {/* Bottom bar */}
          <div className="h-1 bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;