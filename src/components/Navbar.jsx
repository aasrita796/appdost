// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  // Updated list of navigation items
  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Careers', 'Blog', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark-navy/80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-teal text-2xl font-mono font-bold">AppDost.</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                // Removed the number span and updated the list
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-light-slate hover:text-teal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;