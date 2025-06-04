import React, { useState, useEffect } from 'react';
import { Search, Calendar, MapPin, Clock } from 'lucide-react';
import EventList from '../components/EventList';
import LoadingSkeleton from '../components/LoadingSkeleton';

function Events({ events, loading, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  return (
    <main className="flex-grow min-h-screen relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center mix-blend-overlay opacity-5"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl -mt-20 -ml-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gray-500/5 rounded-full blur-3xl -mb-20 -mr-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Events</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find and join the most exciting events happening around you
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-sm group-hover:bg-white/10 transition-all duration-300"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 pr-32"
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all duration-300 group-hover:bg-white/20 flex items-center gap-2.5"
              >
                <Search className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                <span className="text-white text-sm font-medium hidden sm:inline-block transition-opacity duration-300">Search</span>
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <EventList events={events} />
        )}
      </div>
    </main>
  );
}

export default Events;