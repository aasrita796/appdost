// src/components/Careers.js
import React from 'react';

const openPositions = [
  { title: "Senior Frontend Developer", location: "Remote", link: "#" },
  { title: "Backend Engineer (Python/Node.js)", location: "Patna, IN", link: "#" },
  { title: "UI/UX Designer", location: "Remote", link: "#" },
  { title: "DevOps Engineer", location: "Patna, IN", link: "#" },
];

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-dark-navy px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-4 font-mono">
          Join Our Team
        </h2>
        <p className="text-slate text-lg mb-10 max-w-2xl mx-auto">
          We are always looking for passionate and talented individuals to join our mission. Explore our open positions below and help us build the future of technology.
        </p>
        <div className="text-left bg-navy p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-light-slate mb-6 font-mono">Open Positions</h3>
          <div className="space-y-4">
            {openPositions.map((job, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between items-center p-4 border border-slate/30 rounded-lg hover:border-teal/50 transition-colors duration-300">
                <div>
                  <h4 className="text-lg font-bold text-light-slate">{job.title}</h4>
                  <p className="text-slate">{job.location}</p>
                </div>
                <a href={job.link} className="mt-4 md:mt-0 bg-teal text-dark-navy font-bold py-2 px-6 rounded hover:opacity-90 transition-opacity duration-300">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;