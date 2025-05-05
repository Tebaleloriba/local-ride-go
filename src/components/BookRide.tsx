
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import VehicleOptions from './VehicleOptions';
import RideConfirmation from './RideConfirmation';
import Map from './Map';

const BookRide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'location' | 'vehicle' | 'confirmation'>('location');
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  
  const handleContinue = () => {
    if (currentStep === 'location') {
      setCurrentStep('vehicle');
    } else if (currentStep === 'vehicle') {
      setCurrentStep('confirmation');
    }
  };
  
  const handleBack = () => {
    if (currentStep === 'vehicle') {
      setCurrentStep('location');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('vehicle');
    }
  };

  const handleSelectVehicle = (vehicleType: string) => {
    setSelectedVehicle(vehicleType);
  };
  
  return (
    <div className="py-16 px-6 md:px-10 bg-white" id="book-ride">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ride-navy mb-4">Book Your Ride</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Get to your destination safely and comfortably with our reliable drivers.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden ride-shadow">
              <CardContent className="p-6">
                {currentStep === 'location' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-ride-navy">Where are you going?</h3>
                    
                    <div className="space-y-4 py-2">
                      <div>
                        <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                        <Input 
                          id="pickup"
                          placeholder="Enter pickup address"
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                        <Input
                          id="destination"
                          placeholder="Enter destination"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-ride-orange hover:bg-ride-orange/90 text-white"
                      onClick={handleContinue}
                      disabled={!pickupLocation || !destination}
                    >
                      Continue
                    </Button>
                  </div>
                )}
                
                {currentStep === 'vehicle' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={handleBack}
                        className="text-ride-navy hover:text-ride-orange transition-colors flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Back
                      </button>
                      <h3 className="text-xl font-semibold text-ride-navy">Choose a Ride</h3>
                    </div>
                    
                    <VehicleOptions 
                      selectedVehicle={selectedVehicle} 
                      onSelectVehicle={handleSelectVehicle} 
                    />
                    
                    <Button 
                      className="w-full bg-ride-orange hover:bg-ride-orange/90 text-white"
                      onClick={handleContinue}
                      disabled={!selectedVehicle}
                    >
                      Continue
                    </Button>
                  </div>
                )}
                
                {currentStep === 'confirmation' && (
                  <RideConfirmation 
                    pickupLocation={pickupLocation}
                    destination={destination}
                    vehicleType={selectedVehicle}
                    onBack={handleBack}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3 h-60 md:h-[500px]">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRide;
