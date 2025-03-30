// // // // // // // import React from "react";
// // // // // // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // // // // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // // // // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // // // // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // // // // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // // // // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // // // // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // // // // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // // // // // const products = [
// // // // // // //   {
// // // // // // //     name: "Brownies",
// // // // // // //     image: Brownies,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Breads",
// // // // // // //     image: Breads,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Croissants & Danishes",
// // // // // // //     image: Croissants,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Pastries",
// // // // // // //     image: Pastries,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Beverages",
// // // // // // //     image: Beverages,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Sandwiches",
// // // // // // //     image: Sandwiches,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Cookies",
// // // // // // //     image: Cookies,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Cakes",
// // // // // // //     image: Cakes,
// // // // // // //   },
// // // // // // // ];
// // // // // // // const TheAllProducts = () => {
// // // // // // //   return (
// // // // // // //     <div className="container mx-auto py-12">
// // // // // // //       <h1 className="text-4xl font-bold text-center mb-8">Theobroma Products</h1>
// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // // //         {products.map((product, index) => (
// // // // // // //           <div key={index} className="text-center">
// // // // // // //             <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
// // // // // // //             <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // // // // // //             <button className="mt-2 px-4 py-2 border border-gray-400 rounded-lg text-sm hover:bg-gray-200">
// // // // // // //               ORDER ONLINE
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TheAllProducts;


// // // // // // import React, { useState } from "react";
// // // // // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // // // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // // // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // // // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // // // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // // // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // // // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // // // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // // // // const products = [
// // // // // //   { name: "Brownies", image: Brownies, price: "₹110", description: "Delicious chocolate brownies with a rich taste." },
// // // // // //   { name: "Breads", image: Breads, price: "₹80", description: "Freshly baked soft and fluffy breads." },
// // // // // //   { name: "Croissants & Danishes", image: Croissants, price: "₹120", description: "Buttery, flaky croissants & danishes." },
// // // // // //   { name: "Pastries", image: Pastries, price: "₹150", description: "Tasty pastries with creamy fillings." },
// // // // // //   { name: "Beverages", image: Beverages, price: "₹60", description: "Refreshing hot & cold beverages." },
// // // // // //   { name: "Sandwiches", image: Sandwiches, price: "₹100", description: "Fresh sandwiches with delicious fillings." },
// // // // // //   { name: "Cookies", image: Cookies, price: "₹90", description: "Crispy and chewy cookies of various flavors." },
// // // // // //   { name: "Cakes", image: Cakes, price: "₹200", description: "Soft and spongy cakes for every occasion." },
// // // // // // ];

// // // // // // const TheAllProducts = () => {
// // // // // //   const [selectedProduct, setSelectedProduct] = useState(null);

// // // // // //   return (
// // // // // //     <div className="container mx-auto py-12">
// // // // // //       {selectedProduct ? (
// // // // // //         // Product Details View
// // // // // //         <div className="text-center">
// // // // // //           <img
// // // // // //             src={selectedProduct.image}
// // // // // //             alt={selectedProduct.name}
// // // // // //             className="w-1/2 mx-auto h-80 object-cover rounded-lg"
// // // // // //           />
// // // // // //           <h2 className="mt-4 text-2xl font-bold">{selectedProduct.name}</h2>
// // // // // //           <p className="mt-2 text-lg text-gray-600">{selectedProduct.description}</p>
// // // // // //           <p className="mt-2 text-xl font-semibold">{selectedProduct.price}</p>
// // // // // //           <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
// // // // // //             ORDER ONLINE
// // // // // //           </button>
// // // // // //           <br />
// // // // // //           <button
// // // // // //             className="mt-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
// // // // // //             onClick={() => setSelectedProduct(null)}
// // // // // //           >
// // // // // //             Back to Products
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         // Product Grid View
// // // // // //         <>
// // // // // //           <h1 className="text-4xl font-bold text-center mb-8">Theobroma Products</h1>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // //             {products.map((product, index) => (
// // // // // //               <div
// // // // // //                 key={index}
// // // // // //                 className="text-center cursor-pointer"
// // // // // //                 onClick={() => setSelectedProduct(product)}
// // // // // //               >
// // // // // //                 <img
// // // // // //                   src={product.image}
// // // // // //                   alt={product.name}
// // // // // //                   className="w-full h-64 object-cover rounded-lg"
// // // // // //                 />
// // // // // //                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // // // // //                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-lg text-sm hover:bg-gray-200">
// // // // // //                   ORDER ONLINE
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default TheAllProducts;


// // // // // import React, { useState } from "react";
// // // // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // // // const products = [
// // // // //   { name: "Choco Chip Brownie", image: Brownies, price: "₹110", bestseller: true },
// // // // //   { name: "Cookie Brownie", image: Breads, price: "₹110" },
// // // // //   { name: "Millionaire Brownie", image: Croissants, price: "₹120" },
// // // // //   { name: "Classic Brownie", image: Pastries, price: "₹100", bestseller: true },
// // // // //   { name: "Fudge Brownie", image: Beverages, price: "₹115" },
// // // // //   { name: "Walnut Brownie", image: Sandwiches, price: "₹125" },
// // // // //   { name: "Double Chocolate Brownie", image: Cookies, price: "₹130" },
// // // // //   { name: "Nutella Brownie", image: Cakes, price: "₹140" },
// // // // // ];

// // // // // const categories = [
// // // // //   "Brownies",
// // // // //   "Biscuits, Cookies & Crackers",
// // // // //   "Breads",
// // // // //   "Cakes",
// // // // //   "Combos",
// // // // //   "Croissants & Danishes",
// // // // //   "Desserts & Cupcakes",
// // // // //   "Pastries",
// // // // //   "Sandwiches & Savouries",
// // // // //   "Tea Cakes",
// // // // //   "Beverages",
// // // // //   "Gifting",
// // // // //   "Collectibles",
// // // // //   "Strawberry Specials",
// // // // //   "Ramadan Specials",
// // // // // ];

// // // // // const TheAllProducts = () => {
// // // // //   const [selectedProduct, setSelectedProduct] = useState(null);

// // // // //   return (
// // // // //     <div className="container mx-auto py-12 flex gap-8">
// // // // //       {/* Left Sidebar */}
// // // // //       <div className="w-1/4 border-r pr-6">
// // // // //         <h2 className="font-bold text-lg mb-4">FILTERS</h2>
// // // // //         <label className="flex items-center space-x-2 mb-2">
// // // // //           <input type="checkbox" className="accent-brown" />
// // // // //           <span>Egg</span>
// // // // //         </label>
// // // // //         <label className="flex items-center space-x-2 mb-4">
// // // // //           <input type="checkbox" className="accent-brown" />
// // // // //           <span>Eggless</span>
// // // // //         </label>

