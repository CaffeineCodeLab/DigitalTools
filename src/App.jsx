import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductSection from "./components/ProductSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [lastAddedId, setLastAddedId] = useState(null);

  function handleAddToCart(product) {
    const alreadyInCart = cartItems.find(function(item) {
      return item.id === product.id;
    });
    if (alreadyInCart) {
      toast.warn("Already in cart!");
      return;
    }
    setCartItems([...cartItems, product]);
    setLastAddedId(product.id);
    toast.success("Added to cart!");
  }

  function handleRemoveFromCart(productId) {
    const updatedCart = cartItems.filter(function(item) {
      return item.id !== productId;
    });
    setCartItems(updatedCart);
    toast.error("Removed from cart!");
  }

  function handleCheckout() {
    setCartItems([]);
    setLastAddedId(null);
    toast.success("Checkout successful! Cart cleared.");
  }

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <ProductSection
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
        lastAddedId={lastAddedId}
      />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;