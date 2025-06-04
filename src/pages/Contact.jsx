import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  return (
    <main className="flex-grow bg-black min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl -mt-20 -mr-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-500/5 rounded-full blur-3xl -mb-10 -ml-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Connect</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have questions or want to plan your next event? We're here to help make your vision a reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                    <p className="text-gray-300">Gulberg Green, Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone Number</h3>
                    <p className="text-gray-300">+92 300 1234567</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Address</h3>
                    <a href="mailto:info@dynamic360events.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                      info@dynamic360events.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200"
                      placeholder="Usairam Saeed"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200"
                      placeholder="saeed.usairam@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;