// // // // //         <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
// // // // //         <ul className="space-y-2 text-gray-700">
// // // // //           {categories.map((category, index) => (
// // // // //             <li key={index} className="cursor-pointer hover:text-brown">
// // // // //               &gt; {category}
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>

// // // // //       {/* Product Grid */}
// // // // //       <div className="w-3/4">
// // // // //         <h1 className="text-4xl font-bold mb-6">Brownies</h1>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {products.map((product, index) => (
// // // // //             <div key={index} className="text-center relative">
// // // // //               {product.bestseller && (
// // // // //                 <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
// // // // //                   Bestseller
// // // // //                 </span>
// // // // //               )}
// // // // //               <img
// // // // //                 src={product.image}
// // // // //                 alt={product.name}
// // // // //                 className="w-full h-64 object-cover rounded-lg"
// // // // //               />
// // // // //               <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // // // //               <p className="text-gray-600">{product.price}</p>
// // // // //               <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
// // // // //                 ORDER ONLINE
// // // // //               </button>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TheAllProducts;


// // // // import React, { useState } from "react";
// // // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // // const allProducts = [
// // // //   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
// // // //   { name: "Cookie Brownie", category: "Brownies", image: Breads, price: "₹110" },
// // // //   { name: "Millionaire Brownie", category: "Brownies", image: Croissants, price: "₹120" },
// // // //   { name: "Classic Brownie", category: "Brownies", image: Pastries, price: "₹100", bestseller: true },
// // // //   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
// // // //   { name: "Walnut Brownie", category: "Brownies", image: Sandwiches, price: "₹125" },
// // // //   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
// // // //   { name: "Nutella Brownie", category: "Brownies", image: Cakes, price: "₹140" },
// // // // ];

// // // // const categories = [
// // // //   "Brownies",
// // // //   "Biscuits, Cookies & Crackers",
// // // //   "Breads",
// // // //   "Cakes",
// // // //   "Combos",
// // // //   "Croissants & Danishes",
// // // //   "Desserts & Cupcakes",
// // // //   "Pastries",
// // // //   "Sandwiches & Savouries",
// // // //   "Tea Cakes",
// // // //   "Beverages",
// // // //   "Gifting",
// // // //   "Collectibles",
// // // //   "Strawberry Specials",
// // // //   "Ramadan Specials",
// // // // ];

// // // // const TheAllProducts = () => {
// // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // //   const [showFilters, setShowFilters] = useState(false);

// // // //   const filteredProducts = selectedCategory
// // // //     ? allProducts.filter((product) => product.category === selectedCategory)
// // // //     : allProducts;

// // // //   return (
// // // //     <div className="container mx-auto py-12">
// // // //       {/* Breadcrumb Navigation */}
// // // //       <nav className="text-gray-600 mb-4">
// // // //         Home &gt; Products {selectedCategory && `> ${selectedCategory}`}
// // // //       </nav>

// // // //       <div className="flex gap-8">
// // // //         {/* Sidebar (Hidden initially) */}
// // // //         {showFilters && (
// // // //           <div className="w-1/4 border-r pr-6">
// // // //             <h2 className="font-bold text-lg mb-4">FILTERS</h2>
// // // //             <label className="flex items-center space-x-2 mb-2">
// // // //               <input type="checkbox" className="accent-brown" />
// // // //               <span>Egg</span>
// // // //             </label>
// // // //             <label className="flex items-center space-x-2 mb-4">
// // // //               <input type="checkbox" className="accent-brown" />
// // // //               <span>Eggless</span>
// // // //             </label>

// // // //             <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
// // // //             <ul className="space-y-2 text-gray-700">
// // // //               {categories.map((category, index) => (
// // // //                 <li
// // // //                   key={index}
// // // //                   className="cursor-pointer hover:text-brown"
// // // //                   onClick={() => setSelectedCategory(category)}
// // // //                 >
// // // //                   &gt; {category}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>
// // // //         )}

// // // //         {/* Product Grid */}
// // // //         <div className={showFilters ? "w-3/4" : "w-full"}>
// // // //           <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Brownies"}</h1>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {filteredProducts.map((product, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className="text-center relative cursor-pointer"
// // // //                 onClick={() => {
// // // //                   setSelectedCategory(product.category);
// // // //                   setShowFilters(true);
// // // //                 }}
// // // //               >
// // // //                 {product.bestseller && (
// // // //                   <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
// // // //                     Bestseller
// // // //                   </span>
// // // //                 )}
// // // //                 <img
// // // //                   src={product.image}
// // // //                   alt={product.name}
// // // //                   className="w-full h-64 object-cover rounded-lg"
// // // //                 />
// // // //                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // // //                 <p className="text-gray-600">{product.price}</p>
// // // //                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
// // // //                   ORDER ONLINE
// // // //                 </button>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TheAllProducts;


// // // import React, { useState } from "react";
// // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // const allProducts = [
// // //   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
// // //   { name: "Cookie Brownie", category: "Brownies", image: Breads, price: "₹110" },
// // //   { name: "Millionaire Brownie", category: "Brownies", image: Croissants, price: "₹120" },
// // //   { name: "Classic Brownie", category: "Brownies", image: Pastries, price: "₹100", bestseller: true },
// // //   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
// // //   { name: "Walnut Brownie", category: "Brownies", image: Sandwiches, price: "₹125" },
// // //   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
// // //   { name: "Nutella Brownie", category: "Brownies", image: Cakes, price: "₹140" },
// // // ];

// // // const categories = [
// // //   "Brownies",
// // //   "Biscuits, Cookies & Crackers",
// // //   "Breads",
// // //   "Cakes",
// // //   "Combos",
// // //   "Croissants & Danishes",
// // //   "Desserts & Cupcakes",
// // //   "Pastries",
// // //   "Sandwiches & Savouries",
// // //   "Tea Cakes",
// // //   "Beverages",
// // //   "Gifting",
// // //   "Collectibles",
// // //   "Strawberry Specials",
// // //   "Ramadan Specials",
// // // ];

// // // const TheAllProducts = () => {
// // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // //   const [showFilters, setShowFilters] = useState(false);

// // //   const filteredProducts = selectedCategory
// // //     ? allProducts.filter((product) => product.category === selectedCategory)
// // //     : allProducts;

