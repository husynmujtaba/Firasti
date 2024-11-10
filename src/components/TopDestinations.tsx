import React from 'react';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Srinagar',
    image: 'https://images.unsplash.com/photo-1685716271205-83a5ac2ba63b',
    description: 'Experience the magic of Dal Lake and historic Mughal gardens',
    activities: ['Shikara Rides', 'Garden Tours', 'Old City Walk']
  },
  {
    name: 'Gulmarg',
    image: 'https://images.unsplash.com/photo-1498576260462-eefc9d0ce9f7',
    description: 'World-renowned ski resort with breathtaking mountain views',
    activities: ['Skiing', 'Gondola Ride', 'Mountain Biking']
  },
  {
    name: 'Pahalgam',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
    description: 'Scenic valley perfect for adventure and relaxation',
    activities: ['River Rafting', 'Trekking', 'Golf']
  },
  {
    name: 'Sonamarg',
    image: 'https://images.unsplash.com/photo-1731048935114-4b84ba084619',
    description: 'The Meadow of Gold with stunning glaciers',
    activities: ['Glacier Trek', 'Pony Rides', 'Photography']
  }
];

export default function TopDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Top Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">{destination.name}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="space-y-2">
                  {destination.activities.map((activity) => (
                    <div
                      key={activity}
                      className="text-sm text-gray-500 flex items-center space-x-2"
                    >
                      <span>•</span>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}