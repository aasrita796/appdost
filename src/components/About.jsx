// src/components/About.js
import React from 'react';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-navy px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-4 font-mono">
          Who We Are
        </h2>
        <p className="text-slate text-lg mb-12 max-w-2xl mx-auto">
          AppDost is a dynamic, innovation-driven IT solutions provider. We specialize in turning visionary ideas into powerful, market-ready products that empower businesses and create lasting digital impact.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Mission Card */}
          <div className="group bg-navy p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <FiTarget size={30} className="text-teal mb-4" />
            <h3 className="text-xl font-bold text-light-slate mb-2 font-mono transition-colors duration-300 group-hover:text-teal">Our Mission</h3>
            <p className="text-slate">To craft exceptional digital experiences that drive growth, enhance user engagement, and deliver tangible results for our clients.</p>
          </div>
          {/* Vision Card */}
          <div className="group bg-navy p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <FiEye size={30} className="text-teal mb-4" />
            <h3 className="text-xl font-bold text-light-slate mb-2 font-mono transition-colors duration-300 group-hover:text-teal">Our Vision</h3>
            <p className="text-slate">To be a leading partner in digital transformation, recognized for our innovation, commitment to quality, and client-centric approach.</p>
          </div>
          {/* Values Card */}
          <div className="group bg-navy p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <FiHeart size={30} className="text-teal mb-4" />
            <h3 className="text-xl font-bold text-light-slate mb-2 font-mono transition-colors duration-300 group-hover:text-teal">Our Values</h3>
            <p className="text-slate">Integrity, Collaboration, Innovation, and a relentless pursuit of Excellence guide everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;