// // //   return (
// // //     <div className="container mx-auto py-12">
// // //       {/* Breadcrumb Navigation */}
// // //       <nav className="text-gray-600 mb-4">
// // //         Home &gt; Products {selectedCategory && `> ${selectedCategory}`}
// // //       </nav>

// // //       <div className="flex gap-8">
// // //         {/* Sidebar (Hidden initially) */}
// // //         {showFilters && (
// // //           <div className="w-1/4 border-r pr-6">
// // //             <h2 className="font-bold text-lg mb-4">FILTERS</h2>
// // //             <label className="flex items-center space-x-2 mb-2">
// // //               <input type="checkbox" className="accent-brown" />
// // //               <span>Egg</span>
// // //             </label>
// // //             <label className="flex items-center space-x-2 mb-4">
// // //               <input type="checkbox" className="accent-brown" />
// // //               <span>Eggless</span>
// // //             </label>

// // //             <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
// // //             <ul className="space-y-2 text-gray-700">
// // //               {categories.map((category, index) => (
// // //                 <li
// // //                   key={index}
// // //                   className="cursor-pointer hover:text-brown"
// // //                   onClick={() => setSelectedCategory(category)}
// // //                 >
// // //                   &gt; {category}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}

// // //         {/* Product Grid */}
// // //         <div className={showFilters ? "w-3/4" : "w-full"}>
// // //           <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Brownies"}</h1>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {filteredProducts.map((product, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="text-center relative cursor-pointer group"
// // //                 onClick={() => {
// // //                   setSelectedCategory(product.category);
// // //                   setShowFilters(true);
// // //                 }}
// // //               >
// // //                 {product.bestseller && (
// // //                   <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
// // //                     Bestseller
// // //                   </span>
// // //                 )}
// // //                 <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
// // //                   <img
// // //                     src={product.image}
// // //                     alt={product.name}
// // //                     className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
// // //                   />
// // //                 </div>
// // //                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // //                 <p className="text-gray-600">{product.price}</p>
// // //                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
// // //                   ORDER ONLINE
// // //                 </button>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TheAllProducts;


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";  // Import Link from react-router-dom
// // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // const allProducts = [
// //   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
// //   { name: "Cookie Brownie", category: "Brownies", image: Breads, price: "₹110" },
// //   { name: "Millionaire Brownie", category: "Brownies", image: Croissants, price: "₹120" },
// //   { name: "Classic Brownie", category: "Brownies", image: Pastries, price: "₹100", bestseller: true },
// //   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
// //   { name: "Walnut Brownie", category: "Brownies", image: Sandwiches, price: "₹125" },
// //   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
// //   { name: "Nutella Brownie", category: "Brownies", image: Cakes, price: "₹140" },
// // ];

// // const categories = [
// //   "Brownies",
// //   "Biscuits, Cookies & Crackers",
// //   "Breads",
// //   "Cakes",
// //   "Combos",
// //   "Croissants & Danishes",
// //   "Desserts & Cupcakes",
// //   "Pastries",
// //   "Sandwiches & Savouries",
// //   "Tea Cakes",
// //   "Beverages",
// //   "Gifting",
// //   "Collectibles",
// //   "Strawberry Specials",
// //   "Ramadan Specials",
// // ];

// // const TheAllProducts = () => {
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [showFilters, setShowFilters] = useState(false);

// //   const filteredProducts = selectedCategory
// //     ? allProducts.filter((product) => product.category === selectedCategory)
// //     : allProducts;

// //   return (
// //     <div className="container mx-auto py-12">
// //       {/* Breadcrumb Navigation */}
// //       <nav className="text-gray-600 mb-4">
// //         <Link to="/" className="text-blue-500 hover:underline">Home</Link> &gt; 
// //         <Link to="/products" className="text-blue-500 hover:underline">Products</Link>
// //         {selectedCategory && ` > ${selectedCategory}`}
// //       </nav>

// //       <div className="flex gap-8">
// //         {/* Sidebar (Hidden initially) */}
// //         {showFilters && (
// //           <div className="w-1/4 border-r pr-6">
// //             <h2 className="font-bold text-lg mb-4">FILTERS</h2>
// //             <label className="flex items-center space-x-2 mb-2">
// //               <input type="checkbox" className="accent-brown" />
// //               <span>Egg</span>
// //             </label>
// //             <label className="flex items-center space-x-2 mb-4">
// //               <input type="checkbox" className="accent-brown" />
// //               <span>Eggless</span>
// //             </label>

// //             <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
// //             <ul className="space-y-2 text-gray-700">
// //               {categories.map((category, index) => (
// //                 <li
// //                   key={index}
// //                   className="cursor-pointer hover:text-brown"
// //                   onClick={() => setSelectedCategory(category)}
// //                 >
// //                   &gt; {category}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}

// //         {/* Product Grid */}
// //         <div className={showFilters ? "w-3/4" : "w-full"}>
// //           <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Brownies"}</h1>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {filteredProducts.map((product, index) => (
// //               <div
// //                 key={index}
// //                 className="text-center relative cursor-pointer group"
// //                 onClick={() => {
// //                   setSelectedCategory(product.category);
// //                   setShowFilters(true);
// //                 }}
// //               >
// //                 {product.bestseller && (
// //                   <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
// //                     Bestseller
// //                   </span>
// //                 )}
// //                 <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
// //                   />
// //                 </div>
// //                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// //                 <p className="text-gray-600">{product.price}</p>
// //                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
// //                   ORDER ONLINE
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TheAllProducts;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";  // Import useLocation from react-router-dom

// const allProducts = [
//   { name: "Choco Chip Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹110", bestseller: true },
//   { name: "Cookie Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹110" },
//   { name: "Millionaire Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹120" },
//   { name: "Classic Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹100", bestseller: true },
//   { name: "Fudge Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹115" },
//   { name: "Walnut Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹125" },
//   { name: "Double Chocolate Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹130" },
//   { name: "Nutella Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹140" },
// ];

// const categories = [
//   "Brownies",
//   "Biscuits, Cookies & Crackers",
//   "Breads",
//   "Cakes",
//   "Combos",
//   "Croissants & Danishes",
//   "Desserts & Cupcakes",
//   "Pastries",
//   "Sandwiches & Savouries",
//   "Tea Cakes",
//   "Beverages",
//   "Gifting",
//   "Collectibles",
//   "Strawberry Specials",
//   "Ramadan Specials",
// ];

// const TheAllProducts = () => {
//   const location = useLocation(); // Get the current location
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showFilters, setShowFilters] = useState(false);

