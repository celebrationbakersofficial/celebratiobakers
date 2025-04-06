// // // import React from 'react'

// // // const Footer = () => {
// // //   return (
// // //     <footer className="bg-[#b0dcd1] text-gray-700 text-sm font-sans">
// // //       {/* Main Footer Content */}
// // //       <div className="max-w-7xl mx-auto px-4 py-8">
// // //         {/* Top Section - 3 Columns */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b pb-8 border-gray-300">
// // //           {/* Column 1 */}
// // //           <div className="space-y-3">
// // //             <p className="font-bold text-[15px] mb-2">OUR STORY</p>
// // //             <p className="font-bold text-[15px]">PRIVACY POLICY</p>
// // //             <a href="tel:+918182881881" className="block mt-4 text-[13px] hover:text-amber-700">
// // //               +91 8182-881881
// // //             </a>
// // //           </div>

// // //           {/* Column 2 */}
// // //           <div className="space-y-3">
// // //             <p className="font-bold text-[15px] mb-2">OUR PRODUCTS</p>
// // //             <p className="font-bold text-[15px]">COOKIE POLICY</p>
// // //             <a href="mailto:celebrationbakersofficial@gmail.com" className="block mt-4 text-[13px] hover:text-amber-700">
// // //               celebrationbakersofficial@gmail.com
// // //             </a>
// // //           </div>

// // //           {/* Column 3 - Split into 2 subcolumns */}
// // //           <div className="grid grid-cols-2 gap-6">
// // //             <div className="space-y-3">
// // //               <p className="font-bold text-[15px]">SPECIALITY CAKES</p>
// // //               <p className="font-bold text-[15px]">REFUND POLICY</p>
// // //               <p className="font-bold text-[15px] mt-4">BLOGS</p>
// // //             </div>
// // //             <div className="space-y-3">
// // //               <p className="font-bold text-[15px]">FAQs</p>
// // //               <p className="font-bold text-[15px]">CSR</p>
// // //               <p className="font-bold text-[15px]">NUTRITIONAL INFORMATION</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Sitemap & Newsletter Section */}
// // //         <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-300">
// // //           <a href="/sitemap" className="font-bold text-[15px] mb-4 md:mb-0 hover:text-amber-700">
// // //             HTML SITEMAP
// // //           </a>
// // //           <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
// // //             <input 
// // //               type="email" 
// // //               placeholder="Enter your email..." 
// // //               className="px-4 py-2 border rounded-sm text-[13px] w-full md:w-64 focus:outline-amber-700"
// // //             />
// // //             <button className="bg-amber-700 text-white px-6 py-2 rounded-sm text-[13px] hover:bg-amber-800 transition-colors">
// // //               Sign up for updates
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Store Locations Section */}
// // //         <div className="py-8 border-b border-gray-300">
// // //           <h3 className="font-bold text-[15px] mb-4">OUR STORES -</h3>
// // //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[13px]">
// // //             {[
// // //               'Aqra', 'Ahmedabad', 'Ambaia', 'Anand', 'Bengaluru', 'Chandigarh-Mohali',
// // //               'Chennai', 'Dehradun', 'Delhi', 'Faridabad', 'Ghaziabad', 'Gurgaon',
// // //               'Hyderabad', 'Indore', 'Jaipur', 'Jalandhar', 'Kanpur', 'Karnal',
// // //               'Lucknow', 'Ludhiana', 'Meerut', 'Mumbai', 'Mysore', 'Nagpur',
// // //               'Nashik', 'Navi Mumbai', 'Noida', 'Patiala', 'Pune', 'Raipur',
// // //               'Rajkot', 'Ranchi', 'Surat', 'Thane', 'Vadodara', 'Varanasi', 'Vijayawada'
// // //             ].map((city) => (
// // //               <span 
// // //                 key={city} 
// // //                 className="hover:text-amber-700 cursor-pointer transition-colors"
// // //               >
// // //                 {city}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Copyright Section */}
// // //         <div className="pt-8 mt-4 text-center text-[13px]">
// // //           <p>© {new Date().getFullYear()} celeberationbakers FOODS. ALL RIGHTS RESERVED.</p>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };


// // // export default Footer


// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#b0dcd1] text-gray-700 text-sm font-sans">
// //       {/* Main Footer Content */}
// //       <div className="max-w-7xl mx-auto px-4 py-8">
// //         {/* Top Section - 3 Columns */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b pb-8 border-gray-300">
// //           {/* Column 1 */}
// //           <div className="space-y-3">
// //             <p className="font-bold text-[15px] mb-2">OUR STORY</p>
// //             <Link to="/privacy" className="font-bold text-[15px]">PRIVACY POLICY</Link>
// //             <Link to="/terms" className="font-bold text-[15px]">TERMS & CONDITIONS</Link>
// //             <a href="tel:+918182881881" className="block mt-4 text-[13px] hover:text-amber-700">
// //               +91 6306-442533
// //             </a>
// //           </div>

