import editor from "../assets/prediction_.model.png";

const Showcase = () => {
  const editorData = {
    title: "🚀 Our Prediction Models 🚀",
    subheading: "Enhancing Accuracy with Data-Driven Insights",
    features: [
      {
        title: "Accurate Predictions",
        description:
          "Leverage our cutting-edge prediction models to gain precise insights into crop yield, soil health, and pest outbreaks. Make informed, data-driven decisions to elevate your farming practices.",
      },
      {
        title: "Customizable Reports",
        description:
          "Create and tailor comprehensive reports to meet your specific needs. Easily share these reports with stakeholders to demonstrate farm performance and highlight improvements.",
      },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold lg:text-4xl text-center text-blue-600">
          {editorData.title}
        </h2>
        <h3 className="text-md lg:text-xl text-center text-blue-700 mt-2 mb-12">
          {editorData.subheading}
        </h3>
        <div className="flex flex-col md:flex-row md:space-x-10 items-start">
          <div className="md:w-1/2 space-y-8">
            {editorData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-lg shadow-lg border border-blue-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-xl font-extrabold text-blue-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src={editor}
              alt="Prediction Models"
              className="w-full h-auto max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;