//   // This effect will run whenever the route changes.
//   useEffect(() => {
//     if (location.pathname === "/products") {
//       // Reset the category state if needed
//       setSelectedCategory(null);
//     }
//   }, [location]);

//   const filteredProducts = selectedCategory
//     ? allProducts.filter((product) => product.category === selectedCategory)
//     : allProducts;

//   return (
//     <div className="container mx-auto py-12">
//       {/* Breadcrumb Navigation */}
//       <nav className="text-gray-600 mb-4">
//         <Link to="/" className="text-blue-500 hover:underline">Home</Link> &gt; 
//         <Link to="/products" className="text-blue-500 hover:underline">Products</Link>
//         {selectedCategory && ` > ${selectedCategory}`}
//       </nav>

//       <div className="flex gap-8">
//         {/* Sidebar (Hidden initially) */}
//         {showFilters && (
//           <div className="w-1/4 border-r pr-6">
//             <h2 className="font-bold text-lg mb-4">FILTERS</h2>
//             <label className="flex items-center space-x-2 mb-2">
//               <input type="checkbox" className="accent-brown" />
//               <span>Egg</span>
//             </label>
//             <label className="flex items-center space-x-2 mb-4">
//               <input type="checkbox" className="accent-brown" />
//               <span>Eggless</span>
//             </label>

//             <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
//             <ul className="space-y-2 text-gray-700">
//               {categories.map((category, index) => (
//                 <li
//                   key={index}
//                   className="cursor-pointer hover:text-brown"
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   &gt; {category}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Product Grid */}
//         <div className={showFilters ? "w-3/4" : "w-full"}>
//           <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Products"}</h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.map((product, index) => (
//               <div
//                 key={index}
//                 className="text-center relative cursor-pointer group"
//                 onClick={() => {
//                   setSelectedCategory(product.category);
//                   setShowFilters(true);
//                 }}
//               >
//                 {product.bestseller && (
//                   <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
//                     Bestseller
//                   </span>
//                 )}
//                 <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
//                   />
//                 </div>
//                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
//                 <p className="text-gray-600">{product.price}</p>
//                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
//                   ORDER ONLINE
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TheAllProducts;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";
// import Cakes1 from "./prakash-meghani-07bBNmiV7ag-unsplash (1).jpg";
// import Cakes1 from "./prakash-meghani-07bBNmiV7ag-unsplash (1).jpg";

import CakeImage1 from "./vanilla.jpg";
import CakeImage2 from "./vanilla.jpg";
import CakeImage3 from "./Brownie cake.jpg";
import CakeImage4 from "./Brownie cake.jpg";
import CakeImage5 from "./Redvelvet cupcake.jpg";
import CakeImage6 from "./Vanilla cupcake.jpg";
import CakeImage7 from "./Choco cupcake.jpg";
import CakeImage8 from "./Brownie with Icecream.jpg";
import CakeImage9 from "./Hot chocolate brownie.jpg";
import CakeImage10 from "./Truffle pastry.jpg";
import CakeImage11 from "./Mango pastry.jpg";
import CakeImage12 from "./Kitkat pastry.jpg";
import CakeImage13 from "./Oreo pastry.jpg";
import CakeImage14 from "./Blackcurrant pastry.jpg";
import CakeImage15 from "./Blueberry pastry.jpg";
import CakeImage16 from "./Redvelvet pastry.jpg";
import CakeImage17 from "./Whiteforest pastry.jpg";
import CakeImage18 from "./Butterscotch pastry.jpg";
import CakeImage19 from "./Strawberry pastry.jpg";
import CakeImage20 from "./Pineapple pastry.jpg";
import CakeImage21 from "./Blackforeat pastry.jpg";
import CakeImage22 from "./Chocolate pastry.jpg";
import CakeImage23 from "./Coffee cake.jpg";
import CakeImage24 from "./Coffee cake.jpg";
import CakeImage25 from "./Redvelevet cake.jpg";
import CakeImage26 from "./Redvelevet cake.jpg";
import CakeImage27 from "./Vanilla cake.jpg";
import CakeImage28 from "./Vanilla cake.jpg";
// Pastries
import CakeImage29 from "./Rasmalai cake.jpg";
import CakeImage30 from "./Rasmalai cake.jpg";
import CakeImage31 from "./truffle  cake.jpg";
import CakeImage32 from "./truffle  cake.jpg";
import CakeImage33 from "./Kitkat cake.jpg";
import CakeImage34 from "./Kitkat cake.jpg";
import CakeImage35 from "./Oreo cake.jpg";
import CakeImage36 from "./Oreo cake.jpg";
import CakeImage37 from "./Blackcurrant cake.jpg";
import CakeImage38 from "./Blackcurrant cake.jpg";
import CakeImage39 from "./Blueberry cake.jpg";
import CakeImage40 from "./Blueberry cake.jpg";
import CakeImage41 from "./White forest cake.jpg";
import CakeImage42 from "./White forest cake1.jpg";
import CakeImage43 from "./Butterscotch cake.jpg";
import CakeImage44 from "./Butterscotch cake.jpg";
import CakeImage45 from "./Pineapple cake.jpg";
import CakeImage46 from "./Pineapple cake.jpg";
import CakeImage47 from "./Strawberry cake.jpg";
import CakeImage48 from "./Strawberry cake.jpg";
import CakeImage49 from "./Black forest cake.jpg";
import CakeImage50 from "./Black forest cake.jpg";
import CakeImage51 from "./Chocolate cake.jpg";
import CakeImage52 from "./Chocolate cake.jpg";

import Kids_cake1 from "./images1/photo_2025-03-30_09-37-46.jpg";
import Kids_cake2 from "./images1/photo_2025-03-30_09-37-44.jpg";
import Kids_cake3 from "./images1/photo_2025-03-30_09-37-45.jpg";
import Kids_cake4 from "./images1/photo_2025-03-30_09-37-43.jpg";

import Kids_cake5 from "./images1/photo_2025-03-30_09-43-13.jpg";
import Kids_cake6 from "./images1/photo_2025-03-30_09-43-14.jpg";
import Kids_cake7 from "./images1/photo_2025-03-30_09-43-15.jpg";
import Kids_cake8 from "./images1/photo_2025-03-30_09-43-16.jpg";
import Kids_cake9 from "./images1/photo_2025-03-30_09-43-17.jpg";
import Kids_cake10 from "./images1/photo_2025-03-30_09-43-18.jpg";
import Kids_cake11 from "./images1/photo_2025-03-30_09-43-19.jpg";

