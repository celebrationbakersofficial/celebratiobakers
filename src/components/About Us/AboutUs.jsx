// import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Footer from "../Footer";
// import OurPromise from "./OurPromise";
// import OurTeam from "./OurTeam";
// import Product1 from "./images/angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// import Product2 from "./images/angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// import Product3 from "./images/nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// import Product5 from "./images/david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// import Product6 from "./images/brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import OrderSection from "../ordersection/OrderSection";
// import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";

// const images = [
//   Product2,
//   Product3,
//   Product1,
//   Product5,
//   Product6,
// ];
//   const cakes = [
//     {
//       name: "After Nine Cake",
//       image:
//         "//theobroma.in/cdn/shop/files/AfterNine_Cake_2_2_Large_01c569f9-38b4-4a52-b136-eae7e4520f8f.jpg?v=1699625065",
//       link: "/products/afternine-cake",
//     },
//     {
//       name: "Almond Nougatine Cake",
//       image:
//         "//theobroma.in/cdn/shop/files/Chocolate_Nougatine_Cake_4_Large_4e6a98d8-94f4-4b59-9543-fa93071ba677.jpg?v=1705733220",
//       link: "/products/almond-nougatine-cake",
//     },
//     {
//       name: "Cappuccino Cake",
//       image:
//         "//theobroma.in/cdn/shop/files/Cappuccino_Cake_4_Large_404e96df-9134-43ed-be8b-67932e0c4f1b.jpg?v=1699625445",
//       link: "/products/cappuccino-cake",
//     },
//     {
//       name: "Carrot Cake",
//       image:
//         "//theobroma.in/cdn/shop/files/Carrot_Cake_2_1_Large_f27d85bd-b0c9-4d79-852b-277daf80eb0e.jpg?v=1699625481",
//       link: "/products/carrot-cake",
//     },
//   ];
// export default function AboutUs() {
//       const [isSticky, setIsSticky] = useState(false);
//       const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open
    
//       // Handle scroll event to toggle sticky class
//       const handleScroll = () => {
//         if (window.scrollY > 50) {
//           setIsSticky(true);
//         } else {
//           setIsSticky(false);
//         }
//       };
    
//       useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//           window.removeEventListener("scroll", handleScroll);
//         };
//       }, []);
    
//       const toggleMenu = (state) => {
//         setMenuOpen(state); // Toggle menu state when the hamburger icon is clicked
//       };
//       const [currentIndex, setCurrentIndex] = useState(0);

//       useEffect(() => {
//         const interval = setInterval(() => {
//           nextSlide();
//         }, 3000);
//         return () => clearInterval(interval);
//       }, [currentIndex]);
    
//       const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       };
    
//       const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//       };
    
