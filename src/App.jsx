import 'modern-css-reset/dist/reset.min.css'; 
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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
import AdmissionPageHero from './Pages/AdmissionPage/AdmissionPageHero/AdmissionPageHero';
import HostelHero from './Pages/HostelPage/HostelHero/HostelHero';
import CoeHero from './Pages/CoePage/CoeHero/CoeHero';
import LibHero from './Pages/LibPage/LibHero/LibHero';
import AlumniHero from './Pages/AlumniPage/AlumniHero/AlumniHero';
import OfficeHero from './Pages/OfficePage/OfficeHero/OfficeHero';
import PaymentHero from './Pages/PaymentPage/PaymentHero/PaymentHero';
import RndHero from './Pages/RndPage/RndHero/RndHero';
import SurveyHero from './Pages/SurveyPage/SurveyHero/SurveyHero';
import NewNav from './Components/NewNav/NewNav';

function HomePage() {
  return (
    <>

      <HeroSection data-aos="fade-up"/>
      {/* <Features /> */}
      <AtelierErp data-aos="zoom-in"/>
      <AtelierHrms data-aos="zoom-in"/>
      <CourseSection data-aos="zoom-in"/>
      <SmartFeatures data-aos="zoom-in"/>
      <BlogPost data-aos="zoom-in"/>
      <FAQSection data-aos="zoom-in"/>
    </>
  );
}

function App() {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      once:true,
      easing:'ease-in-out'
    })
  })
  return (
    <Router>
      <NewNav/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:name" element={<BlogDetails data-aos="zoom-in"/>} />
        <Route path="/about" element={<AboutPageHero data-aos="zoom-in"/>} />
        <Route path="/inner-pages/contact" element={<ContactPage data-aos="zoom-in"/>} />
        <Route path="/features/students" element={<FeaturesHero data-aos="zoom-in"/>} />
        <Route path="/features/admission" element={<AdmissionPageHero data-aos="zoom-in"/>} />
        <Route path="/features/hostel" element={<HostelHero data-aos="zoom-in"/>} />
        <Route path="/features/coe" element={<CoeHero data-aos="zoom-in"/>} />
        <Route path="/features/lib" element={<LibHero data-aos="zoom-in"/>} />
        <Route path="/features/alumni" element={<AlumniHero data-aos="zoom-in"/>} />
        <Route path="/features/office" element={<OfficeHero data-aos="zoom-in"/>} />
        <Route path="/features/portal" element={<PaymentHero data-aos="zoom-in"/>} />
        <Route path="/features/rnd" element={<RndHero data-aos="zoom-in"/>} />
        <Route path="/features/survey" element={<SurveyHero data-aos="zoom-in"/>} />
      </Routes>
      <FooterSection/>
    </Router>
  );
}

export default App;