import customisedcake1 from "./images1/photo_2025-03-30_09-50-19.jpg";
import customisedcake2 from "./images1/photo_2025-03-30_09-50-20.jpg";
import customisedcake3 from "./images1/photo_2025-03-30_09-50-21.jpg";
import customisedcake4 from "./images1/photo_2025-03-30_09-50-22.jpg";
import customisedcake5 from "./images1/photo_2025-03-30_09-50-23.jpg";
import customisedcake6 from "./images1/photo_2025-03-30_09-50-24.jpg";
import customisedcake7 from "./images1/photo_2025-03-30_09-50-25.jpg";

import Anniversary_cakes1 from "./images1/photo_2025-03-30_09-55-41.jpg";
import Anniversary_cakes2 from "./images1/photo_2025-03-30_09-55-42.jpg";
import Anniversary_cakes3 from "./images1/photo_2025-03-30_09-55-43.jpg";
import Anniversary_cakes4 from "./images1/photo_2025-03-30_09-55-44.jpg";
import Anniversary_cakes5 from "./images1/photo_2025-03-30_09-55-45.jpg";
import Anniversary_cakes6 from "./images1/photo_2025-03-30_09-55-46.jpg";
import Anniversary_cakes7 from "./images1/photo_2025-03-30_09-55-47.jpg";

import Heartshape_cakes1 from "./images1/photo_2025-03-30_10-00-36.jpg";
import Heartshape_cakes2 from "./images1/photo_2025-03-30_10-00-37.jpg";
import Heartshape_cakes3 from "./images1/photo_2025-03-30_10-00-38.jpg";

import Photo_cakes1 from "./images1/photo_2025-03-30_10-02-30.jpg";
import Photo_cakes2 from "./images1/photo_2025-03-30_10-02-31.jpg";
import Photo_cakes3 from "./images1/photo_2025-03-30_10-02-32.jpg";

import chocolate1 from "./images1/photo_2025-03-30_10-07-04.jpg";
import chocolate2 from "./images1/photo_2025-03-30_10-08-49.jpg";
import chocolate3 from "./images1/photo_2025-03-30_10-10-31.jpg";
import chocolate4 from "./images1/photo_2025-03-30_10-11-30.jpg";

import drinks1 from "./images1/photo_2025-03-30_10-14-31.jpg";
import drinks2 from "./images1/photo_2025-03-30_10-14-32.jpg";
import drinks3 from "./images1/photo_2025-03-30_10-14-33.jpg";
import drinks4 from "./images1/photo_2025-03-30_10-14-34.jpg";
import drinks5 from "./images1/photo_2025-03-30_10-14-35.jpg";
import drinks6 from "./images1/photo_2025-03-30_10-14-36.jpg";

import cheese_cake1 from "./cheesecakes/photo_2025-03-30_10-34-05.jpg";
import cheese_cake2 from "./cheesecakes/photo_2025-03-30_10-34-05.jpg";
import cheese_cake3 from "./cheesecakes/photo_2025-03-30_10-34-06.jpg";
import cheese_cake4 from "./cheesecakes/photo_2025-03-30_10-34-06.jpg";
import cheese_pastry1 from "./pastry/photo_2025-03-30_10-33-30.jpg";
import cheese_pastry2 from "./pastry/photo_2025-03-30_10-33-33.jpg";
import cheesecake_jaar1 from "./jaars/photo_2025-03-30_10-32-49.jpg";
import cheesecake_jaar2 from "./jaars/photo_2025-03-30_10-32-50.jpg";


import pudding1 from "./pudding/photo_2025-03-30_18-29-04.jpg";
import pudding2 from "./pudding/photo_2025-03-30_18-29-06.jpg";
import pudding3 from "./pudding/photo_2025-03-30_18-29-07.jpg";
import pudding4 from "./pudding/photo_2025-03-30_18-29-08.jpg";
import pudding5 from "./pudding/photo_2025-03-30_18-29-08 (2).jpg";
import pudding6 from "./pudding/photo_2025-03-30_18-29-09.jpg";



// static 
// const allProducts = [
//   // Brownies
//   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
//   { name: "Cookie Brownie", category: "Brownies", image: Cakes, price: "₹110" },
//   { name: "Millionaire Brownie", category: "Brownies", image: Pastries, price: "₹120" },
//   { name: "Classic Brownie", category: "Brownies", image: Sandwiches, price: "₹100", bestseller: true },
//   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
//   { name: "Walnut Brownie", category: "Brownies", image: Breads, price: "₹125" },
//   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
//   { name: "Nutella Brownie", category: "Brownies", image: Cakes1, price: "₹140" },

//   // Biscuits, Cookies & Crackers
//   { name: "Chocolate Chip Cookies", category: "Biscuits, Cookies & Crackers", image: Cakes, price: "₹50" },
//   { name: "Oatmeal Raisin Cookies", category: "Biscuits, Cookies & Crackers", image: Pastries, price: "₹60" },
//   { name: "Butter Crackers", category: "Biscuits, Cookies & Crackers", image: Brownies, price: "₹40" },
//   { name: "Almond Cookies", category: "Biscuits, Cookies & Crackers", image: Breads, price: "₹70" },
//   { name: "Ginger Biscuits", category: "Biscuits, Cookies & Crackers", image: Beverages, price: "₹55" },

//   // Breads
//   { name: "Garlic Bread", category: "Breads", image: Cookies, price: "₹90" },
//   { name: "Multigrain Bread", category: "Breads", image: Croissants, price: "₹80" },
//   { name: "Classic White Bread", category: "Breads", image: Sandwiches, price: "₹70" },
//   { name: "French Baguette", category: "Breads", image: Cakes1, price: "₹100" },
//   { name: "Sourdough Bread", category: "Breads", image: Pastries, price: "₹110" },

//   // Cakes
//   { name: "Delicious Cake", category: "Cakes", image: Cakes1, price: "₹150" },
//   { name: "Chocolate Truffle Cake", category: "Cakes", image: Cakes, price: "₹200" },
//   { name: "Strawberry Shortcake", category: "Cakes", image: Croissants, price: "₹180" },
//   { name: "Carrot Cake", category: "Cakes", image: Beverages, price: "₹160" },
//   { name: "Lemon Cake", category: "Cakes", image: Brownies, price: "₹170" },

//   // Combos
//   { name: "Brownie & Coffee Combo", category: "Combos", image: Cakes1, price: "₹180" },
//   { name: "Cake & Cookie Combo", category: "Combos", image: Sandwiches, price: "₹210" },
//   { name: "Pastry & Sandwich Combo", category: "Combos", image: Cookies, price: "₹250" },
//   { name: "Cakes & Beverages Combo", category: "Combos", image: Cakes, price: "₹280" },
//   { name: "Cookies & Milk Combo", category: "Combos", image: Beverages, price: "₹150" },

