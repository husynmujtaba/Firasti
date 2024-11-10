import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface TripDetails {
  destination: string;
  startDate: string;
  duration: string;
  travelers: string;
  activities: string[];
}

const availableActivities = {
  srinagar: ['Shikara Ride', 'Mughal Gardens Tour', 'Old City Walk', 'Local Food Tour'],
  gulmarg: ['Skiing', 'Gondola Ride', 'Mountain Biking', 'Snow Photography'],
  pahalgam: ['River Rafting', 'Trekking', 'Golf', 'Horse Riding'],
  sonamarg: ['Glacier Trek', 'Pony Ride', 'Photography Tour', 'Camping']
};

export default function TripPlanner() {
  const [step, setStep] = useState(1);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    destination: '',
    startDate: '',
    duration: '',
    travelers: '',
    activities: []
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle trip planning submission
    console.log('Trip Details:', tripDetails);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[30vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1590689080414-acf9e4f41d0d"
          alt="Trip Planner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Plan Your Perfect Kashmir Trip
          </h1>
        </div>
      </div>

      {/* Planner Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((number) => (
              <div
                key={number}
                className={`flex items-center ${
                  number < step ? 'text-indigo-600' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    number <= step
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-gray-300 text-gray-400'
                  }`}
                >
                  {number}
                </div>
                {number < 3 && (
                  <div
                    className={`w-full h-1 ${
                      number < step ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Destination
                  </label>
                  <select
                    value={tripDetails.destination}
                    onChange={(e) =>
                      setTripDetails({ ...tripDetails, destination: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Choose a destination</option>
                    <option value="srinagar">Srinagar</option>
                    <option value="gulmarg">Gulmarg</option>
                    <option value="pahalgam">Pahalgam</option>
                    <option value="sonamarg">Sonamarg</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={tripDetails.startDate}
                    onChange={(e) =>
                      setTripDetails({ ...tripDetails, startDate: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Duration
                  </label>
                  <select
                    value={tripDetails.duration}
                    onChange={(e) =>
                      setTripDetails({ ...tripDetails, duration: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select duration</option>
                    <option value="2-3">2-3 days</option>
                    <option value="4-5">4-5 days</option>
                    <option value="6-7">6-7 days</option>
                    <option value="8+">8+ days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={tripDetails.travelers}
                    onChange={(e) =>
                      setTripDetails({ ...tripDetails, travelers: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Activities
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {availableActivities[tripDetails.destination as keyof typeof availableActivities]?.map((activity) => (
                      <label
                        key={activity}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={tripDetails.activities.includes(activity)}
                          onChange={(e) => {
                            const newActivities = e.target.checked
                              ? [...tripDetails.activities, activity]
                              : tripDetails.activities.filter((a) => a !== activity);
                            setTripDetails({ ...tripDetails, activities: newActivities });
                          }}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-700">{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors ml-auto"
                >
                  Plan My Trip
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}