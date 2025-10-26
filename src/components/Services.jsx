// src/components/Services.js
import React from 'react';
import { FaCode, FaPaintBrush, FaBullhorn, FaCloud, FaShieldAlt, FaRocket } from 'react-icons/fa';

const servicesData = [
  { icon: <FaCode />, title: 'Custom Software', desc: 'Building robust, scalable enterprise solutions tailored to your unique business needs.' },
  { icon: <FaPaintBrush />, title: 'UI/UX Design', desc: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction.' },
  { icon: <FaRocket />, title: 'Web Development', desc: 'Creating responsive, high-performance web applications using the latest frameworks.' },
  { icon: <FaCloud />, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration services for modern businesses.' },
  { icon: <FaShieldAlt />, title: 'Cybersecurity', desc: 'Protecting your business with robust security solutions and best practices.' },
  { icon: <FaBullhorn />, title: 'Digital Consulting', desc: 'Strategic guidance to help businesses navigate their digital journey, from legacy to modern.' },
];

const ServiceCard = ({ icon, title, desc }) => (
  <div className="group bg-navy p-6 rounded-lg shadow-lg border border-transparent hover:border-teal/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
    <div className="text-4xl text-teal mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-light-slate mb-2 font-mono transition-colors duration-300 group-hover:text-teal">{title}</h3>
    <p className="text-slate">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-navy px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-light-slate mb-12 font-mono">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;