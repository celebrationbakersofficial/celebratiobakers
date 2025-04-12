// import React, { useEffect, useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";
// import Cakes1 from "./prakash-meghani-07bBNmiV7ag-unsplash (1).jpg";
// import Footer from "../Footer";
// import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";
// import Navbar from "../Navbar/Navbar";


// const categories = [
//   "Featured Items", "Combos @15% OFF", "Women's Day Specials", "Ramadan Specials",
//   "Cakes", "Pastries", "Brownies", "Desserts & Cupcakes", "Sandwiches & Savouries",
//   "Croissants & Danishes", "Biscuits, Cookies & Crackers", "Beverages", "Tea Cakes"
// ];

// const products = [
//   // Featured Items
//   { name: "Featured Brownie", category: "Featured Items", image: Brownies, price: "₹150", bestseller: true },
//   { name: "Featured Cake", category: "Featured Items", image: Cakes1, price: "₹250" },

//   // Combos @15% OFF
//   { name: "Brownie & Coffee Combo", category: "Combos @15% OFF", image: Cakes1, price: "₹180" },
//   { name: "Cake & Cookie Combo", category: "Combos @15% OFF", image: Sandwiches, price: "₹210" },

//   // Women's Day Specials
//   { name: "Chocolate Truffle Cake", category: "Women's Day Specials", image: Cakes, price: "₹200" },
//   { name: "Red Velvet Cupcake", category: "Women's Day Specials", image: Cakes1, price: "₹90" },

//   // Ramadan Specials
//   { name: "Overload Brownie [1 Piece]", category: "Ramadan Specials", image: Pastries, price: "₹120" },
//   { name: "Date Cake", category: "Ramadan Specials", image: Croissants, price: "₹150" },

//   // Cakes
//   { name: "Delicious Cake", category: "Cakes", image: Cakes1, price: "₹150" },
//   { name: "Chocolate Truffle Cake", category: "Cakes", image: Cakes, price: "₹200" },
//   { name: "Strawberry Shortcake", category: "Cakes", image: Croissants, price: "₹180" },
//   { name: "Carrot Cake", category: "Cakes", image: Beverages, price: "₹160" },
//   { name: "Lemon Cake", category: "Cakes", image: Brownies, price: "₹170" },

//   // Pastries
//   { name: "Classic Chocolate Pastry", category: "Pastries", image: Cakes1, price: "₹100" },
//   { name: "Strawberry Pastry", category: "Pastries", image: Sandwiches, price: "₹110" },
//   { name: "Black Forest Pastry", category: "Pastries", image: Croissants, price: "₹120" },
//   { name: "Vanilla Pastry", category: "Pastries", image: Cakes, price: "₹90" },
//   { name: "Butterscotch Pastry", category: "Pastries", image: Beverages, price: "₹130" },

//   // Brownies
//   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
//   { name: "Cookie Brownie", category: "Brownies", image: Cakes, price: "₹110" },
//   { name: "Millionaire Brownie", category: "Brownies", image: Pastries, price: "₹120" },
//   { name: "Classic Brownie", category: "Brownies", image: Sandwiches, price: "₹100", bestseller: true },
//   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
//   { name: "Walnut Brownie", category: "Brownies", image: Breads, price: "₹125" },
//   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
//   { name: "Nutella Brownie", category: "Brownies", image: Cakes1, price: "₹140" },

//   // Desserts & Cupcakes
//   { name: "Chocolate Cupcake", category: "Desserts & Cupcakes", image: Cookies, price: "₹80" },
//   { name: "Vanilla Cupcake", category: "Desserts & Cupcakes", image: Brownies, price: "₹75" },
//   { name: "Red Velvet Cupcake", category: "Desserts & Cupcakes", image: Cakes, price: "₹90" },
//   { name: "Lemon Meringue Cupcake", category: "Desserts & Cupcakes", image: Breads, price: "₹100" },
//   { name: "Carrot Cupcake", category: "Desserts & Cupcakes", image: Croissants, price: "₹95" },

//   // Sandwiches & Savouries
//   { name: "Veg Sandwich", category: "Sandwiches & Savouries", image: Cakes, price: "₹80" },
//   { name: "Chicken Sandwich", category: "Sandwiches & Savouries", image: Cakes1, price: "₹120" },
//   { name: "Cheese Sandwich", category: "Sandwiches & Savouries", image: Pastries, price: "₹100" },
//   { name: "Grilled Veg Sandwich", category: "Sandwiches & Savouries", image: Brownies, price: "₹90" },
//   { name: "Club Sandwich", category: "Sandwiches & Savouries", image: Beverages, price: "₹150" },

//   // Croissants & Danishes
//   { name: "Butter Croissant", category: "Croissants & Danishes", image: Breads, price: "₹90" },
//   { name: "Almond Croissant", category: "Croissants & Danishes", image: Cakes1, price: "₹110" },
//   { name: "Chocolate Croissant", category: "Croissants & Danishes", image: Pastries, price: "₹120" },
//   { name: "Cinnamon Danish", category: "Croissants & Danishes", image: Sandwiches, price: "₹130" },
//   { name: "Apple Danish", category: "Croissants & Danishes", image: Beverages, price: "₹140" },

