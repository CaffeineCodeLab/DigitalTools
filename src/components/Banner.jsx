import bannerImg from "../assets/banner.png";
import playIcon from "../assets/Play.png";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white px-6 md:px-[200px] py-[60px] gap-[60px]">

      {/* Left Side */}
      <div className="w-full md:w-[640px]">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-sm px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          <span className="font-semibold text-purple-700">New: AI-Powered Tools Available</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-gray-500 text-base mb-8 leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity
          software — all in one place. Start creating faster today.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <button className="bg-purple-600 text-white px-7 py-3 rounded-full font-medium hover:bg-purple-700">
            Explore Products
          </button>
          <button className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-7 py-3 rounded-full font-medium hover:bg-purple-50">
            <img src={playIcon} alt="play" className="w-4 h-4" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[500px] md:h-[590px]">
        <img src={bannerImg} alt="banner" className="w-full h-full object-cover rounded-2xl" />
      </div>

    </div>
  );
}

export default Banner;