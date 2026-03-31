import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

function Steps() {
  return (
    <div className="bg-gray-50 px-[200px] py-[120px]">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Get Started In 3 Steps</h2>
        <p className="text-gray-500 text-base">Start using premium digital tools in minutes, not hours.</p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-3 gap-[30px]">

        {/* Step 1 */}
        <div className="bg-white border border-purple-200 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center relative w-[380px] h-[380px] justify-center">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-7 h-7 rounded-full flex items-center justify-center font-bold">
            01
          </div>
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <img src={userIcon} alt="create account" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
          <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-white border border-purple-200 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center relative w-[380px] h-[380px] justify-center">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-7 h-7 rounded-full flex items-center justify-center font-bold">
            02
          </div>
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <img src={packageIcon} alt="choose products" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
          <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
        </div>

        {/* Step 3 */}
        <div className="bg-white border border-purple-200 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center relative w-[380px] h-[380px] justify-center">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-7 h-7 rounded-full flex items-center justify-center font-bold">
            03
          </div>
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <img src={rocketIcon} alt="start creating" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
          <p className="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>
        </div>

      </div>
    </div>
  );
}

export default Steps;