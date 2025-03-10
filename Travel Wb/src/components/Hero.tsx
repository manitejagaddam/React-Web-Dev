import React from 'react';
import { Plane } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sky-500 font-medium mb-4">BEST DESTINATIONS AROUND THE WORLD</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Travel, enjoy<br />and live a new<br />and full life
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Built all-in-one travel options let tourists verify flight deals in preferred to spontaneous & improvised traveling. Pack your bags and free yourself for life.
            </p>
            <button className="bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-600 transition-colors text-lg">
              Find out more
            </button>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f"
                alt="Traveler with camera"
                className="rounded-full w-full max-w-md mx-auto"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
                <Plane className="text-sky-500" />
                <div>
                  <p className="text-sm font-medium">HYD → GOA</p>
                  <p className="text-xs text-gray-500">4h 30m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;