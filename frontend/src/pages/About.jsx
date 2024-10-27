import { Link } from "react-router-dom";
import about from '../assets/abouts.png';

function About() {
  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        <img 
          className="w-full md:w-[500px] mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
          src={about} 
          alt="About Us" 
        />

        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text text-5xl font-bold py-1">
            🌾 About FARM-FRIEND AI
          </p>

          <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-6 h-[200px] my-5">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">🌟 Our Mission</h2>
            <p className="text-md text-[#000435] leading-relaxed">
              Our mission is to empower farmers with innovative, AI-driven solutions that enhance productivity, minimize waste, and foster sustainable farming practices.
            </p>
          </div>

          <div className="w-full">
            <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-[200px] mt-2">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">🤔 How It Works!</h2>
              <p className="text-md text-[#000435] leading-relaxed">
                <span>☑️ Access advanced machine learning models for accurate crop predictions and soil analysis.</span><br />
                <span>☑️ Utilize our platform to make informed decisions on crop management and pest control.</span><br />
              </p>
            </div>
          </div>

          <Link
            to="/products"
            className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white py-3 px-6 rounded-md shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg w-[180px] text-center font-medium my-6 mx-auto md:mx-0"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;