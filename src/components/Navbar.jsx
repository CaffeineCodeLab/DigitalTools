import cartIcon from "../assets/products/shopping-cart.png";

function Navbar({ cartCount }) {
  return (
    <nav className="flex items-center justify-between px-[200px] h-[92px] bg-white shadow-sm">

      {/* Logo */}
      <div className="text-5xl font-bold text-purple-600">
        DigiTools
      </div>


      <ul className="flex gap-8 text-gray-600 font-medium mx-auto">
        <li className="hover:text-purple-600 cursor-pointer">Products</li>
        <li className="hover:text-purple-600 cursor-pointer">Features</li>
        <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
      </ul>

      <div className="flex items-center gap-4">
        
        <div className="relative cursor-pointer">
          <img src={cartIcon} alt="cart" className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

        <span className="text-gray-600 font-medium cursor-pointer hover:text-purple-600">
          Login
        </span>


        <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700">
          Get Started
        </button>
      </div>

    </nav>
  );
}

export default Navbar;