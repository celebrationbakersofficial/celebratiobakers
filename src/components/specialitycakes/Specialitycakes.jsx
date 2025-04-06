import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Product1 from "./images/chocolate-cake-with-coffee-cup.jpg";
import Product2 from "./images/cup-tea-near-homemade-cheesecake-with-fresh-berries-mint-dessert-table.jpg";
import Product3 from "./images/top-view-cup-coffee-plate-chocolate-cake-wooden-table.jpg";
import Product4 from "./images/easter-carrot-cake-with-frosting-blue-table.jpg";
import sectionimage1 from "./section images/photo_2025-04-06_12-39-48.jpg";
import sectionimage2 from "./section images/photo_2025-04-06_12-48-46.jpg";
import OrderSection from "../ordersection/OrderSection";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";

// const cakes = [
//   { name: "After Nine Cake", img: Product2 },
//   { name: "Almond Nougatine Cake", img: Product2 },
//   { name: "Cappuccino Cake", img: Product3 },
//   { name: "Carrot Cake", img: Product3 }
// ];
  const cakes = [
    {
      name: "After Nine Cake",
      image: Product1,
      link: "/products/afternine-cake",
    },
    {
      name: "Almond Nougatine Cake",
      image:Product2,
      link: "/products/almond-nougatine-cake",
    },
    {
      name: "Cappuccino Cake",
      image:Product3,
      link: "/products/cappuccino-cake",
    },
    {
      name: "Carrot Cake",
      image:Product4,
      link: "/products/carrot-cake",
    },
  ];
export default function Specialitycakes() {
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
    <>
                {/* <div className="promo-banner">
        <p>
          <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
          <strong>SIGNUP10</strong>
        </p>
      </div> */}
    <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
    <div className="bg-[#EFF3F1] font-sans">
      {/* Header Section */}
      <div
      className="text-center bg-cover bg-no-repeat bg-bottom py-8 h-[420px]"
      style={{
        backgroundImage:
          `url(${sectionimage1})`,
        backgroundColor: "#fde4e1",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="uppercase text-4xl font-bold font-[Overlock] mb-4">
          SPECIALITY CAKES
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our made-to-order range of speciality cakes is here to make any
          celebration great! From celeberationbakers classic cakes to gourmet cakes to
          customized theme cakes, we have something for every special occasion.
        </p>
      </div>
    </div>
      
      {/* Cakes Section */}
      <div className="bg-[#E4EDEC] py-4">
      <div className="max-w-6xl mx-auto bg-white p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cakes.map((cake, index) => (
            <div key={index} className="text-center">
              <Link to={cake.link}>
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-auto object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{cake.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
        <div className="text-center mt-8">
        <Link
          to="/all-cakes"
          className="bg-[#b2ddd3] px-6 py-2 text-black font-semibold rounded-md"
        >
            View ALL
          </Link>
        </div>
    </div>
      
      {/* Custom Cakes Section */}
      <div className="bg-[#f1d3ab] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-600">Customised Theme Cakes</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-left md:order-2">
            <p className="text-lg text-gray-600">
              We handcraft and customize celebration cakes for all special occasions. From theme-based and personalized birthday cakes to exquisite multi-tiered wedding cakes, we have all your celebrations covered!
              <br /><br />
              Write to us with your customized theme cake requirements at - <a href="mailto:celebrationbakersofficial@gmail.com" className="text-pink-500">celebrationbakersofficial@gmail.com</a>
            </p>
          </div>
          <div className="md:w-1/3 md:order-1 text-center">
            <img
              src={sectionimage2}
              alt="Custom Theme Cakes"
              className="w-3/4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
      <OrderSection />
    </div>
    <Footer />
    <ScrollToTopButton />
</>
  );
}
