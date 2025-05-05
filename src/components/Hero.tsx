
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[calc(100vh-8rem)]">
          <div className="flex flex-col justify-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ride-navy mb-6 leading-tight">
              Your Reliable Ride,<br />
              Just a <span className="text-ride-orange">Tap Away</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Book your ride easily, track in real-time, and enjoy a safe journey with our trusted local drivers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-ride-orange hover:bg-ride-orange/90 text-white py-6 px-8 text-lg">
                Book a Ride
              </Button>
              <Button variant="outline" className="border-ride-navy text-ride-navy hover:bg-ride-navy/5 py-6 px-8 text-lg">
                Become a Driver
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="bg-ride-gray rounded-xl overflow-hidden shadow-xl animate-fade-in w-full max-w-md aspect-[9/16]">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" 
                alt="Ride in progress" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ride-navy/50 to-transparent"></div>
            </div>
            <div className="absolute -top-6 -right-6 md:-right-16 bg-white p-4 rounded-xl ride-shadow animate-pulse-soft w-32 md:w-40">
              <p className="text-xs md:text-sm text-gray-500">Your driver</p>
              <p className="text-ride-navy font-semibold">Alex, 4 min away</p>
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-16 bg-white p-4 rounded-xl ride-shadow animate-pulse-soft w-32 md:w-40">
              <p className="text-xs md:text-sm text-gray-500">Average wait</p>
              <p className="text-ride-navy font-semibold">3-5 minutes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-ride-orange to-ride-blue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
  );
};

export default Hero;
