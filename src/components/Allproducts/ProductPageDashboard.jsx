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
import { FaShoppingCart } from "react-icons/fa";
import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";
import Cakes1 from "./prakash-meghani-07bBNmiV7ag-unsplash (1).jpg";
import Footer from "../Footer";
import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const categories = [
  "Featured Items", "Combos @15% OFF", "Women's Day Specials",
  // "Ramadan Specials",
  "Cakes", "Pastries", "Brownies", "Desserts & Cupcakes", "Sandwiches & Savouries",
  "Croissants & Danishes", "Biscuits, Cookies & Crackers", "Beverages", "Tea Cakes"
];

const products = [
  // Featured Items
  { id: 1, name: "Featured Brownie", category: "Featured Items", image: Brownies, price: "₹150", bestseller: true },
  { id: 2, name: "Featured Cake", category: "Featured Items", image: Cakes1, price: "₹250" },

  // Combos @15% OFF
  { id: 3, name: "Brownie & Coffee Combo", category: "Combos @15% OFF", image: Cakes1, price: "₹180" },
  { id: 4, name: "Cake & Cookie Combo", category: "Combos @15% OFF", image: Sandwiches, price: "₹210" },

  // Women's Day Specials
  { id: 5, name: "Chocolate Truffle Cake", category: "Women's Day Specials", image: Cakes, price: "₹200" },
  { id: 6, name: "Red Velvet Cupcake", category: "Women's Day Specials", image: Cakes1, price: "₹90" },

  // Ramadan Specials
  // { id: 7, name: "Overload Brownie [1 Piece]", category: "Ramadan Specials", image: Pastries, price: "₹120" },
  // { id: 8, name: "Date Cake", category: "Ramadan Specials", image: Croissants, price: "₹150" },

  // Cakes
  { id: 9, name: "Delicious Cake", category: "Cakes", image: Cakes1, price: "₹150" },
  { id: 10, name: "Chocolate Truffle Cake", category: "Cakes", image: Cakes, price: "₹200" },
  { id: 11, name: "Strawberry Shortcake", category: "Cakes", image: Croissants, price: "₹180" },
  { id: 12, name: "Carrot Cake", category: "Cakes", image: Beverages, price: "₹160" },
  { id: 13, name: "Lemon Cake", category: "Cakes", image: Brownies, price: "₹170" },

  // Pastries
  { id: 14, name: "Classic Chocolate Pastry", category: "Pastries", image: Cakes1, price: "₹100" },
  { id: 15, name: "Strawberry Pastry", category: "Pastries", image: Sandwiches, price: "₹110" },
  { id: 16, name: "Black Forest Pastry", category: "Pastries", image: Croissants, price: "₹120" },
  { id: 17, name: "Vanilla Pastry", category: "Pastries", image: Cakes, price: "₹90" },
  { id: 18, name: "Butterscotch Pastry", category: "Pastries", image: Beverages, price: "₹130" },

  // Brownies
  { id: 19, name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
  { id: 20, name: "Cookie Brownie", category: "Brownies", image: Cakes, price: "₹110" },
  { id: 21, name: "Millionaire Brownie", category: "Brownies", image: Pastries, price: "₹120" },
  { id: 22, name: "Classic Brownie", category: "Brownies", image: Sandwiches, price: "₹100", bestseller: true },
  { id: 23, name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
  { id: 24, name: "Walnut Brownie", category: "Brownies", image: Breads, price: "₹125" },
  { id: 25, name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
  { id: 26, name: "Nutella Brownie", category: "Brownies", image: Cakes1, price: "₹140" },

  // Desserts & Cupcakes
  { id: 27, name: "Chocolate Cupcake", category: "Desserts & Cupcakes", image: Cookies, price: "₹80" },
  { id: 28, name: "Vanilla Cupcake", category: "Desserts & Cupcakes", image: Brownies, price: "₹75" },
  { id: 29, name: "Red Velvet Cupcake", category: "Desserts & Cupcakes", image: Cakes, price: "₹90" },
  { id: 30, name: "Lemon Meringue Cupcake", category: "Desserts & Cupcakes", image: Breads, price: "₹100" },
  { id: 31, name: "Carrot Cupcake", category: "Desserts & Cupcakes", image: Croissants, price: "₹95" },

  // Sandwiches & Savouries
  { id: 32, name: "Veg Sandwich", category: "Sandwiches & Savouries", image: Cakes, price: "₹80" },
  { id: 33, name: "Chicken Sandwich", category: "Sandwiches & Savouries", image: Cakes1, price: "₹120" },
  { id: 34, name: "Cheese Sandwich", category: "Sandwiches & Savouries", image: Pastries, price: "₹100" },
  { id: 35, name: "Grilled Veg Sandwich", category: "Sandwiches & Savouries", image: Brownies, price: "₹90" },
  { id: 36, name: "Club Sandwich", category: "Sandwiches & Savouries", image: Beverages, price: "₹150" },

  // Croissants & Danishes
  { id: 37, name: "Butter Croissant", category: "Croissants & Danishes", image: Breads, price: "₹90" },
  { id: 38, name: "Almond Croissant", category: "Croissants & Danishes", image: Cakes1, price: "₹110" },
  { id: 39, name: "Chocolate Croissant", category: "Croissants & Danishes", image: Pastries, price: "₹120" },
  { id: 40, name: "Cinnamon Danish", category: "Croissants & Danishes", image: Sandwiches, price: "₹130" },
  { id: 41, name: "Apple Danish", category: "Croissants & Danishes", image: Beverages, price: "₹140" },

  // Biscuits, Cookies & Crackers
  { id: 42, name: "Chocolate Chip Cookies", category: "Biscuits, Cookies & Crackers", image: Cakes, price: "₹50" },
  { id: 43, name: "Oatmeal Raisin Cookies", category: "Biscuits, Cookies & Crackers", image: Pastries, price: "₹60" },
  { id: 44, name: "Butter Crackers", category: "Biscuits, Cookies & Crackers", image: Brownies, price: "₹40" },
  { id: 45, name: "Almond Cookies", category: "Biscuits, Cookies & Crackers", image: Breads, price: "₹70" },
  { id: 46, name: "Ginger Biscuits", category: "Biscuits, Cookies & Crackers", image: Beverages, price: "₹55" },

  // Beverages
  { id: 47, name: "Iced Coffee", category: "Beverages", image: Brownies, price: "₹80" },
  { id: 48, name: "Hot Chocolate", category: "Beverages", image: Sandwiches, price: "₹90" },
  { id: 49, name: "Lemonade", category: "Beverages", image: Cakes1, price: "₹60" },
  { id: 50, name: "Green Tea", category: "Beverages", image: Cookies, price: "₹50" },
  { id: 51, name: "Milkshake", category: "Beverages", image: Beverages, price: "₹120" },

  // Tea Cakes
  { id: 52, name: "Lemon Tea Cake", category: "Tea Cakes", image: Breads, price: "₹95" },
  { id: 53, name: "Cinnamon Tea Cake", category: "Tea Cakes", image: Cakes, price: "₹105" },
  { id: 54, name: "Chocolate Tea Cake", category: "Tea Cakes", image: Cookies, price: "₹110" },
  { id: 55, name: "Orange Tea Cake", category: "Tea Cakes", image: Croissants, price: "₹100" },
  { id: 56, name: "Carrot Tea Cake", category: "Tea Cakes", image: Pastries, price: "₹120" },

  // Gifting
  { id: 57, name: "Brownie Gift Box", category: "Gifting", image: Brownies, price: "₹350" },
  { id: 58, name: "Cake Gift Box", category: "Gifting", image: Cakes1, price: "₹400" },
  { id: 59, name: "Cookies Gift Box", category: "Gifting", image: Pastries, price: "₹300" },
  { id: 60, name: "Pastry Gift Box", category: "Gifting", image: Breads, price: "₹250" },
  { id: 61, name: "Gourmet Gift Hamper", category: "Gifting", image: Beverages, price: "₹500" },

  // Collectibles
  { id: 62, name: "Vintage Tea Set", category: "Collectibles", image: Cookies, price: "₹1000" },
  { id: 63, name: "Collector's Plate", category: "Collectibles", image: Cakes, price: "₹1200" },
  { id: 64, name: "Handcrafted Mug", category: "Collectibles", image: Cakes1, price: "₹800" },
  { id: 65, name: "Classic Tin Canister", category: "Collectibles", image: Brownies, price: "₹600" },
  { id: 66, name: "Antique Candle Holder", category: "Collectibles", image: Breads, price: "₹700" },

  // Strawberry Specials
  { id: 67, name: "Strawberry Tart", category: "Strawberry Specials", image: Cakes, price: "₹130" },
  { id: 68, name: "Strawberry Cheesecake", category: "Strawberry Specials", image: Brownies, price: "₹150" },
  { id: 69, name: "Strawberry Milkshake", category: "Strawberry Specials", image: Beverages, price: "₹120" },
  { id: 70, name: "Strawberry Cupcake", category: "Strawberry Specials", image: Pastries, price: "₹100" },
  { id: 71, name: "Strawberry Jam", category: "Strawberry Specials", image: Croissants, price: "₹90" }
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
                  className="mt-2 bg-green-500 text-white py-1 px-3 rounded"
                  onClick={() => addToCart(product)}
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
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

