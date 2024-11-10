import React from 'react';
import { Sun, Snowflake, Cloud, Flower } from 'lucide-react';

const seasons = [
  {
    name: 'Summer (Jun-Aug)',
    icon: Sun,
    activities: ['Trekking', 'Camping', 'Shikara Rides'],
    color: 'text-yellow-500'
  },
  {
    name: 'Winter (Dec-Feb)',
    icon: Snowflake,
    activities: ['Skiing', 'Snowboarding', 'Snow Festival'],
    color: 'text-blue-500'
  },
  {
    name: 'Monsoon (Sep-Nov)',
    icon: Cloud,
    activities: ['Photography', 'Cultural Tours', 'Shopping'],
    color: 'text-gray-500'
  },
  {
    name: 'Spring (Mar-May)',
    icon: Flower,
    activities: ['Tulip Garden', 'Hiking', 'Sightseeing'],
    color: 'text-pink-500'
  }
];

export default function SeasonalHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Best Time to Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {seasons.map((season) => {
            const Icon = season.icon;
            return (
              <div
                key={season.name}
                className="bg-gray-50 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`${season.color} mb-4`}>
                  <Icon className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  {season.name}
                </h3>
                <ul className="space-y-2">
                  {season.activities.map((activity) => (
                    <li
                      key={activity}
                      className="text-gray-600 text-center"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}