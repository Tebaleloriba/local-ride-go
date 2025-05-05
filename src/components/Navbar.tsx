
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 md:px-10 w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-sm ride-shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-ride-navy">
            Local<span className="text-ride-orange">Ride</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-ride-dark hover:text-ride-orange transition-colors font-medium">How it Works</a>
          <a href="#" className="text-ride-dark hover:text-ride-orange transition-colors font-medium">Safety</a>
          <a href="#" className="text-ride-dark hover:text-ride-orange transition-colors font-medium">Help</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-ride-navy font-medium hidden md:block">
            Sign In
          </Button>
          <Button className="bg-ride-navy hover:bg-ride-navy/90 text-white">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
