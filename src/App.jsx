// src/App.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import DevelopmentProcess from './components/DevelopmentProcess';
import Careers from './components/Careers';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-navy font-sans">
      <Navbar />
      <main className="container mx-auto">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <DevelopmentProcess />
        <Careers />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;