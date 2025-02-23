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
// // // // //         <div className="logo">theobroma</div>
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
// // // //         <div className="logo">theobroma</div>
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
// // // //         <div className="logo">theobroma</div>
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
// // //         <div className="logo">theobroma</div>
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
import AuthenticRecipes from "./components/AuthenticRecipes";
import Products from "./components/Products";
import Footer from "./components/Footer";
import slider1 from "./images/andy-li-RndRFJ1v1kk-unsplash.jpg";
import slider2 from "./images/mae-mu-m9pzwmxm2rk-unsplash.jpg";
import slider3 from "./images/umesh-soni-LDnmyOaA-ew-unsplash.jpg";

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state when the hamburger icon is clicked
  };

  return (
    <div className="container">
      {/* Background Image Slider */}
      <div className="promo-banner">
        <p>
          <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
          <strong>SIGNUP10</strong>
        </p>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="background-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute bottom-10 right-10">
                <button className="know-more">{slide.text}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navbar */}
      <nav
        className={`navbar ${
          isSticky
            ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300"
            : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="logo">celeberationbakers</div>

        {/* Hamburger Icon */}
        {/* <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div> */}

        {/* Navbar Links - Visible on desktop, hidden on mobile */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>ABOUT US</li>
          <li>PRODUCTS</li>
          <li>SPECIALITY CAKES</li>
          <li>FIND US</li>
          <li>CONTACT US</li>
        </ul>

        {/* Right-side buttons */}
        <div className="nav-right">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="order-button">ORDER ONLINE</button>
        </div>
      </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      {/* Hero Section */}
      <header className="hero">
        {/* <div className="hero-text ml-4">
          <h1>A taste of savoury heaven!</h1>
          <p>CHOOSE FROM OUR RANGE OF SANDWICHES &amp; SAVOURIES.</p>
          <button className="know-more text-right">KNOW MORE</button>
        </div> */}
      </header>

      <AuthenticRecipes />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
