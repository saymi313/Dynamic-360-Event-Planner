import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import eventsData from './data/events.json';

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setEvents(eventsData);
      setFilteredEvents(eventsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event => 
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [searchTerm, events]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                events={filteredEvents} 
                loading={loading} 
                onSearch={handleSearch} 
              />
            } 
          />
          <Route 
            path="/events" 
            element={
              <Events 
                events={filteredEvents} 
                loading={loading} 
                onSearch={handleSearch} 
              />
            } 
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;