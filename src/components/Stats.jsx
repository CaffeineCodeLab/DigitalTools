function Stats() {
  return (
    <div
      className="px-[200px] py-[60px]"
      style={{ background: "linear-gradient(to bottom, #4F39F6 100%, #9514FA 0%)" }}
    >
      <div className="flex items-center justify-center gap-[150px]">

        {/* Stat 1 */}
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-3">50K+</h2>
          <p className="text-purple-100 text-base">Active Users</p>
        </div>

        {/* Divider */}
        <div className="w-px h-16 bg-purple-300"></div>

        {/* Stat 2 */}
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-3">200+</h2>
          <p className="text-purple-100 text-base">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="w-px h-16 bg-purple-300"></div>

        {/* Stat 3 */}
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-3">4.9</h2>
          <p className="text-purple-100 text-base">Rating</p>
        </div>

      </div>
    </div>
  );
}

export default Stats;