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

      <HeroSection />
      {/* <Features /> */}
      <AtelierErp/>
      <AtelierHrms/>
      <CourseSection/>
      <SmartFeatures />
      <BlogPost />
      <FAQSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <NewNav/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:name" element={<BlogDetails />} />
        <Route path="/about" element={<AboutPageHero/>} />
        <Route path="/inner-pages/contact" element={<ContactPage/>} />
        <Route path="/features/students" element={<FeaturesHero/>} />
        <Route path="/features/admission" element={<AdmissionPageHero/>} />
        <Route path="/features/hostel" element={<HostelHero/>} />
        <Route path="/features/coe" element={<CoeHero/>} />
        <Route path="/features/lib" element={<LibHero/>} />
        <Route path="/features/alumni" element={<AlumniHero/>} />
        <Route path="/features/office" element={<OfficeHero/>} />
        <Route path="/features/portal" element={<PaymentHero/>} />
        <Route path="/features/rnd" element={<RndHero/>} />
        <Route path="/features/survey" element={<SurveyHero/>} />
      </Routes>
      <FooterSection/>
    </Router>
  );
}

export default App;