//       const goToSlide = (index) => {
//         setCurrentIndex(index);
//       };
//   return (
//     <>
//                 {/* <div className="promo-banner">
//         <p>
//           <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
//           <strong>SIGNUP10</strong>
//         </p>
//       </div> */}
//     <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
//     <div 
//       className="bg-cover bg-bottom pb-[500px]" 
//       style={{ backgroundImage: "url(//theobroma.in/cdn/shop/files/aboutpage-header.jpg?v=1615444228)" }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold" style={{ fontFamily: 'Overlock' }}>
//             About Us
//           </h1>
//         </div>
//       </div>
//     </div>
//     <div className="py-10 px-4 md:px-0">
//         <div className="container mx-auto text-center">
//           <p className="content-info1 w-full md:w-auto">
//             Theobroma means 'Food of the Gods' in Greek, befitting our exclusive and indulgent range of offerings that include brownies, cakes, desserts, chocolates, breads, and savouries.
//           </p>
//           <p className="content-info1 w-full md:w-auto mt-4">
//             From our humble beginnings in 2004, when the first Theobroma pastry store opened its doors at the iconic Cusrow Baug at Colaba Causeway (Mumbai), we've grown to become a Pan-India chain of patisseries with stores in over 30 cities.
//           </p>
//           <p className="content-info1 w-full md:w-auto mt-4">
//             Our mission is to spread happiness by serving smiles on a plate, and this journey continues as we open Theobroma patisseries across the country.
//           </p>
//         </div>
//       </div>
//       <div className="mx-auto p-4 bg-[#fceeec] flex justify-center items-center min-h-screen">
//       <div className="relative border-4 border-white bg-white px-4 pt-4 pb-4 rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
//       {/* Outer Wrapper to Keep Image Layout Intact */}
//         <div className="flex w-full h-[600px] overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
//           >
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Slide ${index}`}
//                 className="w-full h-[600px] object-contain flex-shrink-0"
//                 style={{ width: "100%" }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
//           onClick={prevSlide}
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
//           onClick={nextSlide}
//         >
//           <FaArrowRight />
//         </button>

//         {/* Dots Navigation */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500 border border-white" : "bg-black"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//      <OurPromise />
//      <OurTeam />
//      <OrderSection />
//     <Footer />
//     <ScrollToTopButton />
// </>
//   );
// }


import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../Footer";
import OurPromise from "./OurPromise";
import OurTeam from "./OurTeam";
import Product1 from "./images/angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
import Product2 from "./images/angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
import Product3 from "./images/nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
import Product5 from "./images/david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
import Product6 from "./images/brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
import OrderSection from "../ordersection/OrderSection";
import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";
import background from "./photo_2025-04-06_11-47-09.jpg"

const images = [
  Product2,
  Product3,
  Product1,
  Product5,
  Product6,
];

const cakes = [
  {
    name: "Chocolate Muffin",
    image: "//yourimageurl.com/chocolate-muffin.jpg",
    link: "/products/chocolate-muffin",
  },
  {
    name: "Vanilla Cupcake",
    image: "//yourimageurl.com/vanilla-cupcake.jpg",
    link: "/products/vanilla-cupcake",
  },
  {
    name: "Fruit Cake",
    image: "//yourimageurl.com/fruit-cake.jpg",
    link: "/products/fruit-cake",
  },
  {
    name: "Classic Cheesecake",
    image: "//yourimageurl.com/classic-cheesecake.jpg",
    link: "/products/classic-cheesecake",
  },
];

export default function AboutUs() {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
<div
  className="pb-[500px]"
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',  // Ensures the full image is visible
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Ensures the image doesn’t repeat
  }}
>
  <div className="container mx-auto px-4">
    <div className="text-center">
      {/* <h1 className="text-4xl font-bold" style={{ fontFamily: 'Overlock' }}>
        About Celebration Bakers
      </h1> */}
    </div>
  </div>
</div>


      <div className="py-10 px-4 md:px-0">
        <div className="container mx-auto text-center">
          <p className="content-info1 w-full md:w-auto">
            At Celebration Bakers, we are passionate about creating delicious bakery products, from cakes and muffins to an array of other baked goods. Whether it’s a birthday, anniversary, or any special occasion, we bring joy with every bite.
          </p>
          <p className="content-info1 w-full md:w-auto mt-4">
            Since our founding in 2010, our mission has been to create mouth-watering bakery delights, using only the finest ingredients to ensure that every product is of the highest quality. Our journey started in a small bakery in the heart of the city, and now, we proudly serve customers across multiple locations.
          </p>
          <p className="content-info1 w-full md:w-auto mt-4">
            From freshly baked cakes, muffins, and cookies to a variety of savory baked goods, we continue to share our love for baking with the world.
          </p>
        </div>
      </div>
      <div className="mx-auto p-4 bg-[#fceeec] flex justify-center items-center min-h-screen">
        <div className="relative border-4 border-white bg-white px-4 pt-4 pb-4 rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
          {/* Outer Wrapper to Keep Image Layout Intact */}
          <div className="flex w-full h-[600px] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-[600px] object-contain flex-shrink-0"
                  style={{ width: "100%" }}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500 border border-white" : "bg-black"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <OurPromise />
      {/* <OurTeam /> */}
      <OrderSection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