// //           {/* Column 2 */}
// //           <div className="space-y-3">
// //             <p className="font-bold text-[15px] mb-2">OUR PRODUCTS</p>
// //             <Link to="/refund" className="font-bold text-[15px]">Terms And Conditions</Link>
// //             <Link to="/privacy" className="font-bold text-[15px]">Privacy Policy</Link>
// //             <Link to="/refund" className="font-bold text-[15px]">Refund Policy</Link>
// //             <a href="mailto:celebrationbakersofficial@gmail.com" className="block mt-4 text-[13px] hover:text-amber-700">
// //             celebrationbakersofficial@gmail.com
// //             </a>
// //           </div>

// //           {/* Column 3 - Split into 2 subcolumns */}
// //           {/* <div className="grid grid-cols-2 gap-6">
// //             <div className="space-y-3">
// //               <p className="font-bold text-[15px]">SPECIALITY CAKES</p>
// //               <p className="font-bold text-[15px]">BLOGS</p>
// //             </div>
// //             <div className="space-y-3">
// //               <p className="font-bold text-[15px]">FAQs</p>
// //               <p className="font-bold text-[15px]">CSR</p>
// //               <p className="font-bold text-[15px]">NUTRITIONAL INFORMATION</p>
// //             </div>
// //           </div> */}
// //         </div>

// //         {/* Sitemap & Newsletter Section */}
// //         {/* <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-300">
// //           <Link to="/sitemap" className="font-bold text-[15px] mb-4 md:mb-0 hover:text-amber-700">
// //             HTML SITEMAP
// //           </Link>
// //           <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
// //             <input 
// //               type="email" 
// //               placeholder="Enter your email..." 
// //               className="px-4 py-2 border rounded-sm text-[13px] w-full md:w-64 focus:outline-amber-700"
// //             />
// //             <button className="bg-amber-700 text-white px-6 py-2 rounded-sm text-[13px] hover:bg-amber-800 transition-colors">
// //               Sign up for updates
// //             </button>
// //           </div>
// //         </div> */}

// //         {/* Store Locations Section */}
// //         <div className="py-8 border-b border-gray-300">
// //           <h3 className="font-bold text-[15px] mb-4">OUR STORES -</h3>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[13px]">
// //             {[
// //               'Ambala'
// //             ].map((city) => (
// //               <span 
// //                 key={city} 
// //                 className="hover:text-amber-700 cursor-pointer transition-colors"
// //               >
// //                 {city}
// //               </span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Copyright Section */}
// //         <div className="pt-8 mt-4 text-center text-[13px]">
// //           <p>© {new Date().getFullYear()} Celebration Bakers FOODS. ALL RIGHTS RESERVED.</p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-[#b0dcd1] text-gray-800 text-sm font-sans shadow-lg">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Top Section - 3 Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b pb-8 border-gray-300">
//           {/* Column 1 */}
//           <div className="space-y-4">
//             <p className="font-semibold text-lg text-gray-900">OUR STORY</p>
//             <Link to="/privacy" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">PRIVACY POLICY</Link>
//             <Link to="/terms" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">TERMS & CONDITIONS</Link>
//             <a href="tel:+918182881881" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors mt-4">+91 6306-442533</a>
//           </div>

//           {/* Column 2 */}
//           <div className="space-y-4">
//             <p className="font-semibold text-lg text-gray-900">OUR PRODUCTS</p>
//             <Link to="/refund" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">Refund Policy</Link>
//             <Link to="/privacy" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">Privacy Policy</Link>
//             <Link to="/terms" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">Terms And Conditions</Link>
//             <a href="mailto:celebrationbakersofficial@gmail.com" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors mt-4">celebrationbakersofficial@gmail.com</a>
//           </div>

