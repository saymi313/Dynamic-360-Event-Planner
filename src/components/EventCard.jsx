import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const EventCard = ({ event }) => {
  // Format date
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  // Format time
  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div className="group relative h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
          <h3 className="text-xl font-semibold text-white line-clamp-2 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {event.name}
          </h3>
          <div className="flex items-center text-white/90 text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
            <span>{formatDate(event.date)}</span>
            <Clock className="h-4 w-4 ml-4 mr-2" aria-hidden="true" />
            <span>{formatTime(event.date)}</span>
          </div>
        </div>
      </div>
      
      {/* Event Details */}
      <div className="p-6 flex-grow flex flex-col bg-white">
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 text-black mr-2" aria-hidden="true" />
          <span className="text-sm">{event.location}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
          {event.description}
        </p>
        
        {/* Button */}
        <button className="btn btn-primary group/btn flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200">
          Register Now
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-400 to-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 border-2 border-black/0 group-hover:border-black/10 rounded-xl transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default EventCard;