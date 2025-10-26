// src/components/TechStack.jsx
import React from 'react';

const technologies = ['React', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Docker', 'Kotlin', 'TypeScript'];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-dark-navy px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-8">
          <span className="text-teal font-mono mr-2">04.</span> Technologies We Master
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map(tech => (
            <div key={tech} className="bg-navy text-light-slate text-lg font-medium px-5 py-2 rounded-md">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;