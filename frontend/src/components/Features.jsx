import { RiTailwindCssFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import { BiSolidCustomize } from "react-icons/bi";
import { FaLaptopFile } from "react-icons/fa6";

const featureData = [
  {
    icon: <RiTailwindCssFill size={23} />,
    title: "🌟 Responsive Design",
    description: "Experience farming like never before! Our platform is fully responsive, ensuring a seamless journey across any device. Whether you're on the go with your smartphone, checking on your crops from a tablet, or diving deep on a desktop, we've got you covered.",
    gradient: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    icon: <MdLeaderboard size={23} />,
    title: "📊 Comprehensive Models",
    description: "Empower your farming decisions with precision! FARM-FRIEND AI offers a suite of cutting-edge machine learning models designed for accurate predictions. Make informed choices about crop management, soil health, and pest control, ensuring a bountiful harvest.",
    gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    icon: <FaLaptopFile size={23} />,
    title: "🖥️ User-Friendly Interface",
    description: "Navigate with ease! Our intuitive interface is crafted for all users, regardless of technical expertise. Dive into AI tools effortlessly and tackle your farming challenges head-on, making technology work for you.",
    gradient: "bg-gradient-to-r from-purple-400 to-purple-600",
  },
  {
    icon: <BiSolidCustomize size={23} />,
    title: "🛠️ Customizable Solutions",
    description: "Tailor your farming experience! FARM-FRIEND AI provides customizable solutions tailored to your unique needs. Adjust parameters and leverage AI tools to receive the most accurate, relevant predictions for your specific conditions.",
    gradient: "bg-gradient-to-r from-red-400 to-red-600",
  },
];


const Features = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-24">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-blue-700 mb-4">
          📛 What Do We Provide to Our Farmer Heroes 📢
          </h1>
          <p className="text-base text-blue-600 max-w-xl">
            Explore our cutting-edge AI-driven solutions crafted to transform farming practices for the better.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {featureData.map((feature, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className={`shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${feature.gradient} h-full flex flex-col justify-between text-white`}>
                <div>
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-opacity-80 mb-4">
                    {feature.icon}
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
                </div>
                <p className="leading-relaxed mt-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
