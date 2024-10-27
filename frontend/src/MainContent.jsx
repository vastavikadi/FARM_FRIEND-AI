import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Crop from './components/models/CropRecommendation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Fertilizer from './components/models/Fertilizer';
import SoilQuality from './components/models/SoilQuality';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import NotFound from './NotFound';
import AboutUs from "./components/AboutUs";
import UseScrollToTop from './components/UseScrollToTop';
import Article from './pages/Article';
import ChatBot from './pages/ChatBot';
import DiseaseRecognition from './pages/Disease/DiseaseRecognition';
import Preloader from "./components/PreLoader";
import ProgressScrollDown from "./components/ProgressScrollDown";
import React, { useState, useEffect } from "react";
import Climate from './components/help/Climate';
import Products from "./pages/Products";
import AuthPage from './components/AuthPage';
import WhyAI from './pages/WhyAI';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { AuthProvider } from './context/AuthContext';
import TermsAndConditions from './components/TermsAndConditions';
import CookiePolicy from './components/CookiePolicy';
import PlantTaskReminder from './components/tools/PlantTaskReminder';
import PrivacyPolicy from './components/PrivacyPolicy';
import SoilTestingCentres from './components/SoilTestingCenters';
import NewsForum from './components/NewsForum';
import BestPractices from './pages/BestPractices';
import Profile from './pages/Profile';

const MainContent = () => {
  UseScrollToTop();
  const location = useLocation();
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const normalizePath = (path) => path.toLowerCase().replace(/^\/+|\/+$/g, '');
  const hideNavbarRoutes = ['navigateproducts', '404'];
  const agroShopRoute = 'agroshop';
  const normalizedPath = normalizePath(location.pathname);
  const hideNavbar = hideNavbarRoutes.includes(normalizedPath) || normalizedPath.startsWith(agroShopRoute);
  const checkShop = normalizedPath.startsWith(agroShopRoute);
  return (
    <>
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <div>
          <AuthProvider>
            <GoTop />
            <ProgressScrollDown />
            <div>
              {!hideNavbar && <Navbar />}
              <Routes>
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/" element={<Home />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/crop" element={<Crop />} />
                <Route path="/fertilizer" element={<Fertilizer />} />
                <Route path="/soil" element={<SoilQuality />} />

                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/article" element={<Article />} />
                <Route path="/soiltestingcentres" element={<SoilTestingCentres />} />
             
                <Route path="/DiseaseRecognition" element={<DiseaseRecognition />} />
                <Route path="/PlantTaskReminder" element={<PlantTaskReminder />} />
                <Route path="/profile" element={<Profile/>} />
              

                <Route path="/Climate" element={<Climate />} />

                <Route path="/products" element={<Products />} />
                <Route path="/Auth-page" element={<AuthPage />} />
                <Route path="/whyai" element={<WhyAI />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/news" element={<NewsForum />} />
                <Route path="/BestPractices" element={<BestPractices/>} />
                <Route path="/*" element={<NotFound/>} />
              </Routes>
              <Footer/>
            </div>
          </AuthProvider>
        </div>
      )}
    </>
  );
};

export default MainContent;
