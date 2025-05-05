
import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="bg-ride-gray rounded-lg overflow-hidden h-60 md:h-full w-full relative">
      {/* This is a placeholder for an actual map integration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-ride-navy w-full h-full animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <p className="text-ride-navy font-medium">Map View</p>
          <p className="text-gray-500 text-sm">Your location will be displayed here</p>
        </div>
      </div>
      
      {/* Map Grid Lines (for visual effect) */}
      <div className="absolute inset-0">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(#0A234220 1px, transparent 1px), linear-gradient(90deg, #0A234220 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </div>
  );
};

export default Map;
