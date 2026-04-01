function CTA() {
  return (
    <div className="px-6 md:px-[200px] py-[60px] md:py-[120px] text-center flex flex-col items-center gap-8" style={{background: "linear-gradient(to bottom, #4F39F6, #9514FA)"}}>

      {/* Heading */}
      <h2 className="text-5xl font-bold text-white">
        Ready To Transform Your Workflow?
      </h2>

      <p className="text-white text-base leading-relaxed">
        Join thousands of professionals who are already using Digitools to work smarter. <br />
        Start your free trial today.
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4">
        <button className="bg-white text-purple-700 font-semibold px-7 py-3 rounded-full hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-colors duration-200">
  Explore Products
</button>
        <button className="border-2 border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white hover:text-purple-700 transition-colors duration-200">
          View Pricing
        </button>
      </div>


      <p className="text-white text-sm">
        14-day free trial • No credit card required • Cancel anytime
      </p>

    </div>
  );
}

export default CTA;