// src/components/DevelopmentProcess.js
import React from 'react';

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We dive deep into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones."
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins."
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms."
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly."
  },
];

const StepCard = ({ number, title, description }) => (
  // Added "group" and "cursor-pointer" to the main container
  <div className="group flex items-start space-x-6 cursor-pointer">
    <div className="flex items-center justify-center text-teal font-mono text-3xl font-bold">
      {number}
    </div>
    {/* Added transition and group-hover classes to the border */}
    <div className="border-l-2 border-slate/50 pl-6 transition-colors duration-300 group-hover:border-teal">
      {/* Added transition and group-hover classes to the title */}
      <h3 className="text-xl font-bold text-light-slate mb-2 font-mono transition-colors duration-300 group-hover:text-teal">{title}</h3>
      <p className="text-slate">{description}</p>
    </div>
  </div>
);

const DevelopmentProcess = () => {
  return (
    <section id="process" className="py-20 bg-dark-navy px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-light-slate mb-16 font-mono">
          Our Proven Development Process
        </h2>
        <div className="space-y-12">
          {processSteps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;