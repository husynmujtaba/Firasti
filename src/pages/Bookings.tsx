import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Hotel, Compass } from 'lucide-react';

const accommodations = [
  {
    id: 1,
    name: 'Vivanta Dal View',
    location: 'Srinagar',
    type: 'Luxury Hotel',
    price: '₹15,000/night',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1730913042027-5441ab44fcc6'
  },
  {
    id: 2,
    name: 'Khyber Himalayan Resort',
    location: 'Gulmarg',
    type: 'Mountain Resort',
    price: '₹20,000/night',
    rating: 4.9,
    image: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584'
  },
  {
    id: 3,
    name: 'New Pahalgam Retreat',
    location: 'Pahalgam',
    type: 'Boutique Hotel',
    price: '₹12,000/night',
    rating: 4.7,
    image: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584'
  }
];

const activities = [
  {
    id: 1,
    name: 'Shikara Ride on Dal Lake',
    location: 'Srinagar',
    duration: '2 hours',
    price: '₹2,000/person',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1685716271205-83a5ac2ba63b'
  },
  {
    id: 2,
    name: 'Gulmarg Gondola Ride',
    location: 'Gulmarg',
    duration: '3 hours',
    price: '₹3,500/person',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1649794759593-ad80231b7b7c'
  },
  {
    id: 3,
    name: 'River Rafting Adventure',
    location: 'Pahalgam',
    duration: '4 hours',
    price: '₹4,000/person',
    rating: 4.7,
    image: 'https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92'
  }
];

export default function Bookings() {
  const [activeTab, setActiveTab] = useState('accommodations');

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[30vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1590689080414-acf9e4f41d0d"
          alt="Bookings"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Book Your Kashmir Experience
          </h1>
        </div>
      </div>

      {/* Booking Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('accommodations')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'accommodations'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Hotel className="w-5 h-5" />
            <span>Accommodations</span>
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'activities'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span>Activities</span>
          </button>
        </div>

        {/* Accommodations */}
        {activeTab === 'accommodations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <div
                key={accommodation.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-semibold">
                    {accommodation.rating} ★
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{accommodation.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{accommodation.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <Hotel className="w-4 h-4" />
                    <span>{accommodation.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-indigo-600">
                      {accommodation.price}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Activities */}
        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-semibold">
                    {activity.rating} ★
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-indigo-600">
                      {activity.price}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}