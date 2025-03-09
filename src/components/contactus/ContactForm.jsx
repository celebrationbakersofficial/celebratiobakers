import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import OrderSection from "../ordersection/OrderSection";
import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";

const ContactForm = () => {
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
  <>
            {/* <div className="promo-banner">
        <p>
          <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
          <strong>SIGNUP10</strong>
        </p>
      </div> */}
      <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
    <div className="bg-green-50 min-h-screen flex justify-center items-center p-10">
      <div className="bg-green-100 p-10 rounded-xl shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-yellow-900 text-center">Contact Us</h2>
          <p className="text-center text-gray-700 mt-2">We would love to hear from you. Share your thoughts and queries with us!</p>
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name *" className="p-2 border rounded w-full" required />
              <input type="text" placeholder="Contact no. *" className="p-2 border rounded w-full" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email ID *" className="p-2 border rounded w-full" required />
              <input type="text" placeholder="City *" className="p-2 border rounded w-full" required />
            </div>
            <select className="p-2 border rounded w-full" required>
              <option>Choose your subject</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
            <textarea placeholder="Message *" className="p-2 border rounded w-full h-32" required></textarea>
            <div>
              <input type="file" className="w-full border p-2 rounded" />
              <p className="text-xs text-gray-500">We accept file sizes up to 1MB in jpeg, png, or pdf format.</p>
            </div>
            <button className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-800 transition w-full">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center text-gray-700">
          <h3 className="font-semibold text-yellow-900">Theobroma Foods Private Limited</h3>
          <p className="mt-2 text-sm">Registered Address:</p>
          <p className="text-sm">32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East, Mumbai-400088, Maharashtra, India</p>
          <h3 className="mt-4 font-semibold text-yellow-900">Grievance & Nodal Officer:</h3>
          <p className="text-sm">Ms. Simantini Budukh, General Counsel & Company Secretary</p>
          <h3 className="mt-4 font-semibold text-yellow-900">Contact Details:</h3>
          <p className="text-sm">📞 +91 8182-881881</p>
          <p className="text-sm">📧 contact@theobroma.in</p>
        </div>
      </div>
    </div>
    <OrderSection />
    <ScrollToTopButton />
    <Footer />
    </>
  );
};

export default ContactForm;
