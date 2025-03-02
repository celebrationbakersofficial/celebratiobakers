import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Product1 from "./alex-lvrs-aX_ljOOyWJY-unsplash.jpg";
import Product2 from "./american-heritage-chocolate-ghtwiDUu5ro-unsplash.jpg";
import Product3 from "./honey-yanibel-minaya-cruz-fPWxYxfBVYM-unsplash.jpg";
import Product4 from "./jacob-thomas-6jHpcBPw7i8-unsplash.jpg";
import OrderSection from "../ordersection/OrderSection";
import { Link } from "react-router-dom";

// const cakes = [
//   { name: "After Nine Cake", img: Product2 },
//   { name: "Almond Nougatine Cake", img: Product2 },
//   { name: "Cappuccino Cake", img: Product3 },
//   { name: "Carrot Cake", img: Product3 }
// ];
  const cakes = [
    {
      name: "After Nine Cake",
      image:
        "//theobroma.in/cdn/shop/files/AfterNine_Cake_2_2_Large_01c569f9-38b4-4a52-b136-eae7e4520f8f.jpg?v=1699625065",
      link: "/products/afternine-cake",
    },
    {
      name: "Almond Nougatine Cake",
      image:
        "//theobroma.in/cdn/shop/files/Chocolate_Nougatine_Cake_4_Large_4e6a98d8-94f4-4b59-9543-fa93071ba677.jpg?v=1705733220",
      link: "/products/almond-nougatine-cake",
    },
    {
      name: "Cappuccino Cake",
      image:
        "//theobroma.in/cdn/shop/files/Cappuccino_Cake_4_Large_404e96df-9134-43ed-be8b-67932e0c4f1b.jpg?v=1699625445",
      link: "/products/cappuccino-cake",
    },
    {
      name: "Carrot Cake",
      image:
        "//theobroma.in/cdn/shop/files/Carrot_Cake_2_1_Large_f27d85bd-b0c9-4d79-852b-277daf80eb0e.jpg?v=1699625481",
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
                <div className="promo-banner">
        <p>
          <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
          <strong>SIGNUP10</strong>
        </p>
      </div>
    <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
    <div className="bg-[#EFF3F1] font-sans">
      {/* Header Section */}
      <div
      className="text-center bg-cover bg-no-repeat bg-bottom py-8 h-[420px]"
      style={{
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0521/3929/4884/files/specialty-cakes-banner.jpg)",
        backgroundColor: "#fde4e1",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="uppercase text-4xl font-bold font-[Overlock] mb-4">
          SPECIALITY CAKES
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our made-to-order range of speciality cakes is here to make any
          celebration great! From Theobroma classic cakes to gourmet cakes to
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
      <div className="bg-[#FEECEA] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Customised Theme Cakes</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-left md:order-2">
            <p className="text-lg">
              We handcraft and customize celebration cakes for all special occasions. From theme-based and personalized birthday cakes to exquisite multi-tiered wedding cakes, we have all your celebrations covered!
              <br /><br />
              Write to us with your customized theme cake requirements at - <a href="mailto:contact@theobroma.in" className="text-blue-600">contact@theobroma.in</a>
            </p>
          </div>
          <div className="md:w-1/3 md:order-1 text-center">
            <img
              src="//theobroma.in/cdn/shop/files/custom-illustration.png?v=1700213364"
              alt="Custom Theme Cakes"
              className="w-3/4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
      
      {/* Pre-Order Section */}
      {/* <div className="bg-[#EFF3F1] py-10 text-center">
        <h2 className="text-2xl text-[#9C722A] font-semibold">Pre Order Now!</h2>
        <p className="text-gray-700 mt-2">Call us at +91 8182881881 or email us at <a href="mailto:contact@theobroma.in" className="text-blue-500">contact@theobroma.in</a></p>
        <div className="mt-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg mx-2">Call Now</button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mx-2">Email Us</button>
        </div>
      </div> */}
      <OrderSection />
    </div>
    <Footer />
</>
  );
}
