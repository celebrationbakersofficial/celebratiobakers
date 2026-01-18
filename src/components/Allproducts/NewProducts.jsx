import React, { useEffect, useState } from 'react'
import TheProducts from './TheProducts'
import TheAllProducts from './TheAllProducts'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import ScrollToTopButton from '../scrolltotop/ScrollToTopButton'

function NewProducts() {
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
    <div>
                  {/* <div className="promo-banner">
        <p>
          <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
          <strong>SIGNUP10</strong>
        </p>
      </div> */}
      <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <TheProducts />
      <TheAllProducts />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default NewProducts
