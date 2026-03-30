import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Banner />
    </div>
  );
}

export default App;