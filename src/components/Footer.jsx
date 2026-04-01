function Footer() {
  return (
    <div className="bg-gray-900 px-6 md:px-[200px] pt-[60px] md:pt-[120px] pb-[30px]">

      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

        {/* Logo & Description */}
        <div className="max-w-[280px]">
          <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
          <p className="text-white text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Product</h4>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Features</a>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Pricing</a>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Templates</a>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Integrations</a>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">About</a>
          <a className="text-white text-sm hover:text-purple-600  cursor-pointer">Blog</a>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Careers</a>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Press</a>
        </div>

        {/* Resources Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Resources</h4>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Documentation</a>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Help Center</a>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Community</a>
          <a className="text-white text-sm hover:text-purple-600 cursor-pointer">Contact</a>
        </div>

        
        
        {/* Social Links */}
<div className="flex flex-col gap-3">
  <h4 className="text-white font-semibold mb-2">Social Links</h4>
  <div className="flex gap-3">

    {/* Instagram */}
    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-100 cursor-pointer transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.5" cy="6.5" r="1" fill="#111" stroke="none"></circle>
      </svg>
    </div>

    {/* Facebook */}
    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#111">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    </div>

    {/* Twitter */}
    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#111">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </div>

  </div>
</div>

      </div>

      <div className="border-t border-gray-700 mb-6"></div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-sm">© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-gray-400 text-sm hover:text-white cursor-pointer">Privacy Policy</a>
          <a className="text-gray-400 text-sm hover:text-white cursor-pointer">Terms of Service</a>
          <a className="text-gray-400 text-sm hover:text-white cursor-pointer">Cookies</a>
        </div>
      </div>

    </div>
  );
}

export default Footer;