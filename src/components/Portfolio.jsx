// src/components/Portfolio.js
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  { title: 'BEU Mate - Bihar Engineering', desc: 'An AI-powered study companion for B.Tech students offering personalized learning and career guidance.', tags: ['React Native', 'Node.js', 'AI/ML'], github: '#', link: '#' },
  { title: 'Devskillquest', desc: 'An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects.', tags: ['Next.js', 'TypeScript', 'PostgreSQL'], github: '#', link: '#' },
  { title: 'NooBot - Automation Bot', desc: 'Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.', tags: ['Python', 'Automation', 'AI'], github: '#', link: '#' },
  { title: 'The Weddings Chapter', desc: 'A premium wedding planning platform connecting couples with top vendors, venues, and services.', tags: ['PHP', 'Laravel', 'MySQL'], github: '#', link: '#' },
  { title: 'DeepFake Detection', desc: 'An AI/ML summer internship project for detecting manipulated media using computer vision and neural networks.', tags: ['AI/ML', 'Jupyter', 'Python'], github: '#', link: '#' },
  { title: 'DialogFlow Chatbot', desc: 'Intelligent chatbot using Google\'s DialogFlow ES for natural language processing and automated customer support.', tags: ['DialogFlow', 'NLP', 'Google Cloud'], github: '#', link: '#' },
];

const ProjectCard = ({ title, desc, tags, github, link }) => (
  <div className="group bg-navy p-6 rounded-lg shadow-lg flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-light-slate font-mono transition-colors duration-300 group-hover:text-teal">
          <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        </h3>
        <div className="flex space-x-3 text-slate">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors duration-300"><FiGithub size={20} /></a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors duration-300"><FiExternalLink size={20} /></a>
        </div>
      </div>
      <p className="text-slate mb-4">{desc}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => <span key={tag} className="text-sm font-mono text-teal bg-teal/10 px-2 py-1 rounded">{tag}</span>)}
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-dark-navy px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-light-slate mb-12 font-mono">
          Our Portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;