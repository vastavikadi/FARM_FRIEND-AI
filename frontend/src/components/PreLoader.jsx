import "../index.css";
const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex border-2 border-green-500 justify-center items-center z-50 bg-blue-500">
      <svg viewBox="0 0 1320 300">
        <text
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          className="uppercase animate-stroke text-8xl text-blue-700"
        >
         Farm-Friend&nbsp;&nbsp;AI
        </text>
      </svg>
    </div>
  );
};

export default Preloader;
