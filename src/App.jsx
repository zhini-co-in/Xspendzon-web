import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingScreen from './components/landing/LandingScreen';
import FeaturesPage from './components/landing/FeaturesPage';
import AboutPage from './components/landing/AboutPage';
import FAQPage from './components/landing/FAQPage';

export default function App() {
  const handleEmployeeLogin = () => {
    // TODO: route to employee login screen
    console.log('Employee login clicked');
  };

  const handleAdminLogin = () => {
    // TODO: route to admin login screen
    console.log('Admin login clicked');
  };

  const loginProps = {
    onEmployeeLogin: handleEmployeeLogin,
    onAdminLogin: handleAdminLogin,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen {...loginProps} />} />
        <Route path="/features" element={<FeaturesPage {...loginProps} />} />
        <Route path="/about" element={<AboutPage {...loginProps} />} />
        <Route path="/faq" element={<FAQPage {...loginProps} />} />
      </Routes>
    </BrowserRouter>
  );
}
