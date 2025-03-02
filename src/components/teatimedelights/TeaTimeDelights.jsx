// import React from "react";
// import TeaTimeDelightss from "./sebastian-kuss-r7Zq9cErU2w-unsplash.jpg";
// import "./TeaTimeDelights.css"
// const TeaTimeDelights = () => {
//   return (
//       <div className="tea-time-container bg-[#FAEBD7] p-8 rounded-lg flex items-center shadow-lg">
//         {/* Image Section */}
//         <div className="relative border-2 border-gold p-2 rounded-md">
//           <img
//             src={TeaTimeDelightss} // Replace with actual image path
//             alt="Tea-Time Cake"
//             className="rounded-md object-cover w-96 h-auto"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="ml-8 text-brown">
//           <h3 className="text-lg font-semibold mb-2">Tea-Time Delights</h3>
//           <div className="flex space-x-1 mb-2">
//             <span className="w-3 h-1 bg-blue-300"></span>
//             <span className="w-3 h-1 bg-blue-300"></span>
//             <span className="w-3 h-1 bg-blue-300"></span>
//           </div>
//           <p className="text-gray-700 mb-4">
//             Pick the perfect companion for your tea (or coffee!) from a range
//             of tea cakes & more.
//           </p>
//           <button className="bg-[#B3C8CF] px-4 py-2 text-white rounded-lg hover:bg-[#9AB2B9]">
//             KNOW MORE
//           </button>
//         </div>
//       </div>
//   );
// };

// export default TeaTimeDelights;


import React, { useState, useEffect } from "react";
import TeaTimeDelightss1 from "./sebastian-kuss-r7Zq9cErU2w-unsplash.jpg";
import TeaTimeDelightss2 from "./mike-meeks-zk-fclJdGas-unsplash.jpg"; // Add more images here
import TeaTimeDelightss3 from "./elisheva-g-nyekPQwZbgw-unsplash.jpg"; // Add more images here
import "./TeaTimeDelights.css";
import { Link } from "react-router-dom";

const TeaTimeDelights = () => {
  const [currentImage, setCurrentImage] = useState(TeaTimeDelightss1);

  useEffect(() => {
    const imageList = [TeaTimeDelightss1, TeaTimeDelightss2, TeaTimeDelightss3]; // List of images
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % imageList.length;
      setCurrentImage(imageList[index]);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="tea-time-container bg-[#FAEBD7] p-8 rounded-lg flex items-center shadow-lg">
      {/* Image Section */}
      <div className="relative border-2 border-gold p-2 rounded-md royal-frame">
        <img
          src={currentImage}
          alt="Tea-Time Cake"
          className="rounded-md object-cover w-96 h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="ml-8 text-brown">
        <h3 className="text-lg font-semibold mb-2">Tea-Time Delights</h3>
        <div className="flex space-x-1 mb-2">
          <span className="w-3 h-1 bg-blue-300"></span>
          <span className="w-3 h-1 bg-blue-300"></span>
          <span className="w-3 h-1 bg-blue-300"></span>
        </div>
        <p className="text-gray-700 mb-4">
          Pick the perfect companion for your tea (or coffee!) from a range
          of tea cakes & more.
        </p>
        <Link to="/Aboutus" className="w-full h-auto object-cover">
        <button className="bg-[#B3C8CF] px-4 py-2 text-white rounded-lg hover:bg-[#9AB2B9]">
          KNOW MORE
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TeaTimeDelights;
