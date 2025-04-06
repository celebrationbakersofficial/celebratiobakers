// // // // // import React from "react";
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import { Autoplay, Navigation, Pagination } from "swiper/modules";
// // // // // import "swiper/css";
// // // // // import "swiper/css/navigation";
// // // // // import "swiper/css/pagination";
// // // // // import "./css/styles.css"; // Your custom styles

// // // // // const sliderImages = [
// // // // //   "https://picsum.photos/id/1015/1600/900",
// // // // //   "https://picsum.photos/id/1020/1600/900",
// // // // //   "https://picsum.photos/id/1035/1600/900",
// // // // // ];

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div className="container">
// // // // //       {/* Background Image Slider */}
// // // // //       <Swiper
// // // // //         modules={[Autoplay, Navigation, Pagination]}
// // // // //         spaceBetween={0}
// // // // //         slidesPerView={1}
// // // // //         loop={true}
// // // // //         autoplay={{ delay: 3000, disableOnInteraction: false }}
// // // // //         navigation
// // // // //         pagination={{ clickable: true }}
// // // // //         className="background-slider"
// // // // //       >
// // // // //         {sliderImages.map((image, index) => (
// // // // //           <SwiperSlide key={index}>
// // // // //             <div
// // // // //               className="slide"
// // // // //               style={{ backgroundImage: `url(${image})` }}
// // // // //             ></div>
// // // // //           </SwiperSlide>
// // // // //         ))}
// // // // //       </Swiper>

// // // // //       {/* Navbar */}
// // // // //       <nav className="navbar">
// // // // //         <div className="logo">celeberationbakers</div>
// // // // //         <ul className="nav-links">
// // // // //           <li>ABOUT US</li>
// // // // //           <li>PRODUCTS</li>
// // // // //           <li>SPECIALITY CAKES</li>
// // // // //           <li>FIND US</li>
// // // // //           <li>CONTACT US</li>
// // // // //         </ul>
// // // // //         <div className="nav-right">
// // // // //           <input type="text" placeholder="Search" className="search-bar" />
// // // // //           <button className="order-button">ORDER ONLINE</button>
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* Hero Section */}
// // // // //       <header className="hero">
// // // // //         <div className="hero-text">
// // // // //           <h1>A taste of savoury heaven!</h1>
// // // // //           <p>CHOOSE FROM OUR RANGE OF SANDWICHES & SAVOURIES.</p>
// // // // //           <button className="know-more">KNOW MORE</button>
// // // // //         </div>
// // // // //       </header>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // import React from "react";
// // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // import { Autoplay, Navigation, Pagination } from "swiper/modules";
// // // // import "swiper/css";
// // // // import "swiper/css/navigation";
// // // // import "swiper/css/pagination";
// // // // import "./css/styles.css"; // Your custom styles
// // // // import AuthenticRecipes from "./components/AuthenticRecipes";
// // // // import Products from "./components/Products";
// // // // import Footer from "./components/Footer";

// // // // const sliderImages = [
// // // //   "https://picsum.photos/id/1015/1600/900",
// // // //   "https://picsum.photos/id/1020/1600/900",
// // // //   "https://picsum.photos/id/1035/1600/900",
// // // // ];

// // // // const App = () => {
// // // //   return (
// // // //     <div className="container">
// // // //       {/* Background Image Slider */}
// // // //       <Swiper
// // // //         modules={[Autoplay, Navigation, Pagination]}
// // // //         spaceBetween={0}
// // // //         slidesPerView={1}
// // // //         loop={true}
// // // //         autoplay={{ delay: 3000, disableOnInteraction: false }}
// // // //         // navigation
// // // //         pagination={{ clickable: true }}
// // // //         className="background-slider"
// // // //       >
// // // //         {sliderImages.map((image, index) => (
// // // //           <SwiperSlide key={index}>
// // // //             <div
// // // //               className="slide"
// // // //               style={{ backgroundImage: `url(${image})` }}
// // // //             ></div>
// // // //           </SwiperSlide>
// // // //         ))}
// // // //       </Swiper>

