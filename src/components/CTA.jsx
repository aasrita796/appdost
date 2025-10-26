// src/components/CTA.js
import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-dark-navy px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-light-slate mb-6 font-mono">Ready to Start Your Project?</h2>
        <p className="text-slate text-lg mb-8">
          Let's discuss how we can help transform your ideas into reality. We offer cutting-edge technology and expert development to bring your vision to life.
        </p>
        <a href="mailto:contact@appdost.in" className="inline-block bg-teal text-dark-navy font-bold py-4 px-8 rounded transform hover:-translate-y-1 transition-all duration-300">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default CTA;