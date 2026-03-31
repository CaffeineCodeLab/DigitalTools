import cartEmptyIcon from "../assets/products/shopping-cart.png";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";
import { useState } from "react";

function ProductSection({ cartItems, onAddToCart, onRemoveFromCart, onCheckout, lastAddedId }) {
  const [activeTab, setActiveTab] = useState("products");

  const total = cartItems.reduce(function(sum, item) {
    return sum + item.price;
  }, 0);

  return (
    <div className="bg-purple-50 px-[200px] py-[120px]">

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Premium Digital Tools</h2>
        <p className="text-gray-500 text-base">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <button
          onClick={function() { setActiveTab("products"); }}
          className={activeTab === "products"
            ? "bg-purple-600 text-white px-6 py-2 rounded-full font-medium"
            : "text-gray-600 px-6 py-2 rounded-full font-medium hover:text-purple-600"}
        >
          Products
        </button>
        <button
          onClick={function() { setActiveTab("cart"); }}
          className={activeTab === "cart"
            ? "bg-purple-600 text-white px-6 py-2 rounded-full font-medium"
            : "text-gray-600 px-6 py-2 rounded-full font-medium hover:text-purple-600"}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {/* Products Grid */}
      {activeTab === "products" && (
        <div className="grid grid-cols-3 gap-[30px]">
          {productsData.map(function(product) {
            return (
              <ProductCard
  key={product.id}
  product={product}
  onAddToCart={onAddToCart}
  lastAddedId={lastAddedId}
/>
            );
          })}
        </div>
      )}

      {/* Cart Section */}
      {activeTab === "cart" && (
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>

          {cartItems.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-10 gap-4">
    <img src={cartEmptyIcon} alt="empty cart" className="w-12 h-12 opacity-90" />
    <p className="text-gray-400 text-base">Your cart is empty!</p>
  </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map(function(item) {
                return (
                  <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-6 py-4 border border-gray-200">
                    <div className="flex items-center gap-4">
                      <img src={item.resolvedIcon} alt={item.name} className="w-8 h-8 object-contain" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-gray-500 text-sm">${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={function() { onRemoveFromCart(item.id); }}
                      className="text-red-500 text-sm font-medium hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              {/* Total */}
              <div className="flex items-center justify-between px-2 mt-2">
                <span className="text-gray-600 font-medium">Total:</span>
                <span className="text-gray-900 font-bold text-lg">${total}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onCheckout}
                className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 mt-2"
              >
                Proceed To Checkout
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default ProductSection;