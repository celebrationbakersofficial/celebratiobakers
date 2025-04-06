import React from 'react';
import { useState, useEffect } from "react";

const TermsAndConditions = () => {
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
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
                <p className="text-lg mb-4">
                    Welcome to <strong>Celebration Bakers</strong>, your go-to place for delicious cakes and baked goods. These Terms and Conditions govern your use of our website and services. By accessing and using our platform, you agree to comply with these terms. If you disagree with any part of the terms, please refrain from using our services.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. General Terms</h2>
                <p className="text-lg mb-4">
                    You must be at least 18 years old to use our services. By using our website and ordering products, you agree to comply with all local laws and regulations.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. Order Processing</h2>
                <p className="text-lg mb-4">
                    Once you place an order, you will receive a confirmation email with the order details. Orders are processed only after full payment is received. We will notify you in case of any issues with your order.
                </p>

                <h2 className="text-2xl font-semibold mt-6">3. Payments</h2>
                <p className="text-lg mb-4">
                    We accept payments via Razorpay and other secure payment gateways. All prices are listed in INR and are subject to taxes as applicable.
                </p>

                <h2 className="text-2xl font-semibold mt-6">4. Account Security</h2>
                <p className="text-lg mb-4">
                    It is your responsibility to ensure the security of your account information. If you notice any unauthorized access to your account, please contact us immediately.
                </p>

                <h2 className="text-2xl font-semibold mt-6">5. Cancellation and Refund Policy</h2>
                <p className="text-lg mb-4">
                    Orders can be canceled within 24 hours of placing them. After this period, cancellations or changes to the order are not accepted. Please refer to our <a href="/refund" className="text-blue-500">Refund Policy</a> for more details.
                </p>

                <h2 className="text-2xl font-semibold mt-6">6. Delivery</h2>
                <p className="text-lg mb-4">
                    We offer delivery within specific areas. Delivery times are estimates and are not guaranteed. We are not responsible for any delays caused by third-party delivery services.
                </p>

                <h2 className="text-2xl font-semibold mt-6">7. Limitation of Liability</h2>
                <p className="text-lg mb-4">
                    Our liability is limited to the amount you have paid for the service or product in question. We are not responsible for any indirect, incidental, or consequential damages.
                </p>

                <h2 className="text-2xl font-semibold mt-6">8. Governing Law</h2>
                <p className="text-lg mb-4">
                    These terms shall be governed by the laws of India. Any disputes shall be resolved in the appropriate courts in your city.
                </p>

                <h2 className="text-2xl font-semibold mt-6">9. Changes to Terms</h2>
                <p className="text-lg mb-4">
                    We reserve the right to modify these terms at any time. Please check this page periodically for any updates.
                </p>
            </div>
        </div>
      <Footer />
      </>
    );
};

export default TermsAndConditions;
