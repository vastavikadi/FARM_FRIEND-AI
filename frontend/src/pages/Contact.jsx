import React, { useState } from 'react';
import bgHero from "../assets/bgHero.png";
import { FaGithub, FaDiscord, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import SlightFlip from '../components/ui/flip-text';
import "../styles/Contact.css";
const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer AI assistance to our Farmer-Heroes, including weather data, soil analysis and many more.",
    },
    {
      question: "How can I get support?",
      answer: "You can reach out via our contact form or email us directly.",
    },
    {
      question: "Where are you located?",
      answer: "We'll build this soon.",
    },
    {
      question: "What industries do you serve?",
      answer: "FARM-FRIEND AI primarily serves the agricultural industry, helping farmers and researchers make data-driven decisions.",
    },
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const socialMedia = [
    { Icon: FaGithub, link: 'https://github.com/vastavikadi/HACKATHON-1', color: '#333' },
    { Icon: FaDiscord, link: 'https://discord.com/channels/vastavikadi', color: '#7289DA' },
    { Icon: FaXTwitter, link: 'https://twitter.com/vastavikadi', color: '#1DA1F2' },
    { Icon: FaLinkedin, link: 'https://www.linkedin.com/in/vastavikadi', color: '#0077B5' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]{3,}$/.test(name)) {
      validationErrors.name = 'Name must contain at least 3 letters';
    }

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!subject.trim()) {
      validationErrors.subject = 'Subject is required';
    } else if (!/^[a-zA-Z\s]{3,}$/.test(subject)) {
      validationErrors.subject = 'Subject must contain at least 3 letters';
    }

    if (!message.trim()) {
      validationErrors.message = 'Message is required';
    } else if (message.length < 10) {
      validationErrors.message = 'Message must be at least 10 characters long';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = {
      name,
      email,
      subject,
      message,
    };

    setLoading(true);

    try {
      const response = await fetch('https://backend-ffai.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage(data.message);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => {
          setResponseMessage('');
        }, 9000);
      } else {
        setError(data.message || 'Failed to submit form');
        setTimeout(() => {
          setError('');
        }, 9000);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('There was an error sending your message.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      className="max-w-full mt-16 mx-auto px-4 pb-10 pt-5 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-5xl font-bold text-center text-blue-500 mb-2">Contact Us</h2>

      <div className="w-full max-w-5xl p-5 shadow-md rounded-lg mx-auto my-10 dark:bg-gray-200 border border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col p-5 dark:text-white">
            <h1 className="text-left text-3xl md:text-4xl mb-2  text-blue-500" style={{ fontSize: '2.4rem', fontWeight: 600, fontFamily: "Georgia, serif" }}>
              Let's connect!
            </h1>
            <p className="mb-5 text-blue-500 smalltitlefont">We are here for you. How can we help?</p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="formlevel">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-400'} rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white`}
                  placeholder="Enter your Name"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="formlevel">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white`}
                  placeholder="Your Email?"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="formlevel">Subject:</label>
                <input
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  rows="5"
                  className={`w-full p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-400'} rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white`}
                  placeholder="Enter your topic"
                  required
                ></input>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="formlevel">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-400'} rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white`}
                  placeholder="Go ahead! We are listening..."
                  required
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex justify-center">
                <button type="submit" className="p-2 bg-blue-600 text-white rounded-md self-start hover:bg-blue-600 " disabled={loading}>
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>

            {responseMessage && <p className="text-blue-500 text-center mt-4" style={{ fontSize: "1.4rem" }}>{responseMessage}</p>}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </div>

          <div className="flex flex-col items-center p-5">
            <div className="flex justify-center items-center mt-60">
              <SlightFlip
                className="text-2xl font-bold text-transparent bg-blue-700 bg-clip-text dark:text-transparent md:text-5xl md:leading-[5rem]"
                word="FARM-FRIEND AI"
              />
            </div>
          </div>



        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">FAQs</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-gray-300">
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center cursor-pointer p-4 bg-blue-100 hover:bg-blue-200 rounded-md"
                >
                  <h4 className="text-lg font-semibold text-blue-700">{faq.question}</h4>
                  <span className="text-blue-600">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="p-4 text-gray-600 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl bg-blue-600 text-transparent bg-clip-text font-bold text-gray-800 mb-4">Our Location</h3>
          <p>VGU, JAIPUR, RAJASTHAN</p>
          <div className="h-64 w-full mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.861013681546!2d75.88890247529125!3d26.812553776706952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9a64b8d1d6f%3A0xa9df73ee30cd976f!2sVGU%20Campus!5e0!3m2!1sen!2sin!4v1729770513173!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="FARM-FRIEND-AI Company Location"
            />


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