//           {/* Column 3 */}
//           <div className="space-y-4">
//             <p className="font-semibold text-lg text-gray-900">CONNECT WITH US</p>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" className="text-gray-600 hover:text-amber-600 transition-colors">
//                 <i className="fab fa-facebook-f text-xl"></i>
//               </a>
//               <a href="https://instagram.com" className="text-gray-600 hover:text-amber-600 transition-colors">
//                 <i className="fab fa-instagram text-xl"></i>
//               </a>
//               <a href="https://twitter.com" className="text-gray-600 hover:text-amber-600 transition-colors">
//                 <i className="fab fa-twitter text-xl"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Store Locations Section */}
//         <div className="py-8 border-b border-gray-300">
//           <h3 className="font-semibold text-lg text-gray-900 mb-4">OUR STORES</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-600">
//             {['Ambala'].map((city) => (
//               <span
//                 key={city}
//                 className="hover:text-amber-600 cursor-pointer transition-colors"
//               >
//                 {city}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Sitemap & Newsletter Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-300">
//           <Link to="/sitemap" className="font-semibold text-lg text-gray-900 hover:text-amber-600 transition-colors mb-4 md:mb-0">
//             HTML SITEMAP
//           </Link>
//           <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
//             <input
//               type="email"
//               placeholder="Enter your email..."
//               className="px-4 py-2 border border-gray-300 rounded-sm text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-amber-600"
//             />
//             <button className="bg-amber-600 text-white px-6 py-2 rounded-sm text-sm hover:bg-amber-700 transition-colors">
//               Sign up for updates
//             </button>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="pt-8 mt-4 text-center text-sm text-gray-600">
//           <p>© {new Date().getFullYear()} Celebration Bakers FOODS. ALL RIGHTS RESERVED.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'; // Import React Icons

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-[#b0dcd1] text-gray-800 text-sm font-sans shadow-lg">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b pb-8 border-gray-300">
          {/* Column 1 */}
          <div className="space-y-4">
            <p className="font-semibold text-lg text-gray-900">OUR STORY</p>
            <Link to="/privacy-policy"
            onClick={scrollToTop}
            className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms-and-conditions"
            onClick={scrollToTop}
            className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">TERMS & CONDITIONS</Link>
            <Link to="/shipping-and-delievery" 
            onClick={scrollToTop}
            className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">SHIPPING & DELIEVERY</Link>
            <a href="tel:+918182881881" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors mt-4">+91 6306-442533</a>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <p className="font-semibold text-lg text-gray-900">OUR PRODUCTS</p>
            <Link to="/refund-policy"
              onClick={scrollToTop} // Trigger scroll to top

className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">Refund Policy</Link>
            <Link to="/privacy-policy"
                          onClick={scrollToTop} // Trigger scroll to top

             className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions"
                          onClick={scrollToTop} // Trigger scroll to top
            className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">Terms And Conditions</Link>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <p className="font-semibold text-lg text-gray-900">CONNECT WITH US</p>
            <div className="flex space-x-4">
              {/* <a href="https://facebook.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                <FaFacebookF className="text-xl" />
              </a> */}
              <a href="https://www.instagram.com/celebration_bakers_lalitpur?utm_source=qr&igsh=OW04ejY2eXBmaGpn" className="text-gray-600 hover:text-amber-600 transition-colors" target='blank'>
                <FaInstagram className="text-xl" />
              </a>
              {/* <a href="https://twitter.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                <FaTwitter className="text-xl" />
              </a> */}
                            <a href="https://t.me/@parihar_78" className="text-gray-600 hover:text-amber-600 transition-colors" target='blank'>
                <FaTelegram className="text-xl" />
              </a>
            </div>
            <a href="mailto:celebrationbakersofficial@gmail.com" className="block text-sm text-gray-600 hover:text-amber-600 transition-colors mt-4">celebrationbakersofficial@gmail.com</a>
          </div>
        </div>

        {/* Store Locations Section */}
        <div className="py-8 border-b border-gray-300">
  <h3 className="font-semibold text-lg text-gray-900 mb-4">OUR STORES</h3>
  <div className="flex space-x-4 overflow-x-auto text-sm text-gray-600">
    {['225/5, Near Chandi Mata Mandir, Nayi Basti Colony, Railway Station Road, Lalitpur, Uttar Pradesh-284403'].map((city) => (
      <span
        key={city}
        className="hover:text-amber-600 cursor-pointer transition-colors"
      >
        {city}
      </span>
    ))}
  </div>
</div>


        {/* Sitemap & Newsletter Section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-300">
          <Link to="/sitemap" className="font-semibold text-lg text-gray-900 hover:text-amber-600 transition-colors mb-4 md:mb-0">
            HTML SITEMAP
          </Link>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2 border border-gray-300 rounded-sm text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <button className="bg-amber-600 text-white px-6 py-2 rounded-sm text-sm hover:bg-amber-700 transition-colors">
              Sign up for updates
            </button>
          </div>
        </div> */}

        {/* Copyright Section */}
        <div className="pt-8 mt-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Celebration Bakers. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
