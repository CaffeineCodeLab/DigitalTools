function Stats() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 px-6 md:px-[200px] py-[60px]"
      style={{ background: "linear-gradient(to bottom, #4F39F6 0%, #9514FA 100%)" }}
    >
      <div className="text-center text-white md:flex-1">
        <h2 className="text-6xl font-bold mb-3">50K+</h2>
        <p className="text-purple-100 text-base">Active Users</p>
      </div>
      <div className="hidden md:block w-px h-16 bg-purple-300"></div>
      <div className="text-center text-white md:flex-1">
        <h2 className="text-6xl font-bold mb-3">200+</h2>
        <p className="text-purple-100 text-base">Premium Tools</p>
      </div>
      <div className="hidden md:block w-px h-16 bg-purple-300"></div>
      <div className="text-center text-white md:flex-1">
        <h2 className="text-6xl font-bold mb-3">4.9</h2>
        <p className="text-purple-100 text-base">Rating</p>
      </div>
    </div>
  );
}

export default Stats;