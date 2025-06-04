import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full px-6 py-4 bg-white/5 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 pr-32"
        placeholder="Search events..."
        aria-label="Search events"
        value={searchTerm}
        onChange={handleChange}
      />
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all duration-300 group-hover:bg-white/20 flex items-center gap-2.5"
      >
        <Search className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
        <span className="text-white text-sm font-medium hidden sm:inline-block transition-opacity duration-300">Search</span>
      </button>
    </div>
  );
};

// X icon component for the clear button
const X = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default SearchBar;