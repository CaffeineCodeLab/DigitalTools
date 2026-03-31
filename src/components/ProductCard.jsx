import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import portfolioIcon from "../assets/products/portfolio.png";
import operationIcon from "../assets/products/operation.png";
import socialIcon from "../assets/products/social-media.png";
import cartIcon from "../assets/products/shopping-cart.png";

const iconMap = {
  "/assets/products/writing_2327400_1.png": writingIcon,
  "/assets/products/design-tool.png": designIcon,
  "/assets/products/portfolio.png": portfolioIcon,
  "/assets/products/operation.png": operationIcon,
  "/assets/products/social-media.png": socialIcon,
  "/assets/products/shopping-cart.png": cartIcon,
};

function ProductCard({ product, onAddToCart, lastAddedId }) {
  const iconSrc = iconMap[product.icon];
  const isAdded = lastAddedId === product.id;

  function handleBuyNow() {
    onAddToCart({ ...product, resolvedIcon: iconSrc });
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer">

      {/* Tag */}
      <div className="absolute top-4 right-4">
        {product.tagType === "popular" && (
          <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full font-medium">Popular</span>
        )}
        {product.tagType === "new" && (
          <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium">New</span>
        )}
        {product.tagType === "best seller" && (
          <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">Best Seller</span>
        )}
      </div>

      {/* Icon */}
      <img src={iconSrc} alt={product.name} className="w-10 h-10 object-contain" />

      {/* Name */}
      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm">{product.description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm">
          {product.period === "monthly" ? "/Mo" : product.period === "yearly" ? "/Yr" : "/One-Time"}
        </span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {product.features.map(function(feature, index) {
          return (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-purple-600">✓</span>
              {feature}
            </li>
          );
        })}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className={`w-full py-3 rounded-full font-medium mt-auto transition-colors duration-300 ${
          isAdded
            ? "bg-green-500 text-white"
            : "bg-purple-600 text-white hover:bg-purple-700"
        }`}
      >
        {isAdded ? "✓ Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
}

export default ProductCard;