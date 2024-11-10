import React, { useState } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Firasti
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/destinations" className="text-gray-700 hover:text-gray-900">Destinations</Link>
            <Link to="/planner" className="text-gray-700 hover:text-gray-900">Trip Planner</Link>
            <Link to="/bookings" className="text-gray-700 hover:text-gray-900">Bookings</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-gray-900 flex items-center space-x-1"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 flex items-center space-x-1"
            >
              <User className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/destinations" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Destinations</Link>
            <Link to="/planner" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Trip Planner</Link>
            <Link to="/bookings" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Bookings</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Login</Link>
            <Link to="/signup" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Sign Up</Link>
          </div>
        </div>
      )}
    </header >
  );
}