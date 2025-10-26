// src/components/Footer.js
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub size={20} />, link: '#' },
  { icon: <FiLinkedin size={20} />, link: '#' },
  { icon: <FiTwitter size={20} />, link: '#' },
  { icon: <FiInstagram size={20} />, link: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-dark-navy text-slate border-t border-slate/20">
      <div className="max-w-7xl mx-auto py-16 px-8">
        {/* Main grid for footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-1">
            <a href="#hero" className="text-teal text-3xl font-mono font-bold mb-4 inline-block">AppDost.</a>
            <p className="text-slate mb-6 pr-4">
              Delivering innovative IT solutions since 2025. We transform ideas into digital reality with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="text-slate hover:text-teal transform hover:-translate-y-1 transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-mono text-light-slate mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-teal transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-teal transition-colors duration-300">Services</a></li>
              <li><a href="#projects" className="hover:text-teal transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-teal transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-bold font-mono text-light-slate mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-teal transition-colors duration-300">Web Development</a></li>
              <li><a href="#services" className="hover:text-teal transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-teal transition-colors duration-300">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-teal transition-colors duration-300">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-mono text-light-slate mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMail className="text-teal mt-1" />
                <a href="mailto:contact@appdost.in" className="hover:text-teal transition-colors duration-300">contact@appdost.in</a>
              </li>
              <li className="flex items-start space-x-3">
                <FiPhone className="text-teal mt-1" />
                <a href="tel:+911169290750" className="hover:text-teal transition-colors duration-300">+91 11 6929 0750</a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-teal mt-1 flex-shrink-0" />
                <span>HQ-Patna, Motihari, Banka</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AppDost - Complete IT Solution. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;