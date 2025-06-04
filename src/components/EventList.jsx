import React from 'react';
import EventCard from './EventCard';
import { CalendarX } from 'lucide-react';

const EventList = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl shadow-sm">
        <CalendarX className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-medium text-gray-700 mb-2">No events found</h3>
        <p className="text-gray-500">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
      {events.map(event => (
        <div 
          key={event.id} 
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${0.1 * event.id}s`, animationFillMode: 'forwards' }}
        >
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;