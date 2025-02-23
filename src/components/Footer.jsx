import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#b0dcd1] text-gray-700 text-sm font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b pb-8 border-gray-300">
          {/* Column 1 */}
          <div className="space-y-3">
            <p className="font-bold text-[15px] mb-2">OUR STORY</p>
            <p className="font-bold text-[15px]">PRIVACY POLICY</p>
            <a href="tel:+918182881881" className="block mt-4 text-[13px] hover:text-amber-700">
              +91 8182-881881
            </a>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <p className="font-bold text-[15px] mb-2">OUR PRODUCTS</p>
            <p className="font-bold text-[15px]">COOKIE POLICY</p>
            <a href="mailto:contact@theobroma.in" className="block mt-4 text-[13px] hover:text-amber-700">
              contact@theobroma.in
            </a>
          </div>

          {/* Column 3 - Split into 2 subcolumns */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="font-bold text-[15px]">SPECIALITY CAKES</p>
              <p className="font-bold text-[15px]">REFUND POLICY</p>
              <p className="font-bold text-[15px] mt-4">BLOGS</p>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-[15px]">FAQs</p>
              <p className="font-bold text-[15px]">CSR</p>
              <p className="font-bold text-[15px]">NUTRITIONAL INFORMATION</p>
            </div>
          </div>
        </div>

        {/* Sitemap & Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-300">
          <a href="/sitemap" className="font-bold text-[15px] mb-4 md:mb-0 hover:text-amber-700">
            HTML SITEMAP
          </a>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="px-4 py-2 border rounded-sm text-[13px] w-full md:w-64 focus:outline-amber-700"
            />
            <button className="bg-amber-700 text-white px-6 py-2 rounded-sm text-[13px] hover:bg-amber-800 transition-colors">
              Sign up for updates
            </button>
          </div>
        </div>

        {/* Store Locations Section */}
        <div className="py-8 border-b border-gray-300">
          <h3 className="font-bold text-[15px] mb-4">OUR STORES -</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[13px]">
            {[
              'Aqra', 'Ahmedabad', 'Ambaia', 'Anand', 'Bengaluru', 'Chandigarh-Mohali',
              'Chennai', 'Dehradun', 'Delhi', 'Faridabad', 'Ghaziabad', 'Gurgaon',
              'Hyderabad', 'Indore', 'Jaipur', 'Jalandhar', 'Kanpur', 'Karnal',
              'Lucknow', 'Ludhiana', 'Meerut', 'Mumbai', 'Mysore', 'Nagpur',
              'Nashik', 'Navi Mumbai', 'Noida', 'Patiala', 'Pune', 'Raipur',
              'Rajkot', 'Ranchi', 'Surat', 'Thane', 'Vadodara', 'Varanasi', 'Vijayawada'
            ].map((city) => (
              <span 
                key={city} 
                className="hover:text-amber-700 cursor-pointer transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-4 text-center text-[13px]">
          <p>© {new Date().getFullYear()} THEOBROMA FOODS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer
