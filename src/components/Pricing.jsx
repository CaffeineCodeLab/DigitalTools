function Pricing() {
  return (
    <div className="bg-white px-6 md:px-[200px] py-[60px] md:py-[120px]">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-base">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">

        {/* Starter */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
            <p className="text-gray-500 text-sm mt-1">Perfect for getting started</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[#101727]">$0</span>
            <span className="text-gray-400 text-sm">/Month</span>
          </div>
          <ul className="flex flex-col gap-3 mt-2">
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> Access to 10 free tools</li>
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> Basic templates</li>
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> Community support</li>
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> 1 project per month</li>
          </ul>
          <button className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 mt-auto">
            Get Started Free
          </button>
        </div>

        {/* Most Popular */}
        <div className="relative rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer" style={{background: "linear-gradient(to bottom, #4F39F6, #9514FA)"}}>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-xs px-4 py-1 rounded-full font-semibold whitespace-nowrap">
            Most Popular
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Pro</h3>
            <p className="text-purple-200 text-sm mt-1">Best for professionals</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-purple-200 text-sm">/Month</span>
          </div>
          <ul className="flex flex-col gap-3 mt-2">
            <li className="flex items-center gap-2 text-sm text-white"><span className="text-white">✓</span> Access to all premium tools</li>
            <li className="flex items-center gap-2 text-sm text-white"><span className="text-white">✓</span> Unlimited templates</li>
            <li className="flex items-center gap-2 text-sm text-white"><span className="text-white">✓</span> Priority support</li>
            <li className="flex items-center gap-2 text-sm text-white"><span className="text-white">✓</span> Unlimited projects</li>
            <li className="flex items-center gap-2 text-sm text-white"><span className="text-white">✓</span> Cloud sync</li>
            <li className="flex items-center gap-2 text-sm text-white"><span className="text-white">✓</span> Advanced analytics</li>
          </ul>
          <button className="w-full bg-white text-purple-600 py-3 rounded-full font-semibold hover:bg-purple-50 mt-auto">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
            <p className="text-gray-500 text-sm mt-1">For teams and businesses</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[#101727]">$99</span>
            <span className="text-gray-400 text-sm">/Month</span>
          </div>
          <ul className="flex flex-col gap-3 mt-2">
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> Everything in Pro</li>
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> Team collaboration</li>
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> Custom integrations</li>
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> Dedicated support</li>
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> SLA guarantee</li>
            <li className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span> Custom branding</li>
          </ul>
          <button className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 mt-auto">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}

export default Pricing;