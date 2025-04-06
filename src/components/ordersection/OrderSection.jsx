import React from "react";
import images from "./colin-lee-1FXyOIpoIlI-unsplash-removebg.png"
import { Link } from "react-router-dom";
const OrderSection = () => {
  return (
    <div className="bg-[#f0f8f5] py-16 px-8 text-center relative">
      <h2 className="text-2xl font-bold text-[#ed8482]">Like Our Products?</h2>
      <div className="mt-2 mb-4">
        <div className="h-1 w-16 bg-blue-300 mx-auto"></div>
      </div>
      <p className="text-gray-700 max-w-xl mx-auto">
        Treat yourself to your favourite celeberationbakers products or surprise your loved ones with an edible gift.
      </p>
      <Link to="/ProductPageDashboard">
        <button className="mt-6 bg-[#f4a090] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#e68a7a]">
          ORDER ONLINE
        </button>
      </Link>
      <img
        src={images} // Replace this with the correct path
        alt="Decorative Carriage"
        className="absolute bottom-0 left-4 w-40"
      />
    </div>
  );
};

export default OrderSection;
