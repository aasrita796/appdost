// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    // Add id="home" here
    <section id="home" className="min-h-screen flex items-center bg-dark-navy px-8">
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-lg text-teal font-mono mb-4">Hi, we are AppDost. We build</h1>
        {/* ... rest of the file is unchanged */}
        <h2 className="text-5xl md:text-7xl font-bold text-light-slate mb-4 font-mono">
          Things for the Web.
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-slate mb-8 font-mono">
          We turn ideas into reality.
        </h3>
        <p className="text-lg text-slate max-w-xl mb-8">
          We are a software development team specializing in building exceptional digital experiences. We bring innovation and excellence to every project with our expert team of developers.
        </p>
        <div>
          <a href="#portfolio" className="inline-block bg-transparent border border-teal text-teal font-semibold py-3 px-8 rounded transform hover:-translate-y-1 transition-all duration-300">
            Check out our work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;