import React from "react";
import image1 from "./images/anna-przepiorka-LjtviHokbr4-unsplash.jpg";
import image2 from "./images/elle-inlom-aJDpzJTB9tI-unsplash.jpg";
import image3 from "./images/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg";
import image5 from "./images/inna-safa-saTHWyeTGQQ-unsplash.jpg";
import image6 from "./images/kumiko-shimizu-_ualFWI3D9s-unsplash.jpg";
import image7 from "./images/sergio-arze-UNhdg9K7Snw-unsplash.jpg";
import image9 from "./images/sergio-arze-wq39WnRNRfg-unsplash.jpg";
import image71 from "./images/z-graphica-UrBEO1g6O_0-unsplash.jpg";
const products = [
  {
    name: "Fresh Cream Pineapple Cake",
    image: image1,
  },
  {
    name: "Overload Brownie",
    image: image2,
  },
  {
    name: "Dense Loaf",
    image: image3,
  },
  {
    name: "Baked Wada Pao (1 Pc)",
    image: image5,
  },
  {
    name: "Blueberry Cheesecake Cup",
    image: image6,
  },
  {
    name: "Chocoholic Pastry",
    image: image7,
  },
  {
    name: "Chocolate Chip Cookies",
    image: image9,
  },
  {
    name: "Butter Palmiers",
    image: image71,
  },
];

const BakerySection = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
              <h2 className="section-title">Our best sellers</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakerySection;
