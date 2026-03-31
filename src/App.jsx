import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductSection from "./components/ProductSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import CTA from "./components/CTA";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [lastAddedId, setLastAddedId] = useState(null);

  function handleAddToCart(product) {
    const alreadyInCart = cartItems.find(function(item) {
      return item.id === product.id;
    });
    if (alreadyInCart) {
      return;
    }
    setCartItems([...cartItems, product]);
    setLastAddedId(product.id);
  }

  function handleRemoveFromCart(productId) {
    const updatedCart = cartItems.filter(function(item) {
      return item.id !== productId;
    });
    setCartItems(updatedCart);
  }

  function handleCheckout() {
    setCartItems([]);
    setLastAddedId(null);
  }

  return (
    <div>
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