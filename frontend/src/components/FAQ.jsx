import React, { useState } from "react";
import { BiChevronUp } from 'react-icons/bi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqCount, setFaqCount] = useState(5);

  const faqs = [
    {
      question: "What is FARM-FRIEND AI?",
      answer: "FARM-FRIEND AI is a platform that harnesses advanced technologies like AI and machine learning to assist farmers in optimizing crop yields, managing resources, and making informed decisions."
    },
    {
      question: "How can drones enhance farming practices?",
      answer: "Drones are utilized for precision spraying, aerial mapping, crop health monitoring, and soil assessment. They provide valuable insights into crop conditions, enabling early pest detection and efficient resource management."
    },
    {
      question: "What data is essential for soil analysis?",
      answer: "Essential data for soil analysis includes nitrogen, phosphorus, potassium levels, pH value, moisture content, and organic carbon levels. This information aids in evaluating soil quality and selecting suitable crops."
    },
    {
      question: "Can FARM-FRIEND AI provide crop recommendations?",
      answer: "Yes, FARM-FRIEND AI can suggest crops based on soil analysis, climate conditions, and historical crop performance, helping farmers make optimal planting decisions."
    },
    {
      question: "Is training available for using the technology?",
      answer: "Absolutely! FARM-FRIEND AI offers tutorials and resources to guide farmers in using drones, precision agriculture tools, and AI applications for improved farm management."
    },
    {
      question: "Does FARM-FRIEND AI provide weather forecasts?",
      answer: "Yes, the platform offers real-time weather updates and forecasts, helping farmers plan activities like sowing, irrigation, and harvesting effectively."
    },
    {
      question: "How is data security ensured on FARM-FRIEND AI?",
      answer: "Data security is paramount. FARM-FRIEND AI employs encryption and secure servers to protect all data, including farm information and user details."
    },
    {
      question: "What crops are suitable for my soil?",
      answer: "FARM-FRIEND AI analyzes soil data to recommend crops that align with the soil's nutrient profile and local climate, maximizing harvest potential."
    },
    {
      question: "How do I get started with FARM-FRIEND AI?",
      answer: "To begin, sign up on the platform, input your farm's location and soil data, and explore the tools available for crop recommendations, drone services, and equipment rentals."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const loadMoreFAQs = () => {
    setFaqCount(prevCount => Math.min(prevCount + 3, faqs.length));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-blue-600 text-center">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-4">
          {faqs.slice(0, faqCount).map((faq, index) => (
            <div key={index} className="transition-transform duration-300 group">
              <div className="rounded-lg border-2 border-blue-200 bg-white shadow hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full p-4 text-lg font-medium text-blue-700 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-white transition-all duration-300 hover:bg-gradient-to-l"
                >
                  <span>{faq.question}</span>
                  <BiChevronUp className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeIndex === index && (
                <div className="mt-2 p-2 rounded-lg bg-blue-50 text-blue-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </dl>
        {faqCount < faqs.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreFAQs}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-blue-700"
            >
              Load More FAQs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;