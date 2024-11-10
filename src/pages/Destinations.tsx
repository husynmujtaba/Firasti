import React from 'react';
import { MapPin, Calendar, Users, Clock } from 'lucide-react';

const destinations = [
  {
    id: 'srinagar',
    name: 'Srinagar',
    image: 'https://images.unsplash.com/photo-1685716271205-83a5ac2ba63b',
    description: 'Experience the magic of Dal Lake and historic Mughal gardens',
    duration: '2-3 days',
    bestTime: 'Apr-Oct',
    groupSize: '2-8 people',
    activities: ['Shikara Rides', 'Garden Tours', 'Old City Walk', 'Local Cuisine', 'Handicraft Shopping']
  },
  {
    id: 'gulmarg',
    name: 'Gulmarg',
    image: 'https://images.unsplash.com/photo-1498576260462-eefc9d0ce9f7',
    description: 'World-renowned ski resort with breathtaking mountain views',
    duration: '2-4 days',
    bestTime: 'Dec-Mar (Skiing), Apr-Oct (Summer)',
    groupSize: '2-6 people',
    activities: ['Skiing', 'Gondola Ride', 'Mountain Biking', 'Hiking', 'Photography']
  },
  {
    id: 'pahalgam',
    name: 'Pahalgam',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
    description: 'Scenic valley perfect for adventure and relaxation',
    duration: '2-3 days',
    bestTime: 'Mar-Oct',
    groupSize: '2-8 people',
    activities: ['River Rafting', 'Trekking', 'Golf', 'Horse Riding', 'Camping']
  },
  {
    id: 'sonamarg',
    name: 'Sonamarg',
    image: 'https://images.unsplash.com/photo-1731048935114-4b84ba084619',
    description: 'The Meadow of Gold with stunning glaciers',
    duration: '1-2 days',
    bestTime: 'Apr-Sep',
    groupSize: '2-6 people',
    activities: ['Glacier Trek', 'Pony Rides', 'Photography', 'Camping', 'Fishing']
  }
];

export default function Destinations() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1566837497312-7be4a47b156f"
          alt="Kashmir Destinations"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Discover Kashmir's Finest Destinations
          </h1>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full">
                  <h3 className="text-lg font-semibold">{destination.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{destination.bestTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{destination.groupSize}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Popular Activities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {destination.activities.map((activity) => (
                      <div
                        key={activity}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <span>•</span>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Plan Your Trip
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}