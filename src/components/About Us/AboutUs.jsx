import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import OurPromise from "./OurPromise";
import OurTeam from "./OurTeam";

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

      
  return (
    <>
    <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
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
     <OurPromise />
     <OurTeam />
    <Footer />
</>
  );
}
