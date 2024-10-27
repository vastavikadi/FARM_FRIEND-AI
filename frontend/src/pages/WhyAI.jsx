import React from 'react';
import cropMonitoringImg from '../assets/crop_monitor.jpg';
import soilAnalysisImg from '../assets/soil_analysis.jpg';
import supplyChainImg from '../assets/supply.jpg';
import roboticsImg from '../assets/robo.jpg';
import weather from '../assets/weather.jpg';
import irrigation from '../assets/Crop-Irrigation.jpg';

const applications = [
  {
    title: 'Crop Monitoring',
    description: 'AI technologies like computer vision can detect diseases in crops early, enabling timely interventions for better yields.',
    img: cropMonitoringImg,
  },
  {
    title: 'Soil Analysis',
    description: 'AI algorithms assess soil health and nutrient levels, offering personalized fertilizer recommendations.',
    img: soilAnalysisImg,
  },
  {
    title: 'Supply Chain Optimization',
    description: 'AI improves agricultural supply chains by forecasting demand and managing logistics for efficient delivery.',
    img: supplyChainImg,
  },
  {
    title: 'Weather Forecasting',
    description: 'AI analyzes historical weather data and satellite imagery to provide accurate forecasts, aiding in informed farming decisions.',
    img: weather,
  },
  {
    title: 'Smart Irrigation Systems',
    description: 'AI-driven irrigation systems optimize schedules based on moisture levels and forecasts, conserving water while boosting crop yield.',
    img: irrigation,
  },
  {
    title: 'Robotics and Automation',
    description: 'AI-powered robotics can automate tasks like planting and harvesting, enhancing precision and reducing labor costs.',
    img: roboticsImg,
  },
];

const WhyAI = () => {
  return (
    <div>
      <div className="p-14 max-w-7xl mx-auto mt-12 bg-blue-100">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4 text-center">🌿 Why AI in Agriculture? 🌿</h2>
        <p className="text-lg text-blue-700 font-extrabold mb-3 mt-7">
          Artificial Intelligence (AI) is transforming agriculture, empowering farmers and agronomists to make data-driven decisions that enhance productivity and sustainability. The integration of AI technologies is shifting traditional farming into smart practices, ensuring food security while minimizing environmental impact.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-semibold text-blue-600 mt-6 mb-4">Key Benefits of AI in Agriculture</h3>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>Precision Agriculture: Monitor crop health and soil conditions more accurately, optimizing inputs for better yields.</li>
            <li>Predictive Analytics: Forecast crop yields, pest outbreaks, and weather patterns to plan planting and harvesting schedules effectively.</li>
            <li>Automated Farming: AI machinery, like autonomous tractors and drones, perform tasks with minimal human intervention, improving efficiency.</li>
            <li>Data-Driven Decision Making: Analyze vast agricultural data to identify trends, enabling informed decision-making based on real-time insights.</li>
            <li>Sustainable Practices: Optimize resource use, promoting environmentally friendly agricultural practices.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-semibold text-blue-700 mt-6 mb-4">AI Applications in Agriculture</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <img src={app.img} alt={app.title} className="h-48 w-full object-cover rounded-t-lg mb-4" />
                <h4 className="text-xl font-semibold text-blue-600">{app.title}</h4>
                <p className="text-gray-700">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-semibold text-blue-700 mt-6 mb-4">Challenges and Considerations</h3>
          <p className="text-lg text-gray-700 mb-4">
            While AI offers numerous benefits, there are challenges to its adoption in agriculture, including:
          </p>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>Cost of Technology: High initial investment for AI technologies can be a barrier for smallholder farmers.</li>
            <li>Data Privacy and Security: Ensuring data security and privacy in AI applications is crucial.</li>
            <li>Training and Education: Farmers need training to effectively utilize AI tools and interpret data.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-semibold text-blue-700 mt-6 mb-4">Future Works in AI and Agriculture</h3>
          <p className="text-lg text-gray-700 mb-4">
            As technology continues to evolve, the future of AI in agriculture looks promising. Here are some anticipated developments:
          </p>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>Integration with IoT: Combining AI with IoT will enable real-time data collection from smart sensors, improving decision-making.</li>
            <li>Enhanced Machine Learning Algorithms: Future AI systems will use advanced algorithms for better predictive analytics.</li>
            <li>Personalized Farming Solutions: AI will provide tailored farming solutions based on specific farm conditions.</li>
            <li>Blockchain for Transparency: Integrating AI with blockchain will ensure transparency in the agricultural supply chain.</li>
            <li>Climate Resilient Strategies: AI can develop strategies to make agriculture resilient to climate change.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-3xl font-semibold text-blue-700 mt-6 mb-4">Conclusion</h3>
          <p className="text-lg text-gray-700 mb-4">
            AI is reshaping the future of agriculture, paving the way for smarter, more sustainable farming practices. As technology advances, AI's potential to enhance productivity, reduce waste, and improve food security is limitless. Embracing AI in agriculture is not just a trend; it's essential for a more sustainable and efficient food production system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyAI;