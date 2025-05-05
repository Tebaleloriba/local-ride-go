
import React from 'react';

interface VehicleOptionsProps {
  selectedVehicle: string;
  onSelectVehicle: (vehicleType: string) => void;
}

const VehicleOptions: React.FC<VehicleOptionsProps> = ({ selectedVehicle, onSelectVehicle }) => {
  const vehicles = [
    {
      id: 'economy',
      name: 'Economy',
      description: 'Affordable rides for everyday use',
      price: '$8.50',
      eta: '3-5 min',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
          <circle cx="6.5" cy="16.5" r="2.5" />
          <circle cx="16.5" cy="16.5" r="2.5" />
        </svg>
      )
    },
    {
      id: 'comfort',
      name: 'Comfort',
      description: 'More space, top-rated drivers',
      price: '$12.75',
      eta: '4-6 min',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
          <circle cx="6" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
        </svg>
      )
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Luxury vehicles with professional drivers',
      price: '$18.90',
      eta: '6-8 min',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v7h7a2 2 0 0 1 2 2v3h-2" />
          <path d="M9 17l6 0" />
          <path d="M13 7l0 5" />
          <path d="M13 7l3 5" />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-3 py-2">
      {vehicles.map((vehicle) => (
        <div 
          key={vehicle.id}
          className={`p-4 border rounded-lg transition-all cursor-pointer ${
            selectedVehicle === vehicle.id
              ? 'border-ride-orange bg-ride-orange/5'
              : 'border-gray-200 hover:border-ride-orange/30'
          }`}
          onClick={() => onSelectVehicle(vehicle.id)}
        >
          <div className="flex items-center">
            <div className={`mr-3 text-ride-navy ${selectedVehicle === vehicle.id ? 'text-ride-orange' : ''}`}>
              {vehicle.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-ride-navy">{vehicle.name}</h4>
                <span className="font-semibold text-ride-navy">{vehicle.price}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500">{vehicle.description}</p>
                <span className="text-sm text-gray-500">{vehicle.eta}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleOptions;