//   // Biscuits, Cookies & Crackers
//   { name: "Chocolate Chip Cookies", category: "Biscuits, Cookies & Crackers", image: Cakes, price: "₹50" },
//   { name: "Oatmeal Raisin Cookies", category: "Biscuits, Cookies & Crackers", image: Pastries, price: "₹60" },
//   { name: "Butter Crackers", category: "Biscuits, Cookies & Crackers", image: Brownies, price: "₹40" },
//   { name: "Almond Cookies", category: "Biscuits, Cookies & Crackers", image: Breads, price: "₹70" },
//   { name: "Ginger Biscuits", category: "Biscuits, Cookies & Crackers", image: Beverages, price: "₹55" },

//   // Beverages
//   { name: "Iced Coffee", category: "Beverages", image: Brownies, price: "₹80" },
//   { name: "Hot Chocolate", category: "Beverages", image: Sandwiches, price: "₹90" },
//   { name: "Lemonade", category: "Beverages", image: Cakes1, price: "₹60" },
//   { name: "Green Tea", category: "Beverages", image: Cookies, price: "₹50" },
//   { name: "Milkshake", category: "Beverages", image: Beverages, price: "₹120" },

//   // Tea Cakes
//   { name: "Lemon Tea Cake", category: "Tea Cakes", image: Breads, price: "₹95" },
//   { name: "Cinnamon Tea Cake", category: "Tea Cakes", image: Cakes, price: "₹105" },
//   { name: "Chocolate Tea Cake", category: "Tea Cakes", image: Cookies, price: "₹110" },
//   { name: "Orange Tea Cake", category: "Tea Cakes", image: Croissants, price: "₹100" },
//   { name: "Carrot Tea Cake", category: "Tea Cakes", image: Pastries, price: "₹120" },

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


// export default function ProductPageDashboard() {
//   const [cart, setCart] = useState([]);
//   const [isSticky, setIsSticky] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open

