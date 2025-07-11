import 'modern-css-reset/dist/reset.min.css'; 
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Features from './Components/Features/Features';
import FAQSection from './Components/FAQSection/FAQSection';
import SmartFeatures from './Components/SmartFeatures/SmartFeatures';
import BlogPost from './Components/BlogPost/BlogPost';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import AboutPageHero from './Components/AboutPage/AboutPageHero/AboutPageHero';

function HomePage() {
  return (
    <>

      <HeroSection />
      <SmartFeatures />
      <Features />
      <FAQSection />
      <BlogPost />
    </>
  );
}

function App() {
  return (
    <Router>
            <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:name" element={<BlogDetails />} />
        <Route path="/about" element={<AboutPageHero/>} />
      </Routes>
    </Router>
  );
}

export default App;
