import React from 'react';
import { Clock } from 'lucide-react';

const destinations = [
  {
    name: "Helsinki, Finland",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5",
    price: "$599",
    duration: "10 Days Trip"
  },
  {
    name: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    price: "$699",
    duration: "10 Days Trip"
  },
  {
    name: "London, UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    price: "$799",
    duration: "12 Days Trip"
  },
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: "$899",
    duration: "14 Days Trip"
  }
];

const Destinations = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-gray-600">Vacations to make your experience enjoyable in Europe!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{destination.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-sky-500 font-bold">{destination.price}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{destination.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;