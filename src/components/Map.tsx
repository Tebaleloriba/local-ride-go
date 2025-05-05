
import React, { useEffect, useRef } from 'react';
import { Car } from 'lucide-react';

const Map: React.FC = () => {
  const carRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple animation for the car
    const animateCar = () => {
      if (!carRef.current) return;
      
      let posX = 0;
      let direction = 1;
      
      const animate = () => {
        if (!carRef.current) return;
        
        // Change direction when reaching edges
        if (posX > 80) direction = -1;
        if (posX < 0) direction = 1;
        
        // Move car
        posX += direction * 0.5;
        carRef.current.style.left = `${posX}%`;
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    animateCar();
  }, []);
  
  return (
    <div className="bg-ride-gray rounded-lg overflow-hidden h-60 md:h-full w-full relative">
      {/* South Africa Map Background */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url("https://maps.googleapis.com/maps/api/staticmap?center=South+Africa&zoom=5&size=600x400&maptype=roadmap&style=feature:all|element:labels|visibility:off&key=YOUR_API_KEY")`,
            backgroundSize: 'cover',
            opacity: 0.8
          }}
        ></div>
        
        {/* Map Grid Lines (for visual effect) */}
        <div className="absolute inset-0">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(#0A234220 1px, transparent 1px), linear-gradient(90deg, #0A234220 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
      
      {/* South Africa Outline */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          width="70%" 
          height="70%" 
          viewBox="0 0 800 800" 
          className="text-ride-navy opacity-20"
        >
          <path 
            fill="currentColor" 
            d="M569.57,348.15c-6.65,2.83-14.43,1.41-21.09,3.32-6.9,1.99-13.73,4.28-20.59,6.42
              c-2.19,0.68-4.61,0.91-6.35,2.39c-3.66,3.12-2.3,12.33-8.6,11.4c-2.72-0.4-3.29-3.33-4.25-5.36
              c-3.96-8.4-3.56-17.41-0.85-26.01c-4.47-0.46-4.78,4.75-7.32,7.17c-5.71,5.46-13.19,1.72-19.8,0.46
              c-2.3,7.59-8.56,12.41-14.36,17.21c-6.53,5.4-14.23,9.18-21.37,13.73c-4.45-1.74-8.02-5.01-12.13-7.4
              c-4.33,2.06-6.02,7.19-10.67,8.67c-6.13,1.95-12.46-1.28-18.44-2.78c-21.35-5.37-42.99-9.43-64.41-14.48
              c-2.96-0.7-7.07-1.66-8.04-4.91c-1.01-3.37,2.14-5.9,4.53-7.67c4.72-3.5,10.01-6.5,13.29-11.53
              c-9.4-0.59-19.19,1.13-28.16-2.39c-7.5-2.94-8.23-11.61-11.06-17.98c-4.77-10.7-18.95-8.13-28.01-13
              c-15.02-8.09-16.79-27.56-18.8-42.78c-3.96,0.73-7.93,1.61-11.76,2.99c-11.04,3.96-22.93,8.17-34.34,5.13
              c-12.11-3.22-21.05-15.54-20.56-28.09c-7.13-3.84-15.13-6.18-22.72-9.13c-0.87,9.13-3.79,18.5-11.29,24.42
              c-7.21,5.7-16.52,7.28-25.17,9.91c-6.12,1.87-12.84,4.05-16.07,9.87c-2.83,5.11,0.58,11.19,4.32,15.17
              c3.97,4.23,8.86,7.31,14.06,9.59c-2.79,7.95-5.6,15.89-8.45,23.82c-4.8,13.31-17.38,23.33-31.58,24.9
              c-11.69,1.3-23.36-2.6-34.72-5.39c-1.21-2.19-2.21-4.5-3.13-6.84c-0.27,13.12-0.05,26.25,0.51,39.36
              c1.8,0.39,3.52,0.92,4.97,2.13c1.94,1.62,2.92,4.03,3.63,6.43c3.57,11.85,5.25,24.13,8.01,36.18
              c3.37,14.74,8.38,30.02,19.52,40.62c8.35,7.95,19.58,11.69,30.62,13.55c18.68,3.14,37.71,2.99,56.55,2.68
              c0.77,4.41-0.03,8.8-1.93,12.82c2.61,5.42,5.92,10.45,8.42,15.95c6.42,14.12,5.29,30.83-1.89,44.53
              c-1.9,3.63-4.06,7.2-5.18,11.18c-0.04,9.29,1.4,18.63,4.67,27.28c2.43,6.5,8.02,12.78,15.21,13.2
              c3.5,0.2,7.49-0.64,10.01-3.22c7.65-7.76,8.93-19.03,13.12-28.66c3.58-8.2,10.33-17.77,20.02-17.99
              c13.03-0.31,24.97,6.94,37.33,10.84c10.2,3.22,22.45,4.8,31.45-1.84c3.5-2.58,5.96-6.28,8.88-9.46
              c4.7-5.12,11.65-8.45,18.5-7.9c6.01,0.48,11.44,3.71,15.77,7.86c18.01,17.18,20.02,44.2,31.8,65.46
              c5.56,9.99,15.03,16.92,21.8,25.99c8.97,12,8.34,27.83,13.02,41.7c1.23,3.66,3.07,7.82,6.99,9.08
              c5.69,1.83,11.29-2.12,15.7-5.7c-1.9-3.61-5.95-5.57-7.84-9.19c-3.12-5.97-0.28-13.1,3.01-18.43
              c6.95-11.24,17.12-19.97,25.21-30.25c8.09-10.28,13.84-22.89,12.08-35.86c-3.2-0.69-6.37-1.43-9.58-2.12
              c6.12-4.41,13.79-5.62,21.04-6.74c6.69-1.03,13.6-1.76,19.7-4.85c-1.84-6.5-4.26-12.82-6.52-19.17
              c-3.14-8.86-6.48-17.66-9.4-26.58c-4.17-12.71-4.67-26.89,0.69-39.25c3.7-8.56,11.05-16.46,20.34-17.79
              c21.86-3.11,40.67,15.15,62.51,12.24c4.32-0.58,8.37-2.25,12.64-3.15c4.75-1,9.8-0.78,14.33-2.52
              c8.32-3.19,13.86-10.86,16.65-19.16c2.79-8.3,3.43-17.14,3.84-25.87c0.46-9.72,2.17-19.76,8.39-27.39
              c4.8-5.88,11.71-9.66,18.58-12.72c-11.21-3.83-22.58-7.24-33.89-10.8c-2.08-0.65-4.25-1.3-5.91-2.77
              c-4.09-3.63-3.75-11.2-8.95-13.36c-6.48-2.71-11.14,4.36-16.5,7.1c-4.12,2.1-9.01,2.04-13.58,2.87
              c-8.46,1.53-16.03,6.53-24.31,8.7c-10.16,2.65-23.3-0.21-27.74-10.49C581.12,348.57,569.57,348.15,569.57,348.15z"
          />
        </svg>
      </div>
      
      {/* Animated Car */}
      <div 
        ref={carRef} 
        className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out"
      >
        <div className="p-2 bg-ride-orange rounded-full shadow-lg">
          <Car size={24} className="text-white animate-pulse" />
        </div>
      </div>
      
      {/* Caption */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
        <div className="text-center bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm">
          <p className="text-ride-navy font-medium text-sm">South Africa</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