// // // //       {/* Navbar */}
// // // //       <nav className="navbar">
// // // //         <div className="logo">celeberationbakers</div>
// // // //         <ul className="nav-links">
// // // //           <li>ABOUT US</li>
// // // //           <li>PRODUCTS</li>
// // // //           <li>SPECIALITY CAKES</li>
// // // //           <li>FIND US</li>
// // // //           <li>CONTACT US</li>
// // // //         </ul>
// // // //         <div className="nav-right">
// // // //           <input type="text" placeholder="Search" className="search-bar" />
// // // //           <button className="order-button">ORDER ONLINE</button>
// // // //         </div>
// // // //       </nav>

// // // //       {/* Hero Section */}
// // // //       <header className="hero">
// // // //         <div className="hero-text">
// // // //           <h1>A taste of savoury heaven!</h1>
// // // //           <p>CHOOSE FROM OUR RANGE OF SANDWICHES & SAVOURIES.</p>
// // // //           <button className="know-more">KNOW MORE</button>
// // // //         </div>
// // // //       </header>
// // // //             <AuthenticRecipes />
// // // //             <Products />
// // // //             <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;


// // // // import React from "react";
// // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // import { Autoplay, Navigation, Pagination } from "swiper/modules";
// // // // import "swiper/css";
// // // // import "swiper/css/navigation";
// // // // import "swiper/css/pagination";
// // // // import "./css/styles.css"; // Your custom styles

// // // // const sliderImages = [
// // // //   "https://picsum.photos/id/1015/1600/900",
// // // //   "https://picsum.photos/id/1020/1600/900",
// // // //   "https://picsum.photos/id/1035/1600/900",
// // // // ];

// // // // const App = () => {
// // // //   return (
// // // //     <div className="container">
// // // //       {/* Background Image Slider */}
// // // //       <Swiper
// // // //         modules={[Autoplay, Navigation, Pagination]}
// // // //         spaceBetween={0}
// // // //         slidesPerView={1}
// // // //         loop={true}
// // // //         autoplay={{ delay: 3000, disableOnInteraction: false }}
// // // //         navigation
// // // //         pagination={{ clickable: true }}
// // // //         className="background-slider"
// // // //       >
// // // //         {sliderImages.map((image, index) => (
// // // //           <SwiperSlide key={index}>
// // // //             <div
// // // //               className="slide"
// // // //               style={{ backgroundImage: `url(${image})` }}
// // // //             ></div>
// // // //           </SwiperSlide>
// // // //         ))}
// // // //       </Swiper>

// // // //       {/* Navbar */}
// // // //       <nav className="navbar">
// // // //         <div className="logo">celeberationbakers</div>
// // // //         <ul className="nav-links">
// // // //           <li>ABOUT US</li>
// // // //           <li>PRODUCTS</li>
// // // //           <li>SPECIALITY CAKES</li>
// // // //           <li>FIND US</li>
// // // //           <li>CONTACT US</li>
// // // //         </ul>
// // // //         <div className="nav-right">
// // // //           <input type="text" placeholder="Search" className="search-bar" />
// // // //           <button className="order-button">ORDER ONLINE</button>
// // // //         </div>
// // // //       </nav>

// // // //       {/* Hero Section */}
// // // //       <header className="hero">
// // // //         <div className="hero-text">
// // // //           <h1>A taste of savoury heaven!</h1>
// // // //           <p>CHOOSE FROM OUR RANGE OF SANDWICHES & SAVOURIES.</p>
// // // //           <button className="know-more">KNOW MORE</button>
// // // //         </div>
// // // //       </header>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;

