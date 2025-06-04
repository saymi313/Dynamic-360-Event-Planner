import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-white mr-3" aria-hidden="true" />
              <h3 className="text-2xl font-bold">Dynamic 360</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover and attend the best events happening around you. From concerts to workshops, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} href="#" ariaLabel="Facebook" />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} href="#" ariaLabel="Twitter" />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} href="#" ariaLabel="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-3">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/events">All Events</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-3">Event Categories</h3>
            <ul className="space-y-3">
              <FooterLink to="/category/music">Music & Concerts</FooterLink>
              <FooterLink to="/category/tech">Technology</FooterLink>
              <FooterLink to="/category/food">Food & Drink</FooterLink>
              <FooterLink to="/category/sports">Sports & Fitness</FooterLink>
              <FooterLink to="/category/arts">Arts & Culture</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span>Gulberg Green, Islamabad, Pakistan</span>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>+92 300 1234567</span>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>info@dynamic360events.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Dynamic 360 Events. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              Developed by{" "}
              <a 
                href="https://usairam-saeed.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-semibold hover:from-gray-300 hover:to-white transition-all duration-300"
              >
                Usairam Saeed
              </a>
              <span className="text-gray-500 ml-1">&lt;/&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to}
      className="text-gray-400 hover:text-white transition-colors duration-200 block"
    >
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon, href, ariaLabel }) => (
  <a
    href={href}
    className="bg-gray-800 hover:bg-white hover:text-black p-2 rounded-full transition-all duration-200"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

export default Footer;