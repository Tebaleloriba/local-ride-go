
import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/use-toast';

interface RideConfirmationProps {
  pickupLocation: string;
  destination: string;
  vehicleType: string;
  onBack: () => void;
}

const RideConfirmation: React.FC<RideConfirmationProps> = ({
  pickupLocation,
  destination,
  vehicleType,
  onBack
}) => {
  const handleBookRide = () => {
    toast({
      title: "Ride Booked!",
      description: "Your driver is on the way. Estimated arrival: 4 minutes.",
    });
  };

  const getPriceByVehicleType = () => {
    switch (vehicleType) {
      case 'economy':
        return '$8.50';
      case 'comfort':
        return '$12.75';
      case 'premium':
        return '$18.90';
      default:
        return '$10.00';
    }
  };

  const getVehicleNameByType = () => {
    switch (vehicleType) {
      case 'economy':
        return 'Economy';
      case 'comfort':
        return 'Comfort';
      case 'premium':
        return 'Premium';
      default:
        return 'Standard';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="text-ride-navy hover:text-ride-orange transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back
        </button>
        <h3 className="text-xl font-semibold text-ride-navy">Confirm Your Ride</h3>
      </div>
      
      <div className="bg-ride-gray/50 p-4 rounded-lg">
        <div className="flex items-start mb-4">
          <div className="min-w-6 mr-3 mt-1">
            <div className="w-3 h-3 rounded-full bg-ride-orange"></div>
            <div className="w-0.5 h-10 bg-gray-300 mx-auto my-1"></div>
            <div className="w-3 h-3 rounded-full bg-ride-blue"></div>
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <p className="text-sm text-gray-500">Pickup</p>
              <p className="font-medium text-ride-navy">{pickupLocation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Destination</p>
              <p className="font-medium text-ride-navy">{destination}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Vehicle Type</span>
            <span className="font-medium text-ride-navy">{getVehicleNameByType()}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Estimated Time</span>
            <span className="font-medium text-ride-navy">4-6 min</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Estimated Fare</span>
            <span className="font-semibold text-ride-navy">{getPriceByVehicleType()}</span>
          </div>
        </div>
      </div>
      
      <div className="pt-2">
        <Button 
          className="w-full bg-ride-orange hover:bg-ride-orange/90 text-white"
          onClick={handleBookRide}
        >
          Book Ride
        </Button>
      </div>
    </div>
  );
};

export default RideConfirmation;
