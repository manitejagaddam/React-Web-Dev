import React from 'react';
import { Building2, Plane, Package } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-full overflow-hidden aspect-square max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
                alt="Traveler with backpack"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
            <p className="text-gray-600 mb-8">
              Enjoy different experiences in every place you visit and discover new and affordable adventures of course.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: <Building2 className="w-6 h-6 text-sky-500" />,
                  title: "Accommodation",
                  description: "We provide comfortable and affordable accommodations for all your travel needs."
                },
                {
                  icon: <Plane className="w-6 h-6 text-sky-500" />,
                  title: "Flight Ticket",
                  description: "Get the best deals on flight tickets to your dream destinations."
                },
                {
                  icon: <Package className="w-6 h-6 text-sky-500" />,
                  title: "Packaged Tour",
                  description: "All-inclusive tour packages designed to give you the best travel experience."
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;