//   // Croissants & Danishes
//   { name: "Butter Croissant", category: "Croissants & Danishes", image: Breads, price: "₹90" },
//   { name: "Almond Croissant", category: "Croissants & Danishes", image: Cakes1, price: "₹110" },
//   { name: "Chocolate Croissant", category: "Croissants & Danishes", image: Pastries, price: "₹120" },
//   { name: "Cinnamon Danish", category: "Croissants & Danishes", image: Sandwiches, price: "₹130" },
//   { name: "Apple Danish", category: "Croissants & Danishes", image: Beverages, price: "₹140" },

//   // Desserts & Cupcakes
//   { name: "Chocolate Cupcake", category: "Desserts & Cupcakes", image: Cookies, price: "₹80" },
//   { name: "Vanilla Cupcake", category: "Desserts & Cupcakes", image: Brownies, price: "₹75" },
//   { name: "Red Velvet Cupcake", category: "Desserts & Cupcakes", image: Cakes, price: "₹90" },
//   { name: "Lemon Meringue Cupcake", category: "Desserts & Cupcakes", image: Breads, price: "₹100" },
//   { name: "Carrot Cupcake", category: "Desserts & Cupcakes", image: Croissants, price: "₹95" },

//   // Pastries
//   { name: "Classic Chocolate Pastry", category: "Pastries", image: Cakes1, price: "₹100" },
//   { name: "Strawberry Pastry", category: "Pastries", image: Sandwiches, price: "₹110" },
//   { name: "Black Forest Pastry", category: "Pastries", image: Croissants, price: "₹120" },
//   { name: "Vanilla Pastry", category: "Pastries", image: Cakes, price: "₹90" },
//   { name: "Butterscotch Pastry", category: "Pastries", image: Beverages, price: "₹130" },

//   // Sandwiches & Savouries
//   { name: "Veg Sandwich", category: "Sandwiches & Savouries", image: Cakes, price: "₹80" },
//   { name: "Chicken Sandwich", category: "Sandwiches & Savouries", image: Cakes1, price: "₹120" },
//   { name: "Cheese Sandwich", category: "Sandwiches & Savouries", image: Pastries, price: "₹100" },
//   { name: "Grilled Veg Sandwich", category: "Sandwiches & Savouries", image: Brownies, price: "₹90" },
//   { name: "Club Sandwich", category: "Sandwiches & Savouries", image: Beverages, price: "₹150" },

//   // Tea Cakes
//   { name: "Lemon Tea Cake", category: "Tea Cakes", image: Breads, price: "₹95" },
//   { name: "Cinnamon Tea Cake", category: "Tea Cakes", image: Cakes, price: "₹105" },
//   { name: "Chocolate Tea Cake", category: "Tea Cakes", image: Cookies, price: "₹110" },
//   { name: "Orange Tea Cake", category: "Tea Cakes", image: Croissants, price: "₹100" },
//   { name: "Carrot Tea Cake", category: "Tea Cakes", image: Pastries, price: "₹120" },

//   // Beverages
//   { name: "Iced Coffee", category: "Beverages", image: Brownies, price: "₹80" },
//   { name: "Hot Chocolate", category: "Beverages", image: Sandwiches, price: "₹90" },
//   { name: "Lemonade", category: "Beverages", image: Cakes1, price: "₹60" },
//   { name: "Green Tea", category: "Beverages", image: Cookies, price: "₹50" },
//   { name: "Milkshake", category: "Beverages", image: Beverages, price: "₹120" },

//   // Gifting
//   { name: "Brownie Gift Box", category: "Gifting", image: Brownies, price: "₹350" },
//   { name: "Cake Gift Box", category: "Gifting", image: Cakes1, price: "₹400" },
//   { name: "Cookies Gift Box", category: "Gifting", image: Pastries, price: "₹300" },
//   { name: "Pastry Gift Box", category: "Gifting", image: Breads, price: "₹250" },
//   { name: "Gourmet Gift Hamper", category: "Gifting", image: Beverages, price: "₹500" },

//   // Collectibles
//   { name: "Vintage Tea Set", category: "Collectibles", image: Cookies, price: "₹1000" },
//   { name: "Collector's Plate", category: "Collectibles", image: Cakes, price: "₹1200" },
//   { name: "Handcrafted Mug", category: "Collectibles", image: Cakes1, price: "₹800" },
//   { name: "Classic Tin Canister", category: "Collectibles", image: Brownies, price: "₹600" },
//   { name: "Antique Candle Holder", category: "Collectibles", image: Breads, price: "₹700" },

//   // Strawberry Specials
//   { name: "Strawberry Tart", category: "Strawberry Specials", image: Cakes, price: "₹130" },
//   { name: "Strawberry Cheesecake", category: "Strawberry Specials", image: Brownies, price: "₹150" },
//   { name: "Strawberry Milkshake", category: "Strawberry Specials", image: Beverages, price: "₹120" },
//   { name: "Strawberry Cupcake", category: "Strawberry Specials", image: Pastries, price: "₹100" },
//   { name: "Strawberry Jam", category: "Strawberry Specials", image: Croissants, price: "₹90" }
// ];

