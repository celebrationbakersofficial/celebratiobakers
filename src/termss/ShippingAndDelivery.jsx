import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

const ShippingAndDelivery = () => {
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
                <h1 className="text-3xl font-bold text-center mb-6">Shipping and Delivery</h1>
                <p className="text-lg mb-4">
                    At <strong>Celebration Bakers</strong>, we ensure that your order reaches you safely and promptly. Please read our Shipping and Delivery policy to understand our process.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Shipping Times</h2>
                <p className="text-lg mb-4">
                    We process and ship orders within 2-3 business days after the order is confirmed. Once your order has shipped, you will receive an email notification with tracking information.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. Shipping Costs</h2>
                <p className="text-lg mb-4">
                    Shipping costs depend on the delivery location and the size of your order. You will be able to view the shipping cost at checkout before confirming your purchase.
                </p>

                <h2 className="text-2xl font-semibold mt-6">3. Delivery Locations</h2>
                <p className="text-lg mb-4">
                    We currently offer delivery within the city and surrounding areas. If you are unsure whether we deliver to your location, please contact us before placing an order.
                </p>

                <h2 className="text-2xl font-semibold mt-6">4. Delivery Issues</h2>
                <p className="text-lg mb-4">
                    In the unlikely event of a delivery issue, such as delays or missed deliveries, please contact us immediately. We will work with our delivery partners to resolve the situation as quickly as possible.
                </p>

                <h2 className="text-2xl font-semibold mt-6">5. Delivery Hours</h2>
                <p className="text-lg mb-4">
                    Our delivery hours are Monday to Saturday, from 10:00 AM to 6:00 PM. We do not offer delivery on Sundays or public holidays.
                </p>

                <h2 className="text-2xl font-semibold mt-6">6. Contact Information</h2>
                <p className="text-lg mb-4">
                    If you have any questions regarding shipping and delivery, feel free to contact us via email or phone, and our customer support team will be happy to assist you.
                </p>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ShippingAndDelivery;
