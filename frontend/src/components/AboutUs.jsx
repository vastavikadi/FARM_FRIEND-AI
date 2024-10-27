import About from "../pages/About";
import aboutus from '../assets/aboutus.png';
import bgHero from "../assets/bgHero.png";
import editor from "../assets/editor.png";
import { Link } from "react-router-dom";
import about from '../assets/abouts.png';
import '../styles/hero.css';

function AboutUs() {
  return (
    <div className="w-full py-16 px-4" style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <br />
      <div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center mt-10">

          <img
            className="w-full md:w-[500px] mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            src={about}
            alt="About Us"
          />

          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text text-5xl font-bold py-1">
              🌾 About FARM-FRIEND AI
            </p>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold py-4 text-blue-800">
              Empowering Farmers with AI-Driven Solutions
            </h1>

            <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-6 h-[200px] my-5">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">🌟 Our Mission</h2>
              <p className="text-md text-[#000435] leading-relaxed">
                We strive to empower farmers with innovative AI solutions that enhance productivity, minimize waste, and foster sustainable agricultural practices.
              </p>
            </div>

            <div className="w-full">
              <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-[200px] my-5">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">🤔 How It Works!</h2>
                <p className="text-md text-[#000435] leading-relaxed">
                  <span>☑️ Access a variety of machine learning models for accurate crop predictions and soil analysis.</span><br />
                  <span>☑️ Utilize the platform to make informed decisions about crop management and pest control.</span><br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid gap-10 items-center">
          <div className="flex flex-col justify-center">
            <p className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text text-4xl font-bold py-1">
              🌾 About Us
            </p>
            <div className="grid md:grid-cols-2">
              <div className="mt-10">
                <p className="text-lg text-[#000435] bg-white">
                  <span> ✅ We empower farmers, agribusinesses, and stakeholders across the agricultural ecosystem with innovative, data-driven solutions that enhance efficiency, reduce waste, and maximize yields.</span><br /><br />
                  <span> ✅ Our commitment to accessibility drives us to collaborate closely with farmers, agronomists, and industry experts to develop practical solutions tailored to the unique needs of the agricultural sector.</span><br /><br />
                  <span> ✅ Whether it's a small family farm or a large commercial operation, FARM-FRIEND AI delivers scalable, adaptable technology that helps businesses thrive in an ever-evolving landscape.</span><br /><br />
                </p>
              </div>
              <img className="w-full md:w-[500px] mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white" src={aboutus} alt="About Us" />
            </div>

            <p className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text text-4xl font-bold py-1">
              Our Mission
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-5">
              <div className="col-4 md:order-last">
                <p className="text-lg text-[#000435] bg-white">
                  <span>At FARM-FRIEND AI, we are on a mission to revolutionize agriculture through cutting-edge artificial intelligence technologies. Our goal is to develop AI-driven solutions that empower farmers and agribusinesses to optimize productivity, enhance sustainability, and address global food security challenges.</span><br />
                  <span>By harnessing the power of AI, we envision a future where agriculture is not only efficient but also resilient to climate change and food insecurity. Through collaboration, innovation, and a deep commitment to the farming community, FARM-FRIEND AI is dedicated to building a sustainable and prosperous agricultural future for all.</span><br />
                </p>
              </div>
              <img className="w-full md:w-[500px] mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white" src={editor} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;