//   // Handle scroll event to toggle sticky class
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = (state) => {
//     setMenuOpen(state); // Toggle menu state when the hamburger icon is clicked
//   };
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const updateQuantity = (id, delta) => {
//     setCart((prev) => prev
//       .map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)
//     );
//   };

//   return (
//     <div>
//     <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
//     <div className="flex bg-gray-100 min-h-screen p-4">
//       {/* Sidebar */}
//       <aside className="w-1/5 bg-white p-4 shadow rounded-lg">
//         <h2 className="text-lg font-semibold mb-2">Categories</h2>
//         <ul>
//           {categories.map((cat, idx) => (
//             <li key={idx} className="py-2 cursor-pointer hover:text-green-600">{cat}</li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 px-6">
//         <h2 className="text-xl font-bold mb-4">Featured Items</h2>
//         <div className="grid grid-cols-4 gap-4">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white p-4 shadow rounded-lg">
//               <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
//               <h3 className="text-md font-semibold">{product.name}</h3>
//               <p className="text-green-600 font-bold">₹{product.price}</p>
//               <button
//                 className="mt-2 bg-green-500 text-white py-1 px-3 rounded"
//                 onClick={() => addToCart(product)}
//               >
//                 ADD +
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Cart */}
//       <aside className="w-1/4 bg-white p-4 shadow rounded-lg">
//         <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
//         {cart.length === 0 ? <p>Cart is empty</p> : (
//           cart.map((item) => (
//             <div key={item.id} className="flex justify-between items-center mb-2">
//               <p>{item.name} ({item.quantity})</p>
//               <div>
//                 <button onClick={() => updateQuantity(item.id, -1)} className="px-2">-</button>
//                 <button onClick={() => updateQuantity(item.id, 1)} className="px-2">+</button>
//               </div>
//             </div>
//           ))
//         )}
//         <button className="w-full mt-4 bg-green-500 text-white py-2 rounded">Checkout</button>
//       </aside>
//     </div>
//     <Footer />
//     <ScrollToTopButton />
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";
// import Cakes1 from "./prakash-meghani-07bBNmiV7ag-unsplash (1).jpg";
// import Footer from "../Footer";
// import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";
// import Navbar from "../Navbar/Navbar";

// const categories = [
//   "Featured Items", "Combos @15% OFF", "Women's Day Specials", "Ramadan Specials",
//   "Cakes", "Pastries", "Brownies", "Desserts & Cupcakes", "Sandwiches & Savouries",
//   "Croissants & Danishes", "Biscuits, Cookies & Crackers", "Beverages", "Tea Cakes"
// ];

// const products = [
//   // Featured Items
//   { name: "Featured Brownie", category: "Featured Items", image: Brownies, price: "₹150", bestseller: true },
//   { name: "Featured Cake", category: "Featured Items", image: Cakes1, price: "₹250" },

//   // Combos @15% OFF
//   { name: "Brownie & Coffee Combo", category: "Combos @15% OFF", image: Cakes1, price: "₹180" },
//   { name: "Cake & Cookie Combo", category: "Combos @15% OFF", image: Sandwiches, price: "₹210" },

//   // Women's Day Specials
//   { name: "Chocolate Truffle Cake", category: "Women's Day Specials", image: Cakes, price: "₹200" },
//   { name: "Red Velvet Cupcake", category: "Women's Day Specials", image: Cakes1, price: "₹90" },

//   // Ramadan Specials
//   { name: "Overload Brownie [1 Piece]", category: "Ramadan Specials", image: Pastries, price: "₹120" },
//   { name: "Date Cake", category: "Ramadan Specials", image: Croissants, price: "₹150" },

//   // Cakes
//   { name: "Delicious Cake", category: "Cakes", image: Cakes1, price: "₹150" },
//   { name: "Chocolate Truffle Cake", category: "Cakes", image: Cakes, price: "₹200" },
//   { name: "Strawberry Shortcake", category: "Cakes", image: Croissants, price: "₹180" },
//   { name: "Carrot Cake", category: "Cakes", image: Beverages, price: "₹160" },
//   { name: "Lemon Cake", category: "Cakes", image: Brownies, price: "₹170" },

//   // Pastries
//   { name: "Classic Chocolate Pastry", category: "Pastries", image: Cakes1, price: "₹100" },
//   { name: "Strawberry Pastry", category: "Pastries", image: Sandwiches, price: "₹110" },
//   { name: "Black Forest Pastry", category: "Pastries", image: Croissants, price: "₹120" },
//   { name: "Vanilla Pastry", category: "Pastries", image: Cakes, price: "₹90" },
//   { name: "Butterscotch Pastry", category: "Pastries", image: Beverages, price: "₹130" },

//   // Brownies
//   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
//   { name: "Cookie Brownie", category: "Brownies", image: Cakes, price: "₹110" },
//   { name: "Millionaire Brownie", category: "Brownies", image: Pastries, price: "₹120" },
//   { name: "Classic Brownie", category: "Brownies", image: Sandwiches, price: "₹100", bestseller: true },
//   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
//   { name: "Walnut Brownie", category: "Brownies", image: Breads, price: "₹125" },
//   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
//   { name: "Nutella Brownie", category: "Brownies", image: Cakes1, price: "₹140" },

//   // Desserts & Cupcakes
//   { name: "Chocolate Cupcake", category: "Desserts & Cupcakes", image: Cookies, price: "₹80" },
//   { name: "Vanilla Cupcake", category: "Desserts & Cupcakes", image: Brownies, price: "₹75" },
//   { name: "Red Velvet Cupcake", category: "Desserts & Cupcakes", image: Cakes, price: "₹90" },
//   { name: "Lemon Meringue Cupcake", category: "Desserts & Cupcakes", image: Breads, price: "₹100" },
//   { name: "Carrot Cupcake", category: "Desserts & Cupcakes", image: Croissants, price: "₹95" },

//   // Sandwiches & Savouries
//   { name: "Veg Sandwich", category: "Sandwiches & Savouries", image: Cakes, price: "₹80" },
//   { name: "Chicken Sandwich", category: "Sandwiches & Savouries", image: Cakes1, price: "₹120" },
//   { name: "Cheese Sandwich", category: "Sandwiches & Savouries", image: Pastries, price: "₹100" },
//   { name: "Grilled Veg Sandwich", category: "Sandwiches & Savouries", image: Brownies, price: "₹90" },
//   { name: "Club Sandwich", category: "Sandwiches & Savouries", image: Beverages, price: "₹150" },

//   // Croissants & Danishes
//   { name: "Butter Croissant", category: "Croissants & Danishes", image: Breads, price: "₹90" },
//   { name: "Almond Croissant", category: "Croissants & Danishes", image: Cakes1, price: "₹110" },
//   { name: "Chocolate Croissant", category: "Croissants & Danishes", image: Pastries, price: "₹120" },
//   { name: "Cinnamon Danish", category: "Croissants & Danishes", image: Sandwiches, price: "₹130" },
//   { name: "Apple Danish", category: "Croissants & Danishes", image: Beverages, price: "₹140" },

//   // Biscuits, Cookies & Crackers
//   { name: "Chocolate Chip Cookies", category: "Biscuits, Cookies & Crackers", image: Cakes, price: "₹50" },
//   { name: "Oatmeal Raisin Cookies", category: "Biscuits, Cookies & Crackers", image: Pastries, price: "₹60" },
//   { name: "Butter Crackers", category: "Biscuits, Cookies & Crackers", image: Brownies, price: "₹40" },
//   { name: "Almond Cookies", category: "Biscuits, Cookies & Crackers", image: Breads, price: "₹70" },
//   { name: "Ginger Biscuits", category: "Biscuits, Cookies & Crackers", image: Beverages, price: "₹55" },

//   // Beverages
//   { name: "Iced Coffee", category: "Beverages", image: Brownies, price: "₹80" },
//   { name: "Hot Chocolate", category: "Beverages", image: Sandwiches, price: "₹90" },
//   { name: "Lemonade", category: "Beverages", image: Cakes1, price: "₹60" },
//   { name: "Green Tea", category: "Beverages", image: Cookies, price: "₹50" },
//   { name: "Milkshake", category: "Beverages", image: Beverages, price: "₹120" },

//   // Tea Cakes
//   { name: "Lemon Tea Cake", category: "Tea Cakes", image: Breads, price: "₹95" },
//   { name: "Cinnamon Tea Cake", category: "Tea Cakes", image: Cakes, price: "₹105" },
//   { name: "Chocolate Tea Cake", category: "Tea Cakes", image: Cookies, price: "₹110" },
//   { name: "Orange Tea Cake", category: "Tea Cakes", image: Croissants, price: "₹100" },
//   { name: "Carrot Tea Cake", category: "Tea Cakes", image: Pastries, price: "₹120" },

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

// export default function ProductPageDashboard() {
//   const [cart, setCart] = useState([]);
//   const [isSticky, setIsSticky] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("Featured Items");

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = (state) => {
//     setMenuOpen(state);
//   };

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const updateQuantity = (id, delta) => {
//     setCart((prev) => prev
//       .map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)
//     );
//   };

//   const filteredProducts = products.filter(product => product.category === selectedCategory);

//   return (
//     <div>
//       <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
//       <div className="flex bg-gray-100 min-h-screen p-4">
//         {/* Sidebar */}
//         <aside className="w-1/5 bg-white p-4 shadow rounded-lg">
//           <h2 className="text-lg font-semibold mb-2">Categories</h2>
//           <ul>
//             {categories.map((cat, idx) => (
//               <li
//                 key={idx}
//                 className={`py-2 cursor-pointer hover:text-green-600 ${cat === selectedCategory ? "font-bold" : ""}`}
//                 onClick={() => setSelectedCategory(cat)}  // Update selected category when clicked
//               >
//                 {cat}
//               </li>
//             ))}
//           </ul>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 px-6">
//           <h2 className="text-xl font-bold mb-4">{selectedCategory}</h2>
//           <div className="grid grid-cols-4 gap-4">
//             {filteredProducts.map((product) => (
//               <div key={product.id} className="bg-white p-4 shadow rounded-lg">
//                 <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
//                 <h3 className="text-md font-semibold">{product.name}</h3>
//                 <p className="text-green-600 font-bold">₹{product.price}</p>
//                 <button
//                   className="mt-2 bg-green-500 text-white py-1 px-3 rounded"
//                   onClick={() => addToCart(product)}
//                 >
//                   ADD +
//                 </button>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Cart */}
//         <aside className="w-1/4 bg-white p-4 shadow rounded-lg">
//           <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
//           {cart.length === 0 ? <p>Cart is empty</p> : (
//             cart.map((item) => (
//               <div key={item.id} className="flex justify-between items-center mb-2">
//                 <p>{item.name} ({item.quantity})</p>
//                 <div>
//                   <button onClick={() => updateQuantity(item.id, -1)} className="px-2">-</button>
//                   <button onClick={() => updateQuantity(item.id, 1)} className="px-2">+</button>
//                 </div>
//               </div>
//             ))
//           )}
//           <button className="w-full mt-4 bg-green-500 text-white py-2 rounded">Checkout</button>
//         </aside>
//       </div>
//       <Footer />
//       <ScrollToTopButton />
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";
// import Cakes1 from "./prakash-meghani-07bBNmiV7ag-unsplash (1).jpg";
import Footer from "../Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
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
// const categories = [
//   "Featured Items", "Combos @15% OFF", "Women's Day Specials",
//   // "Ramadan Specials",
//   "Cakes", "Pastries", "Brownies", "Desserts & Cupcakes", "Sandwiches & Savouries",
//   "Croissants & Danishes", "Biscuits, Cookies & Crackers", "Beverages", "Tea Cakes"
// ];

// const products = [
//   // Featured Items
//   { id: 1, name: "Featured Brownie", category: "Featured Items", image: Brownies, price: "₹150", bestseller: true },
//   { id: 2, name: "Featured Cake", category: "Featured Items", image: Cakes1, price: "₹250" },

//   // Combos @15% OFF
//   { id: 3, name: "Brownie & Coffee Combo", category: "Combos @15% OFF", image: Cakes1, price: "₹180" },
//   { id: 4, name: "Cake & Cookie Combo", category: "Combos @15% OFF", image: Sandwiches, price: "₹210" },

//   // Women's Day Specials
//   { id: 5, name: "Chocolate Truffle Cake", category: "Women's Day Specials", image: Cakes, price: "₹200" },
//   { id: 6, name: "Red Velvet Cupcake", category: "Women's Day Specials", image: Cakes1, price: "₹90" },

//   // Ramadan Specials
//   // { id: 7, name: "Overload Brownie [1 Piece]", category: "Ramadan Specials", image: Pastries, price: "₹120" },
//   // { id: 8, name: "Date Cake", category: "Ramadan Specials", image: Croissants, price: "₹150" },

//   // Cakes
//   { id: 9, name: "Delicious Cake", category: "Cakes", image: Cakes1, price: "₹150" },
//   { id: 10, name: "Chocolate Truffle Cake", category: "Cakes", image: Cakes, price: "₹200" },
//   { id: 11, name: "Strawberry Shortcake", category: "Cakes", image: Croissants, price: "₹180" },
//   { id: 12, name: "Carrot Cake", category: "Cakes", image: Beverages, price: "₹160" },
//   { id: 13, name: "Lemon Cake", category: "Cakes", image: Brownies, price: "₹170" },

//   // Pastries
//   { id: 14, name: "Classic Chocolate Pastry", category: "Pastries", image: Cakes1, price: "₹100" },
//   { id: 15, name: "Strawberry Pastry", category: "Pastries", image: Sandwiches, price: "₹110" },
//   { id: 16, name: "Black Forest Pastry", category: "Pastries", image: Croissants, price: "₹120" },
//   { id: 17, name: "Vanilla Pastry", category: "Pastries", image: Cakes, price: "₹90" },
//   { id: 18, name: "Butterscotch Pastry", category: "Pastries", image: Beverages, price: "₹130" },

//   // Brownies
//   { id: 19, name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
//   { id: 20, name: "Cookie Brownie", category: "Brownies", image: Cakes, price: "₹110" },
//   { id: 21, name: "Millionaire Brownie", category: "Brownies", image: Pastries, price: "₹120" },
//   { id: 22, name: "Classic Brownie", category: "Brownies", image: Sandwiches, price: "₹100", bestseller: true },
//   { id: 23, name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
//   { id: 24, name: "Walnut Brownie", category: "Brownies", image: Breads, price: "₹125" },
//   { id: 25, name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
//   { id: 26, name: "Nutella Brownie", category: "Brownies", image: Cakes1, price: "₹140" },

//   // Desserts & Cupcakes
//   { id: 27, name: "Chocolate Cupcake", category: "Desserts & Cupcakes", image: Cookies, price: "₹80" },
//   { id: 28, name: "Vanilla Cupcake", category: "Desserts & Cupcakes", image: Brownies, price: "₹75" },
//   { id: 29, name: "Red Velvet Cupcake", category: "Desserts & Cupcakes", image: Cakes, price: "₹90" },
//   { id: 30, name: "Lemon Meringue Cupcake", category: "Desserts & Cupcakes", image: Breads, price: "₹100" },
//   { id: 31, name: "Carrot Cupcake", category: "Desserts & Cupcakes", image: Croissants, price: "₹95" },

//   // Sandwiches & Savouries
//   { id: 32, name: "Veg Sandwich", category: "Sandwiches & Savouries", image: Cakes, price: "₹80" },
//   { id: 33, name: "Chicken Sandwich", category: "Sandwiches & Savouries", image: Cakes1, price: "₹120" },
//   { id: 34, name: "Cheese Sandwich", category: "Sandwiches & Savouries", image: Pastries, price: "₹100" },
//   { id: 35, name: "Grilled Veg Sandwich", category: "Sandwiches & Savouries", image: Brownies, price: "₹90" },
//   { id: 36, name: "Club Sandwich", category: "Sandwiches & Savouries", image: Beverages, price: "₹150" },

//   // Croissants & Danishes
//   { id: 37, name: "Butter Croissant", category: "Croissants & Danishes", image: Breads, price: "₹90" },
//   { id: 38, name: "Almond Croissant", category: "Croissants & Danishes", image: Cakes1, price: "₹110" },
//   { id: 39, name: "Chocolate Croissant", category: "Croissants & Danishes", image: Pastries, price: "₹120" },
//   { id: 40, name: "Cinnamon Danish", category: "Croissants & Danishes", image: Sandwiches, price: "₹130" },
//   { id: 41, name: "Apple Danish", category: "Croissants & Danishes", image: Beverages, price: "₹140" },

//   // Biscuits, Cookies & Crackers
//   { id: 42, name: "Chocolate Chip Cookies", category: "Biscuits, Cookies & Crackers", image: Cakes, price: "₹50" },
//   { id: 43, name: "Oatmeal Raisin Cookies", category: "Biscuits, Cookies & Crackers", image: Pastries, price: "₹60" },
//   { id: 44, name: "Butter Crackers", category: "Biscuits, Cookies & Crackers", image: Brownies, price: "₹40" },
//   { id: 45, name: "Almond Cookies", category: "Biscuits, Cookies & Crackers", image: Breads, price: "₹70" },
//   { id: 46, name: "Ginger Biscuits", category: "Biscuits, Cookies & Crackers", image: Beverages, price: "₹55" },

//   // Beverages
//   { id: 47, name: "Iced Coffee", category: "Beverages", image: Brownies, price: "₹80" },
//   { id: 48, name: "Hot Chocolate", category: "Beverages", image: Sandwiches, price: "₹90" },
//   { id: 49, name: "Lemonade", category: "Beverages", image: Cakes1, price: "₹60" },
//   { id: 50, name: "Green Tea", category: "Beverages", image: Cookies, price: "₹50" },
//   { id: 51, name: "Milkshake", category: "Beverages", image: Beverages, price: "₹120" },

//   // Tea Cakes
//   { id: 52, name: "Lemon Tea Cake", category: "Tea Cakes", image: Breads, price: "₹95" },
//   { id: 53, name: "Cinnamon Tea Cake", category: "Tea Cakes", image: Cakes, price: "₹105" },
//   { id: 54, name: "Chocolate Tea Cake", category: "Tea Cakes", image: Cookies, price: "₹110" },
//   { id: 55, name: "Orange Tea Cake", category: "Tea Cakes", image: Croissants, price: "₹100" },
//   { id: 56, name: "Carrot Tea Cake", category: "Tea Cakes", image: Pastries, price: "₹120" },

//   // Gifting
//   { id: 57, name: "Brownie Gift Box", category: "Gifting", image: Brownies, price: "₹350" },
//   { id: 58, name: "Cake Gift Box", category: "Gifting", image: Cakes1, price: "₹400" },
//   { id: 59, name: "Cookies Gift Box", category: "Gifting", image: Pastries, price: "₹300" },
//   { id: 60, name: "Pastry Gift Box", category: "Gifting", image: Breads, price: "₹250" },
//   { id: 61, name: "Gourmet Gift Hamper", category: "Gifting", image: Beverages, price: "₹500" },

//   // Collectibles
//   { id: 62, name: "Vintage Tea Set", category: "Collectibles", image: Cookies, price: "₹1000" },
//   { id: 63, name: "Collector's Plate", category: "Collectibles", image: Cakes, price: "₹1200" },
//   { id: 64, name: "Handcrafted Mug", category: "Collectibles", image: Cakes1, price: "₹800" },
//   { id: 65, name: "Classic Tin Canister", category: "Collectibles", image: Brownies, price: "₹600" },
//   { id: 66, name: "Antique Candle Holder", category: "Collectibles", image: Breads, price: "₹700" },

//   // Strawberry Specials
//   { id: 67, name: "Strawberry Tart", category: "Strawberry Specials", image: Cakes, price: "₹130" },
//   { id: 68, name: "Strawberry Cheesecake", category: "Strawberry Specials", image: Brownies, price: "₹150" },
//   { id: 69, name: "Strawberry Milkshake", category: "Strawberry Specials", image: Beverages, price: "₹120" },
//   { id: 70, name: "Strawberry Cupcake", category: "Strawberry Specials", image: Pastries, price: "₹100" },
//   { id: 71, name: "Strawberry Jam", category: "Strawberry Specials", image: Croissants, price: "₹90" }
// ];

// dynamic
// const categories = [
//   "Cakes"
//   ,"pastry"
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
const products = [
  { id: 1, name: "Fresh fruit cake (1 kg)", category: "Featured Items", price: "₹600", image: CakeImage1 },
  { id: 2, name: "Fresh fruit cake (1/2 kg)", category: "Featured Items", price: "₹1000", image: CakeImage2 },
  { id: 3, name: "Brownie cake (1 kg)", category: "Cakes", price: "₹1800", image: CakeImage3 },
  { id: 4, name: "Brownie cake (1/2 kg)", category: "Cakes", price: "₹1000", image: CakeImage4 },
  { id: 5, name: "Redvelvet cupcake", category: "Cakes", price: "₹60", image: CakeImage5 },
  { id: 6, name: "Vanilla cupcake", category: "Cakes", price: "₹30", image: CakeImage6 },
  { id: 7, name: "Choco cupcake", category: "Cakes", price: "₹30", image: CakeImage7 },
  { id: 8, name: "Brownie with Icecream", category: "Cakes", price: "₹150", image: CakeImage8 },
  { id: 9, name: "Hot chocolate brownie", category: "Cakes", price: "₹120", image: CakeImage9 },
  { id: 10, name: "Truffle pastry", category: "Featured Items", price: "₹80", image: CakeImage10 },
  { id: 11, name: "Mango pastry", category: "pastry", price: "₹60", image: CakeImage11 },
  { id: 12, name: "Kitkat pastry", category: "pastry", price: "₹80", image: CakeImage12 },
  { id: 13, name: "Oreo pastry", category: "pastry", price: "₹80", image: CakeImage13 },
  { id: 14, name: "Blackcurrant pastry", category: "pastFeatured Itemsry", price: "₹100", image: CakeImage14 },
  { id: 15, name: "Blueberry pastry", category: "pastry", price: "₹90", image: CakeImage15 },
  { id: 16, name: "Redvelvet pastry", category: "pastry", price: "₹100", image: CakeImage16 },
  { id: 17, name: "Whiteforest pastry", category: "pastry", price: "₹60", image: CakeImage17 },
  { id: 18, name: "Butterscotch pastry", category: "pastry", price: "₹60", image: CakeImage18 },
  { id: 19, name: "Strawberry pastry", category: "pastry", price: "₹40", image: CakeImage19 },
  { id: 20, name: "Pineapple pastry", category: "pastry", price: "₹40", image: CakeImage20 },
  { id: 21, name: "Blackforeat pastry", category: "pastry", price: "₹50", image: CakeImage21 },
  { id: 22, name: "Chocolate pastry (1 piece)", category: "pastry", price: "₹60", image: CakeImage22 },
  { id: 23, name: "Coffee cake (1 kg)", category: "Cakes", price: "₹800", image: CakeImage23 },
  { id: 24, name: "Coffee cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage24 },
  { id: 25, name: "Redvelevet cake (1 kg)", category: "Cakes", price: "₹850", image: CakeImage25 },
  { id: 26, name: "Redvelevet cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage26 },
  { id: 27, name: "Vanilla cake (1 kg)", category: "Cakes", price: "₹450", image: CakeImage27 },
  { id: 28, name: "Vanilla cake (1/2 kg)", category: "Featured Items", price: "₹300", image: CakeImage28 },
  { id: 29, name: "Rasmalai cake (1/2 kg)", category: "Cakes", price: "₹400", image: CakeImage29 },
  { id: 30, name: "Rasmalai cake (1 kg)", category: "Cakes", price: "₹700", image: CakeImage30 },
  { id: 31, name: "Truffle cake (1/2 kg)", category: "Cakes", price: "₹600", image: CakeImage31 },
  { id: 32, name: "Truffle cake (1 kg)", category: "Cakes", price: "₹1000", image: CakeImage32 },
  { id: 33, name: "Kitkat cake (1/2 kg)", category: "Cakes", price: "₹900", image: CakeImage33 },
  { id: 34, name: "Kitkat cake (1 kg)", category: "Cakes", price: "₹1600", image: CakeImage34 },
  { id: 35, name: "Oreo cake (1/2 kg)", category: "Cakes", price: "₹400", image: CakeImage35 },
  { id: 36, name: "Oreo cake (1 kg)", category: "Cakes", price: "₹700", image: CakeImage36 },
  { id: 37, name: "Blackcurrant cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage37 },
  { id: 38, name: "Blackcurrant cake (1 kg)", category: "Cakes", price: "₹800", image: CakeImage38 },
  { id: 39, name: "Blueberry cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage39 },
  { id: 40, name: "Blueberry cake (1 kg)", category: "Cakes", price: "₹900", image: CakeImage40 },
  { id: 41, name: "White forest cake (1/2 kg)", category: "Featured Items", price: "₹300", image: CakeImage41 },
  { id: 42, name: "White forest cake (1 kg)", category: "Cakes", price: "₹500", image: CakeImage42 },
  { id: 43, name: "Butterscotch cake (1 kg)", category: "Cakes", price: "₹300", image: CakeImage43 },
  { id: 44, name: "Butterscotch cake (1/2 kg)", category: "Cakes", price: "₹500", image: CakeImage44 },
  { id: 45, name: "Pineapple cake (1/2 kg)", category: "Cakes", price: "₹250", image: CakeImage45 },
  { id: 46, name: "Pineapple cake (1 kg)", category: "Cakes", price: "₹500", image: CakeImage46 },
  { id: 47, name: "Strawberry cake (1/2 kg)", category: "Cakes", price: "₹250", image: CakeImage47 },
  { id: 48, name: "Strawberry cake (1 kg)", category: "Cakes", price: "₹500", image: CakeImage48 },
  { id: 49, name: "Black forest cake (1/2 kg)", category: "Cakes", price: "₹300", image: CakeImage49 },
  { id: 50, name: "Black forest cake (1 kg)", category: "Cakes", price: "₹500", image: CakeImage50 },
  { id: 51, name: "Chocolate cake (1/2 kg)", category: "Cakes", price: "₹300", image: CakeImage51 },
  { id: 52, name: "Chocolate cake (1 kg)", category: "Cakes", price: "₹550", image: CakeImage52 },
  { id: 53, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake1 },
  { id: 54, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake2 },
  { id: 55, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake3 },
  { id: 56, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake4 },
  { id: 57, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake5 },
  { id: 58, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake6 },
  { id: 59, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake7 },
  { id: 60, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake8 },
  { id: 61, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake9 },
  { id: 62, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake10 },
  { id: 63, name: "Barbie cakes 500 gm", category: "Kids cakes", price: "₹700", image: Kids_cake11 },
  { id: 64, name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake1 },
  { id: 65, name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake2 },
  { id: 66, name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake3 },
  { id: 67, name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake4 },
  { id: 68, name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake5 },
  { id: 69, name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake6 },
  { id: 70, name: "customised cake", category: "customised cake", price: "₹700", image: customisedcake7 },
  { id: 71, name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes1 },
  { id: 72, name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes2 },
  { id: 73, name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes3 },
  { id: 74, name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes4 },
  { id: 75, name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes5 },
  { id: 76, name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes6 },
  { id: 77, name: "Anniversary cakes", category: "Anniversary cakes", price: "₹700", image: Anniversary_cakes7 },
  { id: 78, name: "Heartshape cakes", category: "Heartshape cakes", price: "₹700", image: Heartshape_cakes1 },
  { id: 79, name: "Heartshape cakes", category: "Heartshape cakes", price: "₹700", image: Heartshape_cakes2 },
  { id: 80, name: "Heartshape cakes", category: "Heartshape cakes", price: "₹700", image: Heartshape_cakes3 },
  { id: 81, name: "Photo cakes", category: "Photo cakes", price: "₹700", image: Photo_cakes1 },
  { id: 82, name: "Photo cakes", category: "Photo cakes", price: "₹700", image: Photo_cakes2 },
  { id: 83, name: "Photo cakes", category: "Photo cakes", price: "₹700", image: Photo_cakes3 },
  { id: 84, name: "Cake +red roses+2 chocolate 400 gm", category: "chocolate cakes", price: "₹1400", image: chocolate1 },
  { id: 85, name: "Black forest cake with red roses 500gm", category: "chocolate cakes", price: "₹1199", image: chocolate2 },
  { id: 86, name: "Bouquet with chocolate cake 500 gm", category: "chocolate cakes", price: "₹1400", image: chocolate3 },
  { id: 87, name: "Butterscotch cake with bouquet", category: "chocolate cakes", price: "₹1199", image: chocolate4 },
  { id: 88, name: "Cold coffee", category: "Shakes", price: "₹80", image: drinks1 },
  { id: 89, name: "Strawberry shake", category: "Shakes", price: "₹70", image: drinks2 },
  { id: 90, name: "Pineapple shake", category: "Shakes", price: "₹80", image: drinks3 },
  { id: 91, name: "Kitkat shake", category: "Shakes", price: "₹120", image: drinks4 },
  { id: 92, name: "Brownie shake", category: "Shakes", price: "₹150", image: drinks5 },
  { id: 93, name: "Oreo shake", category: "Shakes", price: "₹100", image: drinks6 },
  { id: 94, name: "Pineapple pudding", category: "pudding", price: "₹70", image: pudding1 },
  { id: 95, name: "Strawberry pudding", category: "pudding", price: "₹80", image: pudding2 },
  { id: 96, name: "Blueberry pudding", category: "pudding", price: "₹100", image: pudding3 },
  { id: 97, name: "Chocolate pudding", category: "pudding", price: "₹100", image: pudding4 },
  { id: 98, name: "Oreo pudding", category: "Featured Items", price: "₹80", image: pudding5 },
  { id: 99, name: "Brownie pudding", category: "pudding", price: "₹100", image: pudding6 },
  { id: 100, name: "Blueberry cheesecake jaar", category: "cheesecake jaar", price: "₹300 (per piece)", image: cheesecake_jaar1 },
  { id: 101, name: "Lotus Biscoff cheese jaar", category: "cheesecake jaar", price: "₹280 (per piece)", image: cheesecake_jaar2 },
  { id: 102, name: "Blueberry cheese pastry", category: "cheese pastry", price: "₹180 (per piece)", image: cheese_pastry1 },
  { id: 103, name: "Lotus Biscoff cheese pastry", category: "cheese pastry", price: "₹180 (per piece)", image: cheese_pastry2 },
  { id: 104, name: "Blueberry cheese cake 400 gm", category: "cheese cake", price: "₹900", image: cheese_cake1 },
  { id: 105, name: "Blueberry cheese cake 700 gm", category: "cheese cake", price: "₹1600", image: cheese_cake2 },
  { id: 106, name: "Lotus Biscoff cheese cake 400 gm", category: "cheese cake", price: "₹1199", image: cheese_cake3 },
  { id: 107, name: "Lotus Biscoff cheese cake 700 gm", category: "cheese cake", price: "₹1000", image: cheese_cake4 },
];
export default function ProductPageDashboard() {
  const [cart, setCart] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Featured Items");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleCheckout = () => {
    const subtotal = cart.reduce((total, item) => 
      total + parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity, 0
    );
    const gst = subtotal * 0.18; // 18% GST
    const total = subtotal + gst; // Add GST to subtotal to get total
  
    // Pass the data to the CheckoutPage using navigate
    navigate("/CheckoutPage", { 
      state: { cart, subtotal: Number(subtotal), gst: Number(gst), total: Number(total) } 
    });
  };
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (state) => {
    setMenuOpen(state);
  };
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product) => {
    // Add product to cart (existing addToCart function)
    addToCart(product);

    // Update the state to show the button as added
    setAddedProductId(product.id);

    // Reset the added state after a short duration (optional)
    setTimeout(() => {
      setAddedProductId(null);
    }, 1000); // Reset after 1 second
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        // If product already exists in cart, increase the quantity by 1
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If product doesn't exist in cart, add a new entry with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to the cart!`, {
      position: "top-center",   // Position of the toast
      autoClose: 3000,          // Duration of the toast
      closeOnClick: true,       // Close when clicked
      pauseOnHover: true,       // Pause on hover
      draggable: true,          // Enable dragging
      theme: "light",           // Theme (light/dark)
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity <= 0) {
            return null; // Remove item if quantity reaches 0 or below
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item !== null); // Filter out null values (items with quantity 0 or below)
      return updatedCart;
    });
  };

  const filteredProducts = products.filter((product) => product.category === selectedCategory);
  // Calculate subtotal, GST, and total with GST
  const subtotal = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity,
    0
  ).toFixed(2);

  const gst = (subtotal * 0.18).toFixed(2);
  const totalWithGST = (parseFloat(subtotal) + parseFloat(gst)).toFixed(2);

  return (
    <div>
      <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/5 bg-white p-4 shadow rounded-lg lg:mb-0 mb-4">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <ul>
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className={`py-2 cursor-pointer hover:text-green-600 ${cat === selectedCategory ? "font-bold" : ""}`}
                onClick={() => setSelectedCategory(cat)} // Update selected category when clicked
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6">
          <h2 className="text-xl font-bold mb-4">{selectedCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow rounded-lg">
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
                <h3 className="text-md font-semibold">{product.name}</h3>
                <p className="text-green-600 font-bold">{product.price}</p>
                <button
                  className={`mt-2 bg-green-500 text-white py-1 px-3 rounded  transition-all duration-300 ${
                addedProductId === product.id
                  ? 'bg-green-700 text-white transform scale-105'
                  : 'bg-green-500 text-white'
              }`}
                  onClick={() => handleAddToCart(product)}
                >
                  ADD +
                </button>
              </div>
            ))}
          </div>
        </main>

        {/* Cart */}
        <aside className="w-full lg:w-1/4 bg-white p-4 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b py-2">
                <p>{item.name} [{item.quantity}]</p>
                <div className="flex items-center">
                  {/* Decrease quantity */}
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 border rounded-lg">-</button>
                  <span className="px-3">{item.quantity}</span>
                  {/* Increase quantity */}
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 border rounded-lg">+</button>
                </div>
              </div>
            ))
          )}

{cart.length > 0 && (
            <>
              <div className="flex justify-between text-lg font-semibold py-2">
                <p>Subtotal</p>
                <p>₹ {subtotal}</p>
              </div>
              <div className="flex justify-between text-lg font-semibold py-2">
                <p>GST (18%)</p>
                <p>₹ {gst}</p>
              </div>
              <div className="flex justify-between text-lg font-semibold py-2">
                <p>Total (with GST)</p>
                <p>₹ {totalWithGST}</p>
              </div>
            </>
          )}

          {cart.length > 0 && (
            <button
              className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg text-lg font-semibold"
              onClick={handleCheckout}  // Redirect to checkout page
            >
              Checkout ₹ {totalWithGST}
            </button>
          )}
        </aside>
      </div>
      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

