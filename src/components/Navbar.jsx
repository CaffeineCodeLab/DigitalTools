import cartIcon from "../assets/products/shopping-cart.png";
import { useState } from "react";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-[200px] h-[92px] bg-white shadow-sm sticky top-0 z-50">

      {/* Logo */}
      <div className="text-2xl font-bold text-purple-600">
        DigiTools
      </div>

      <ul className="hidden md:flex gap-8 text-gray-600 font-medium mx-auto">
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
        <span className="hidden md:block text-gray-600 font-medium cursor-pointer hover:text-purple-600">Login</span>
        <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700 text-sm">
          Get Started
        </button>
      </div>

    </nav>
  );
}

export default Navbar;