import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/HEROIMAG.jpg';
import Features from '../components/Features';
import About from './About';
import Showcase from '../components/Showcase';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQ from '../components/FAQ';
import { FaComment } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdvantagesDisadvantages from '../components/AdvDis';
import "../styles/ChatbotButton.css";
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatBotAuthentication = () => {
    if (isLoggedIn) {
      navigate('/chatbot');
    } else {
      const redirectTime = 3000;
      toast.warn(`You need to login before using the ChatBot! Redirecting to login page in 3 seconds...`);

      setTimeout(() => {
        navigate('/login');
      }, redirectTime);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-green-50 to-green-100">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        className="mt-16"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-4 md:py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl md:text-6xl pt-48">
            <span className="block text-blue-700">Welcome to FARM-FRIEND AI</span>
            <span className="block text-blue-500">Unlock the Future of Farming with Our AI-Powered Solutions!</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-blue-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your agricultural practices and maximize your yield with our cutting-edge tools designed specifically for modern farmers.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md shadow"
            >
              <Link
                to="/"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
              >
                Dive in &#8594;
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <div className="relative">
          <button
            onClick={handleChatBotAuthentication}
            className="group fixed bottom-4 right-20 bg-green-500 rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 animate-swing"
          >
            <FaComment className="text-white text-3xl" />
            <span className="absolute -top-10 -right-4 bg-white text-green-500 text-sm rounded-md px-4 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blink-text">
              Need Help? ChatBot Here!
            </span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <img
            src={heroImage}
            alt="FARM-FRIEND AI Hero"
            width={500}
            height={400}
            className="object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-blue-700 text-center">Steps It Follows</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-green-100 to-green-200 p-6 rounded-lg text-center z-10 shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-green-700">Step 1: Data Storage</h3>
              <p className="mt-4 text-green-600">
                We gather real-time data on soil conditions, weather, and crop health using cutting-edge technology and AI.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-green-100 to-green-200 p-6 rounded-lg text-center z-10 shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-green-700">Step 2: Data Analysis</h3>
              <p className="mt-4 text-green-600">
                Our AI models analyze the data to provide actionable insights on crop growth and health.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-green-100 to-green-200 p-6 rounded-lg text-center z-10 shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-green-700">Step 3: Optimization</h3>
              <p className="mt-4 text-green-600">
                Based on the analysis, AI recommends the best practices to improve crop yield and promote sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      <Features />
      <About />
      <Showcase />
      <AdvantagesDisadvantages />
      <TestimonialSlider />
      <FAQ />
    </div>
  );
}
