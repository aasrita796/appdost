// src/components/Blog.js
import React from 'react';

const blogPosts = [
  { category: "Design", title: "The 5 UI/UX Trends to Watch in 2026", link: "#" },
  { category: "Development", title: "Why We Chose React Native for Our Mobile Apps", link: "#" },
  { category: "Cloud", title: "Scaling Your Application with AWS: A Primer", link: "#" },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-dark-navy px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-light-slate mb-12 font-mono">
          Insights & Tech Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a href={post.link} key={index} className="group block bg-navy p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <p className="text-sm font-mono text-teal mb-2">{post.category}</p>
              <h3 className="text-xl font-bold text-light-slate transition-colors duration-300 group-hover:text-teal">{post.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;