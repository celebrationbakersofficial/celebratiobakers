import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from "../../images/andy-li-RndRFJ1v1kk-unsplash.jpg";
import slider2 from "../../images/mae-mu-m9pzwmxm2rk-unsplash.jpg";
import slider3 from "../../images/umesh-soni-LDnmyOaA-ew-unsplash.jpg";
import "../../css/styles.css";
import Navbar from '../Navbar/Navbar';
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
function Header() {
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
    <div>
            {/* Background Image Slider */}

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
      {/* <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} /> */}

        {/* <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div> */}
      {/* Hero Section */}
      <header className="hero">
        {/* <div className="hero-text ml-4">
          <h1>A taste of savoury heaven!</h1>
          <p>CHOOSE FROM OUR RANGE OF SANDWICHES &amp; SAVOURIES.</p>
          <button className="know-more text-right">KNOW MORE</button>
        </div> */}
      </header>
    </div>
  )
}

export default Header