const allProducts = [
  // Cakes (Reversed order)
  { name: "Fresh fruit cake (1 kg)", category: "Cakes", price: "₹600", image: CakeImage1 },
  { name: "Fresh fruit cake (1/2 kg)", category: "Cakes", price: "₹1000", image: CakeImage2 },
  { name: "Brownie cake (1 kg)", category: "Cakes", price: "₹1800", image: CakeImage3 },
  { name: "Brownie cake (1/2 kg)", category: "Cakes", price: "₹1000", image: CakeImage4 },
  { name: "Redvelvet cupcake", category: "Cakes", price: "₹60", image: CakeImage5 },
  { name: "Vanilla cupcake", category: "Cakes", price: "₹30", image: CakeImage6 },
  { name: "Choco cupcake", category: "Cakes", price: "₹30", image: CakeImage7 },
  { name: "Brownie with Icecream", category: "Cakes", price: "₹150", image: CakeImage8 },
  { name: "Hot chocolate brownie", category: "Cakes", price: "₹120", image: CakeImage9 },
  { name: "Truffle pastry", category: "pastry", price: "₹80", image: CakeImage10 },
  { name: "Mango pastry", category: "pastry", price: "₹60", image: CakeImage11 },
  { name: "Kitkat pastry", category: "pastry", price: "₹80", image: CakeImage12 },
  { name: "Oreo pastry", category: "pastry", price: "₹80", image: CakeImage13 },
  { name: "Blackcurrant pastry", category: "pastry", price: "₹100", image: CakeImage14 },
  { name: "Blueberry pastry", category: "pastry", price: "₹90", image: CakeImage15 },
  { name: "Redvelvet pastry", category: "pastry", price: "₹100", image: CakeImage16 },
  { name: "Whiteforest pastry", category: "pastry", price: "₹60", image: CakeImage17 },
  { name: "Butterscotch pastry", category: "pastry", price: "₹60", image: CakeImage18 },
  { name: "Strawberry pastry", category: "pastry", price: "₹40", image: CakeImage19 },
  { name: "Pineapple pastry", category: "pastry", price: "₹40", image: CakeImage20 },
  { name: "Blackforeat pastry", category: "pastry", price: "₹50", image: CakeImage21 },
  { name: "Chocolate pastry (1 piece)", category: "pastry", price: "₹60", image: CakeImage22 },
  { name: "Coffee cake (1 kg)", category: "Cakes", price: "₹800", image: CakeImage23 },
  { name: "Coffee cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage24 },
  { name: "Redvelevet cake (1 kg)", category: "Cakes", price: "₹850", image: CakeImage25 },
  { name: "Redvelevet cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage26 },
  { name: "Vanilla cake (1 kg)", category: "Cakes", price: "₹450", image: CakeImage27 },
  { name: "Vanilla cake (1/2 kg)", category: "Cakes", price: "₹300", image: CakeImage28 },
  { name: "Rasmalai cake (1/2 kg)", category: "Cakes", price: "₹400", image: CakeImage29 },
  { name: "Rasmalai cake (1 kg)", category: "Cakes", price: "₹700", image: CakeImage30 },
  { name: "Truffle cake (1/2 kg)", category: "Cakes", price: "₹600", image: CakeImage31 },
  { name: "Truffle cake (1 kg)", category: "Cakes", price: "₹1000", image: CakeImage32 },
  { name: "Kitkat cake (1/2 kg)", category: "Cakes", price: "₹900", image: CakeImage33 },
  { name: "Kitkat cake (1 kg)", category: "Cakes", price: "₹1600", image: CakeImage34 },
  { name: "Oreo cake (1/2 kg)", category: "Cakes", price: "₹400", image: CakeImage35 },
  { name: "Oreo cake (1 kg)", category: "Cakes", price: "₹700", image: CakeImage36 },
  { name: "Blackcurrant cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage37 },
  { name: "Blackcurrant cake (1 kg)", category: "Cakes", price: "₹800", image: CakeImage38 },
  { name: "Blueberry cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage39 },
  { name: "Blueberry cake (1 kg)", category: "Cakes", price: "₹900", image: CakeImage40 },
  { name: "White forest cake (1/2 kg)", category: "Cakes", price: "₹300", image: CakeImage41 },
  { name: "White forest cake (1 kg)", category: "Cakes", price: "₹500", image: CakeImage42 },
  { name: "Butterscotch cake (1 kg)", category: "Cakes", price: "₹300", image: CakeImage43 },
  { name: "Butterscotch cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage44 },
  { name: "Pineapple cake (1/2 kg)", category: "Cakes", price: "₹250", image: CakeImage45 },
  { name: "Pineapple cake (1 kg)", category: "Cakes", price: "₹500", image: CakeImage46 },
  { name: "Strawberry cake (1/2 kg)", category: "Cakes", price: "₹250", image: CakeImage47 },
  { name: "Strawberry cake (1 kg)", category: "Cakes", price: "₹500", image: CakeImage48 },
  { name: "Black forest cake (1/2 kg)", category: "Cakes", price: "₹300", image: CakeImage49 },
  { name: "Black forest cake (1 kg)", category: "Cakes", price: "₹500", image: CakeImage50 },
  { name: "Chocolate cake (1/2 kg)", category: "Cakes", price: "₹300", image: CakeImage51 },
  { name: "Chocolate cake (1 kg)", category: "Cakes", price: "₹550", image: CakeImage52 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake1 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake2 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake3 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake4 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake5 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake6 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake7 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake8 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake9 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake10 },
  { name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake11 },
  { name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake1 },
  { name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake2 },
  { name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake3 },
  { name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake4 },
  { name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake5 },
  { name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake6 },
  { name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake7 },
  { name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes1 },
  { name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes2 },
  { name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes3 },
  { name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes4 },
  { name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes5 },
  { name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes6 },
  { name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes7 },
  { name: "Heartshape cakes", category: "Heartshape cakes", price: "₹700", image: Heartshape_cakes1 },
  { name: "Heartshape cakes", category: "Heartshape cakes", price: "₹700", image: Heartshape_cakes2 },
  { name: "Heartshape cakes", category: "Heartshape cakes", price: "₹700", image: Heartshape_cakes3 },
  { name: "Photo cakes", category: "Photo cakes", price: "₹700", image: Photo_cakes1 },
  { name: "Photo cakes", category: "Photo cakes", price: "₹700", image: Photo_cakes2 },
  { name: "Photo cakes", category: "Photo cakes", price: "₹700", image: Photo_cakes3 },
  { name: "Cake +red roses+2 chocolate 400 gm", category: "chocolate cakes", price: "₹1400", image: chocolate1 },
  { name: "Black forest cake with red roses 500gm", category: "chocolate cakes", price: "₹1199", image: chocolate2 },
  { name: "Bouquet with chocolate cake 500 gm", category: "chocolate cakes", price: "₹1400", image: chocolate3 },
  { name: "Butterscotch cake with bouquet", category: "chocolate cakes", price: "₹1199", image: chocolate4 },
  { name: "Cold coffee", category: "Shakes", price: "₹80", image: drinks1 },
  { name: "Strawberry shake", category: "Shakes", price: "₹70", image: drinks2 },
  { name: "Pineapple shake", category: "Shakes", price: "₹80", image: drinks3 },
  { name: "Kitkat shake", category: "Shakes", price: "₹120", image: drinks4 },
  { name: "Brownie shake", category: "Shakes", price: "₹150", image: drinks5 },
  { name: "Oreo shake", category: "Shakes", price: "₹100", image: drinks6 },
  
  { name: "Pineapple pudding", category: "pudding", price: "₹70", image: pudding1 },
  { name: "Strawberry pudding", category: "pudding", price: "₹80", image: pudding2 },
  { name: "Blueberry pudding", category: "pudding", price: "₹100", image: pudding3 },
  { name: "Chocolate pudding", category: "pudding", price: "₹100", image: pudding4 },
  { name: "Oreo pudding", category: "pudding", price: "₹80", image: pudding5 },
  { name: "Brownie pudding", category: "pudding", price: "₹100", image: pudding6 },
  
  { name: "Blueberry cheesecake jaar", category: "cheesecake jaar", price: "₹300 (per piece)", image: cheesecake_jaar1 },
  { name: "Lotus Biscoff cheese jaar", category: "cheesecake jaar", price: "₹280 (per piece)", image: cheesecake_jaar2 },
  
  { name: "Blueberry cheese pastry", category: "cheese pastry", price: "₹180 (per piece)", image: cheese_pastry1 },
  { name: "Lotus Biscoff cheese pastry", category: "cheese pastry", price: "₹180 (per piece)", image: cheese_pastry2 },
  
  { name: "Blueberry cheese cake 400 gm", category: "cheese cake", price: "₹900", image: cheese_cake1 },
  { name: "Blueberry cheese cake 700 gm", category: "cheese cake", price: "₹1600", image: cheese_cake2 },
  { name: "Lotus Biscoff cheese cake 400 gm", category: "cheese cake", price: "₹1199", image: cheese_cake3 },
  { name: "Lotus Biscoff cheese cake 700 gm", category: "cheese cake", price: "₹1000", image: cheese_cake4 },
];
// static
// const categories = [
//   "Brownies",
//   "Biscuits, Cookies & Crackers",
//   "Breads",
//   "Cakes",
//   "Combos",
//   "Croissants & Danishes",
//   "Desserts & Cupcakes",
//   "Pastries",
//   "Sandwiches & Savouries",
//   "Tea Cakes",
//   "Beverages",
//   "Gifting",
//   "Collectibles",
//   "Strawberry Specials",
// ];

const categories = [
  "Cakes",
  // "Pastries",
  ,"pastry",
  "Kids cakes",
  "customised cake",
  "Anniversary cakes",
  "Heartshape cakes",
  "Photo cakes",
  "chocolate cakes",
  "Shakes",
  "pudding",
  "cheesecake jaar",
  "cheese pastry",
  "cheese cake",
];

const TheAllProducts = () => {
  const location = useLocation(); // Get the current location
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // This effect will run whenever the route changes.
  useEffect(() => {
    if (location.pathname === "/products") {
      // Reset the category state if needed
      setSelectedCategory(null);
    }
  }, [location]);

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    // <div className="container mx-auto py-12">
    //   {/* Breadcrumb Navigation */}
    //   <nav className="text-gray-600 mb-4">
    //     <Link to="/" className="text-gray-600 hover:text-brown no-underline">Home</Link> &gt; 
    //     <Link to="/products" className="text-gray-600 hover:text-brown no-underline">Products</Link>
    //     {selectedCategory && ` > ${selectedCategory}`}
    //   </nav>

    //   <div className="flex gap-8">
    //     {/* Sidebar (Hidden initially) */}
    //     {showFilters && (
    //       <div className="w-1/4 border-r pr-6">
    //         <h2 className="font-bold text-lg mb-4">FILTERS</h2>
    //         <label className="flex items-center space-x-2 mb-2">
    //           <input type="checkbox" className="accent-brown" />
    //           <span>Egg</span>
    //         </label>
    //         <label className="flex items-center space-x-2 mb-4">
    //           <input type="checkbox" className="accent-brown" />
    //           <span>Eggless</span>
    //         </label>

    //         <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
    //         <ul className="space-y-2 text-gray-700">
    //           {categories.map((category, index) => (
    //             <li
    //               key={index}
    //               className="cursor-pointer hover:text-brown"
    //               onClick={() => setSelectedCategory(category)}
    //             >
    //               &gt; {category}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     )}

    //     {/* Product Grid */}
    //     <div className={showFilters ? "w-3/4" : "w-full"}>
    //       <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Products"}</h1>

    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {filteredProducts.map((product, index) => (
    //           <div
    //             key={index}
    //             className="text-center relative cursor-pointer group"
    //             onClick={() => {
    //               setSelectedCategory(product.category);
    //               setShowFilters(true);
    //             }}
    //           >
    //             {product.bestseller && (
    //               <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
    //                 Bestseller
    //               </span>
    //             )}
    //             <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
    //               <img
    //                 src={product.image}
    //                 alt={product.name}
    //                 className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
    //               />
    //             </div>
    //             <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
    //             <p className="text-gray-600">{product.price}</p>
    //             <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
    //             <Link to="/ProductPageDashboard">ORDER ONLINE</Link>
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
<div className="container mx-auto py-12">
  {/* Breadcrumb Navigation */}
  <nav className="text-gray-600 mb-4 pl-4 md:pl-0">
    <Link to="/" className="text-gray-600 hover:text-brown no-underline">Home</Link> &gt;
    <Link to="/products" className="text-gray-600 hover:text-brown no-underline">Products</Link>
    {selectedCategory && ` > ${selectedCategory}`}
  </nav>

  <div className="flex flex-col md:flex-row gap-8">
    {/* Sidebar (Hidden initially) */}
    {showFilters && (
      <div className="w-full md:w-1/4 border-r pr-6 md:pl-4 pl-4 md:block">
        <h2 className="font-bold text-lg mb-4">FILTERS</h2>
        <label className="flex items-center space-x-2 mb-2">
          <input type="checkbox" className="accent-brown" />
          <span>Egg</span>
        </label>
        <label className="flex items-center space-x-2 mb-4">
          <input type="checkbox" className="accent-brown" />
          <span>Eggless</span>
        </label>

        <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
        <ul className="space-y-2 text-gray-700">
          {categories.map((category, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-brown"
              onClick={() => setSelectedCategory(category)}
            >
              &gt; {category}
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Product Grid */}
    <div className={showFilters ? "w-full md:w-3/4" : "w-full"}>
      <h1 className="text-4xl font-bold mb-6 pl-4 md:pl-0">{selectedCategory || "All Products"}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="text-center relative cursor-pointer group"
            onClick={() => {
              setSelectedCategory(product.category);
              setShowFilters(true);
            }}
          >
            {product.bestseller && (
              <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
                Bestseller
              </span>
            )}
            <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
              <Link to="/ProductPageDashboard">ORDER ONLINE</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default TheAllProducts;
