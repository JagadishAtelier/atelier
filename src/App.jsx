import 'modern-css-reset/dist/reset.min.css';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Features from './Components/Features/Features';
import FAQSection from './Components/FAQSection/FAQSection';
import SmartFeatures from './Components/SmartFeatures/SmartFeatures';
import WebflowAnimationFix from './Components/WebflowAnimationFix/WebflowAnimationFix';
function App() {
  return (
    <div>
      <Navbar/>
      <WebflowAnimationFix/>
      <HeroSection/>
      <Features/>
      <FAQSection/>
      <SmartFeatures/>
    </div>
  )
}

export default App