// // // import React from "react";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Autoplay, Navigation, Pagination } from "swiper/modules";
// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/pagination";
// // // import "./css/styles.css"; // Your custom styles
// // // import AuthenticRecipes from "./components/AuthenticRecipes";
// // // import Products from "./components/Products";
// // // import Footer from "./components/Footer";

// // // const sliderImages = [
// // //   "https://picsum.photos/id/1015/1600/900",
// // //   "https://picsum.photos/id/1020/1600/900",
// // //   "https://picsum.photos/id/1035/1600/900",
// // // ];

// // // const App = () => {
// // //   return (
// // //     <div className="container">
// // //       {/* Background Image Slider */}
// // //       <Swiper
// // //         modules={[Autoplay, Navigation, Pagination]}
// // //         spaceBetween={0}
// // //         slidesPerView={1}
// // //         loop={true}
// // //         autoplay={{ delay: 3000, disableOnInteraction: false }}
// // //         // navigation
// // //         pagination={{ clickable: true }}
// // //         className="background-slider"
// // //       >
// // //         {sliderImages.map((image, index) => (
// // //           <SwiperSlide key={index}>
// // //             <div
// // //               className="slide"
// // //               style={{ backgroundImage: `url(${image})` }}
// // //             ></div>
// // //           </SwiperSlide>
// // //         ))}
// // //       </Swiper>

// // //       {/* Navbar */}
// // //       <nav className="navbar">
// // //         <div className="logo">celeberationbakers</div>
// // //         <ul className="nav-links">
// // //           <li>ABOUT US</li>
// // //           <li>PRODUCTS</li>
// // //           <li>SPECIALITY CAKES</li>
// // //           <li>FIND US</li>
// // //           <li>CONTACT US</li>
// // //         </ul>
// // //         <div className="nav-right">
// // //           <input type="text" placeholder="Search" className="search-bar" />
// // //           <button className="order-button">ORDER ONLINE</button>
// // //         </div>
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <header className="hero">
// // //         <div className="hero-text">
// // //           <h1>A taste of savoury heaven!</h1>
// // //           <p>CHOOSE FROM OUR RANGE OF SANDWICHES & SAVOURIES.</p>
// // //           <button className="know-more">KNOW MORE</button>
// // //         </div>
// // //       </header>
// // //             <AuthenticRecipes />
// // //             <Products />
// // //             <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default App;



// // import React, { useState, useEffect } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Navigation, Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import "./css/styles.css"; // Your custom styles
// // import AuthenticRecipes from "./components/AuthenticRecipes";
// // import Products from "./components/Products";
// // import Footer from "./components/Footer";
// // import slider1 from "./images/andy-li-RndRFJ1v1kk-unsplash.jpg";
// // import slider2 from "./images/mae-mu-m9pzwmxm2rk-unsplash.jpg";
// // import slider3 from "./images/umesh-soni-LDnmyOaA-ew-unsplash.jpg";

// // const slides = [
// //   {
// //     image: slider1,
// //     text: "Freshly baked bread",
// //   },
// //   {
// //     image: slider2,
// //     text: "Assorted pastries",
// //   },
// //   {
// //     image: slider3,
// //     text: "Cupcakes and cookies",
// //   },
// // ];

// // const App = () => {
// //   const [isSticky, setIsSticky] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open

// //   // Handle scroll event to toggle sticky class
// //   const handleScroll = () => {
// //     if (window.scrollY > 50) {
// //       setIsSticky(true);
// //     } else {
// //       setIsSticky(false);
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //     const toggleMenu = () => {
// //     setMenuOpen(!menuOpen); // Toggle menu state when the hamburger icon is clicked
// //   };

