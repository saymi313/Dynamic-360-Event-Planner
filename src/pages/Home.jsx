import React from 'react';
import Hero from '../components/Hero';
import EventList from '../components/EventList';
import SearchBar from '../components/SearchBar';
import LoadingSkeleton from '../components/LoadingSkeleton';

function Home({ events, loading, onSearch }) {
  return (
    <>
      <Hero />
      <main className="flex-grow relative bg-black overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center mix-blend-overlay opacity-5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl -mt-20 -ml-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gray-500/5 rounded-full blur-3xl -mb-20 -mr-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <section className="relative container mx-auto px-4 py-16 max-w-[100vw]" id="events">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Events</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover and join the most exciting events happening around you
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-sm group-hover:bg-white/10 transition-all duration-300"></div>
              <div className="relative">
                <SearchBar onSearch={onSearch} />
              </div>
            </div>
          </div>
          
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <EventList events={events} />
          )}
        </section>
      </main>
    </>
  );
}

export default Home;