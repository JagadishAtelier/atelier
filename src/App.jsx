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
import ContactPage from './Components/ContactPage/ContactPage';
import FooterSection from './Components/FooterSection/FooterSection';
import CourseSection from './Components/CourseSection/CourseSection';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import FeaturesHero from './Components/FeaturesPage/FeaturesHero/FeaturesHero';
import AtelierErp from './Components/AtelierErp/AtelierErp';
import AtelierHrms from './Components/AtelierHrms/AtelierHrms';

function HomePage() {
  return (
    <>

      <HeroSection />
      <SmartFeatures />
      <Features />
      <AtelierErp/>
      <AtelierHrms/>
      <CourseSection/>
      <BlogPost />
      <FAQSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:name" element={<BlogDetails />} />
        <Route path="/about" element={<AboutPageHero/>} />
        <Route path="/inner-pages/contact" element={<ContactPage/>} />
        <Route path="/features" element={<FeaturesHero/>} />
      </Routes>
      <FooterSection/>
    </Router>
  );
}

export default App;