// //   return (
// //     <div className="container">
// //       {/* Background Image Slider */}
// //             {/* Promo Banner */}
// //       <div className="promo-banner" >
// //         <p>
// //           <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
// //           <strong>SIGNUP10</strong>
// //         </p>
// //       </div>
// //       <Swiper
// //         modules={[Autoplay, Navigation, Pagination]}
// //         spaceBetween={0}
// //         slidesPerView={1}
// //         loop={true}
// //         autoplay={{ delay: 3000, disableOnInteraction: false }}
// //         pagination={{ clickable: true }}
// //         className="background-slider"
// //       >
// //         {slides.map((slide, index) => (
// //           <SwiperSlide key={index}>
// //             <div
// //               className="slide relative"
// //               style={{ backgroundImage: `url(${slide.image})` }}
// //             >
// //               <div className="absolute bottom-10 right-10">
// //                 <button className="know-more">{slide.text}</button>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>

// //       {/* Navbar */}
// // <nav
// //   className={`navbar ${
// //     isSticky
// //       ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300"
// //       : "bg-transparent"
// //   } transition-all duration-300`}
// // >
// //   <div className="logo">BakersHub</div>
// //   <ul className="nav-links">
// //     <li>ABOUT US</li>
// //     <li>PRODUCTS</li>
// //     <li>SPECIALITY CAKES</li>
// //     <li>FIND US</li>
// //     <li>CONTACT US</li>
// //   </ul>
// //   <div className="nav-right">
// //     <input type="text" placeholder="Search" className="search-bar" />
// //     <button className="order-button">ORDER ONLINE</button>
// //   </div>
// // </nav>


// //       {/* Hero Section */}
// // <header className="hero">
// //   {/* <div className="hero-text ml-4">
// //     <h1>A taste of savoury heaven!</h1>
// //     <p>CHOOSE FROM OUR RANGE OF SANDWICHES &amp; SAVOURIES.</p>
// //     <button className="know-more text-right">KNOW MORE</button>
// //   </div> */}
// // </header>


// //       <AuthenticRecipes />
// //       <Products />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./css/styles.css"; // Your custom styles
// import AuthenticRecipes from "./components/AuthenticRecipes";
// import Products from "./components/Products";
// import Footer from "./components/Footer";
// import slider1 from "./images/andy-li-RndRFJ1v1kk-unsplash.jpg";
// import slider2 from "./images/mae-mu-m9pzwmxm2rk-unsplash.jpg";
// import slider3 from "./images/umesh-soni-LDnmyOaA-ew-unsplash.jpg";

// const slides = [
//   {
//     image: slider1,
//     text: "Freshly baked bread",
//   },
//   {
//     image: slider2,
//     text: "Assorted pastries",
//   },
//   {
//     image: slider3,
//     text: "Cupcakes and cookies",
//   },
// ];

// const App = () => {
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

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle menu state when the hamburger icon is clicked
//   };

//   return (
//     <div className="container">
//       {/* Background Image Slider */}
//       {/* Promo Banner */}
//       <div className="promo-banner">
//         <p>
//           <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
//           <strong>SIGNUP10</strong>
//         </p>
//       </div>
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         className="background-slider"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="slide relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="absolute bottom-10 right-10">
//                 <button className="know-more">{slide.text}</button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Navbar */}
//       <nav
//         className={`navbar ${
//           isSticky
//             ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300"
//             : "bg-transparent"
//         } transition-all duration-300`}
//       >
//         <div className="logo">BakersHub</div>

//         {/* Hamburger Icon */}
//         <div className="hamburger" onClick={toggleMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>

//         {/* Navbar Links - Visible on desktop, hidden on mobile */}
//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li>ABOUT US</li>
//           <li>PRODUCTS</li>
//           <li>SPECIALITY CAKES</li>
//           <li>FIND US</li>
//           <li>CONTACT US</li>
//         </ul>

//         {/* Right-side buttons */}
//         <div className="nav-right">
//           <input type="text" placeholder="Search" className="search-bar" />
//           <button className="order-button">ORDER ONLINE</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="hero">
//         {/* <div className="hero-text ml-4">
//           <h1>A taste of savoury heaven!</h1>
//           <p>CHOOSE FROM OUR RANGE OF SANDWICHES &amp; SAVOURIES.</p>
//           <button className="know-more text-right">KNOW MORE</button>
//         </div> */}
//       </header>

