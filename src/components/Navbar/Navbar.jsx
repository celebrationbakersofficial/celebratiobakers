// // // // // Navbar.js
// // // // import React from "react";
// // // // import './Navbar.css'
// // // // import { Link } from "react-router-dom";
// // // // const Navbar = ({ isSticky, menuOpen, toggleMenu }) => {
// // // //   return (
// // // //     <nav
// // // //       className={`navbar ${
// // // //         isSticky
// // // //           ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300"
// // // //           : "bg-transparent"
// // // //       } transition-all duration-300`}
// // // //     >
// // // //       <div className="logo"><Link to="/">celeberationbakers</Link></div>

// // // //       {/* Navbar Links - Visible on desktop, hidden on mobile */}
// // // //       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
// // // //         <li><Link to="#">ABOUT US</Link></li>
// // // //         <li><Link to="#">PRODUCTS</Link></li>
// // // //         <li><Link to="#">SPECIALITY CAKES</Link></li>
// // // //         <li><Link to="/finds-us">FIND US</Link></li>
// // // //         <li><Link to="/contact-us">CONTACT US</Link></li>
// // // //       </ul>

// // // //       {/* Right-side buttons */}
// // // //       <div className="nav-right">
// // // //         <input type="text" placeholder="Search" className="search-bar" />
// // // //         <button className="order-button">ORDER ONLINE</button>
// // // //       </div>

// // // //       {/* Hamburger Icon */}
// // // //       <div className="hamburger" onClick={toggleMenu}>
// // // //         <span className="bar"></span>
// // // //         <span className="bar"></span>
// // // //         <span className="bar"></span>
// // // //       </div>

// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // import React from "react";
// // // import './Navbar.css'
// // // import { Link } from "react-router-dom";

// // // const Navbar = ({ isSticky, menuOpen, toggleMenu }) => {
// // //   return (
// // //     <nav
// // //       className={`navbar ${
// // //         isSticky
// // //           ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300"
// // //           : "bg-transparent"
// // //       } transition-all duration-300`}
// // //     >
// // //       <div className="logo"><Link to="/">celeberationbakers</Link></div>

// // //       {/* Navbar Links - Visible on desktop, hidden on mobile */}
// // //       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
// // //         <li><Link to="#">ABOUT US</Link></li>
// // //         <li><Link to="#">PRODUCTS</Link></li>
// // //         <li><Link to="#">SPECIALITY CAKES</Link></li>
// // //         <li><Link to="/finds-us">FIND US</Link></li>
// // //         <li><Link to="/contact-us">CONTACT US</Link></li>
// // //       </ul>

// // //       {/* Right-side buttons */}
// // //       <div className="nav-right">
// // //         <input type="text" placeholder="Search" className="search-bar" />
// // //         <button className="order-button">ORDER ONLINE</button>
// // //       </div>

// // //       {/* Hamburger Icon */}
// // //       <div className="hamburger" onClick={toggleMenu}>
// // //         <span className="bar"></span>
// // //         <span className="bar"></span>
// // //         <span className="bar"></span>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState, useEffect } from "react";
// // import './Navbar.css'
// // import { Link } from "react-router-dom";

// // const Navbar = ({ isSticky }) => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setMenuOpen(prevState => !prevState);
// //   };

// //   useEffect(() => {
// //     // Close the menu if user clicks anywhere outside
// //     const handleClickOutside = (event) => {
// //       if (!event.target.closest(".navbar")) {
// //         setMenuOpen(false);
// //       }
// //     };

// //     document.addEventListener("click", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("click", handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <nav
// //       className={`navbar ${
// //         isSticky
// //           ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300"
// //           : "bg-transparent"
// //       } transition-all duration-300`}
// //     >
// //       <div className="logo"><Link to="/">celeberationbakers</Link></div>

// //       {/* Navbar Links - Visible on desktop, hidden on mobile */}
// //       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
// //         <li><Link to="#">ABOUT US</Link></li>
// //         <li><Link to="#">PRODUCTS</Link></li>
// //         <li><Link to="#">SPECIALITY CAKES</Link></li>
// //         <li><Link to="/finds-us">FIND US</Link></li>
// //         <li><Link to="/contact-us">CONTACT US</Link></li>
// //       </ul>

// //       {/* Right-side buttons */}
// //       <div className="nav-right">
// //         <input type="text" placeholder="Search" className="search-bar" />
// //         <button className="order-button">ORDER ONLINE</button>
// //       </div>

// //       {/* Hamburger Icon */}
// //       <div className="hamburger" onClick={toggleMenu}>
// //         <span className="bar"></span>
// //         <span className="bar"></span>
// //         <span className="bar"></span>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from "react";
// import './Navbar.css';
// import { Link } from "react-router-dom";

// const Navbar = ({ isSticky, menuOpen, toggleMenu }) => {
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".navbar")) {
//         toggleMenu(false); // Close the menu when clicking outside
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [toggleMenu]);

//   return (
//     <nav
//       className={`navbar ${menuOpen ? "open" : ""} ${isSticky ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300" : "bg-transparent"} transition-all duration-300`}
//     >
//       <div className="logo"><Link to="/">celeberationbakers</Link></div>

//       {/* Navbar Links */}
//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li><Link to="#">ABOUT US</Link></li>
//         <li><Link to="#">PRODUCTS</Link></li>
//         <li><Link to="#">SPECIALITY CAKES</Link></li>
//         <li><Link to="/finds-us">FIND US</Link></li>
//         <li><Link to="/contact-us">CONTACT US</Link></li>
//       </ul>

//       {/* Right-side buttons */}
//       <div className="nav-right">
//         <input type="text" placeholder="Search" className="search-bar" />
//         <button className="order-button">ORDER ONLINE</button>
//       </div>

//       {/* Hamburger Icon */}
//       <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => toggleMenu(!menuOpen)}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

const Navbar = ({ isSticky, menuOpen, toggleMenu }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        toggleMenu(false); // Close the menu when clicking outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleMenu]);
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
    <div className="promo-banner">
    <p>
      <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
      <strong>SIGNUP10</strong>
    </p>
  </div>
    <nav
      className={`navbar ${menuOpen ? "open" : ""} ${isSticky ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300" : "bg-transparent"} transition-all duration-300`}
    >
      <div className="logo"><Link to="/" onClick={scrollToTop}>celeberationbakers</Link></div>
      {/* <img src="https://i.imgur.com/ll4hIXN.png"/> */}
        {/* Conditionally render logo only when menu is open */}
      {/* Navbar Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className="mobile-home"><Link to="/" onClick={scrollToTop}>Home</Link></li>
      <li><Link to="/products" onClick={scrollToTop}>PRODUCTS</Link></li>
        <li><Link to="/speciality-cakes" onClick={scrollToTop}>SPECIALITY CAKES</Link></li>
        <li><Link to="/finds-us" onClick={scrollToTop}>FIND US</Link></li>
        <li><Link to="/contact-us" onClick={scrollToTop}>CONTACT US</Link></li>
        <li><Link to="/Aboutus" onClick={scrollToTop}>ABOUT US</Link></li>
      </ul>

      {/* Right-side buttons */}
      <div className="nav-right">
        {/* <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div> */}
        <button className="order-button">
        <Link to="/ProductPageDashboard">ORDER ONLINE</Link>
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => toggleMenu(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