//       <AuthenticRecipes />
//       <Products />
//       <Footer />
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/styles.css"; // Your custom styles
import AuthenticRecipes from "./components/AuthenticRecipes/AuthenticRecipes";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import slider1 from "./images/andy-li-RndRFJ1v1kk-unsplash.jpg";
import slider2 from "./images/mae-mu-m9pzwmxm2rk-unsplash.jpg";
import slider3 from "./images/umesh-soni-LDnmyOaA-ew-unsplash.jpg";
import Navbar from "./components/Navbar/Navbar";
import SpecialHampers from "./components/specialhampers/SpecialHampers";
import TeaTimeDelights from "./components/teatimedelights/TeaTimeDelights";
import BakerySection from "./components/bakerysection/BakerySection";
import TestimonialsSlider from "./components/testimonials/TestimonialsSlider";
import OrderSection from "./components/ordersection/OrderSection";
import StoreLocator from "./components/findus/StoreLocator";
import ContactForm from "./components/contactus/ContactForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTopButton from "./components/scrolltotop/ScrollToTopButton";
import Specialitycakes from "./components/specialitycakes/Specialitycakes"
import ProductPage from "./components/specialitycakes/ProductPage";
import AboutUs from "./components/About Us/AboutUs";
import AllCakesPage from "./components/specialitycakes/AllCakesPage";
import NewProducts from "./components/Allproducts/NewProducts"
import ProductList from "./components/Allproducts/ProductList";
import AddToCartUI from "./modals/AddToCartUI";
import ProductPageDashboard from "./components/Allproducts/ProductPageDashboard";
import CheckoutPage from "./components/checkout/CheckoutPage";
import TermsAndConditions from "./termss/TermsAndConditions";
import PrivacyPolicy from "./termss/PrivacyPolicy";
import RefundPolicy from "./termss/RefundPolicy";
import ScrollToTop from "./ScrollToTop.JSX";
import ShippingAndDelivery from "./termss/ShippingAndDelivery";
const slides = [
  {
    image: slider1,
    text: "Freshly baked bread",
  },
  {
    image: slider2,
    text: "Assorted pastries",
  },
  {
    image: slider3,
    text: "Cupcakes and cookies",
  },
];

const App = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open

  // Handle scroll event to toggle sticky class
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
    setMenuOpen(state); // Toggle menu state when the hamburger icon is clicked
  };


  return (
    <Router>
    <ScrollToTop />
    <Routes>
    <Route path="/" element={
    <div >
            {/* <div className="promo-banner">
        <p>
          <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
          <strong>SIGNUP10</strong>
        </p>
      </div> */}
      <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />      
<Header />
      <SpecialHampers />
      <Products />
      <BakerySection />
      <TestimonialsSlider />
      <TeaTimeDelights />
      <AuthenticRecipes />
      <OrderSection />
      <Footer />
      <ScrollToTopButton />
    </div>}
     />
    <Route path="/contact-us" element={<ContactForm />} />
    <Route path="/finds-us" element={<StoreLocator />} />
    <Route path="/speciality-cakes" element={<Specialitycakes />} />
    <Route path="/products/:productName" element={<ProductPage />} />
    <Route path="/Aboutus" element={<AboutUs />} />
    <Route path="/all-cakes" element={<AllCakesPage />} />
    <Route path="/products" element={<NewProducts />} />
    <Route path="/collections/:category" element={<ProductList />} />
    <Route path="/add" element={<AddToCartUI />} />
    <Route path="/ProductPageDashboard" element={<ProductPageDashboard />} />
    <Route path="/CheckoutPage" element={<CheckoutPage />} />
    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/refund-policy" element={<RefundPolicy />} />
    <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
    </Routes>
    </Router>
  );
};

export default App;
