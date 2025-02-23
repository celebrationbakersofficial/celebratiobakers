import React from 'react';
import './AuthenticRecipes.css';
import images from "./colin-lee-1FXyOIpoIlI-unsplash.jpg"
const AuthenticRecipes = () => {
  return (
    <div className="authentic-recipes">
        <div className="heading left w-full lg:w-1/2 p-4">
          <h1 className=" text-4xl font-bold text-gray-800">Food of The Gods, Freshly Baked!
          </h1>
          <p className="text-lg text-gray-600 mt-4">
          Since 2004, we've been serving our guests the best quality treats, traditionally made and presented with care.          </p>
        </div>
<div className="content">
        <div className="left w-full lg:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-gray-800">AUTHENTIC RECIPES</h1>
          <p className="text-lg text-gray-600 mt-4">
            Our products are based on traditional home-style recipes using fresh ingredients.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mt-6">BAKED WITH LOVE</h2>
          <p className="text-lg text-gray-600 mt-2">
            Our passion for baking is poured into every recipe, serving smiles on a plate every day.
          </p>
          {/* <h2 className="text-2xl font-semibold text-gray-700 mt-6">COMMITTED TO QUALITY</h2>
          <p className="text-lg text-gray-600 mt-2">
            From our ingredients to our kitchen operations & guest services, we always prioritize quality.
          </p> */}
          {/* <h2 className="text-2xl font-semibold text-gray-700 mt-6">HONESTLY PRICED</h2>
          <p className="text-lg text-gray-600 mt-2">
            We constantly strive to offer the best products at the right prices.
          </p> */}
        </div>
        <div className="image-container">
        <img
          src={images}
          alt="Food Image"
          className="mx-auto mb-4 rounded-lg shadow-lg"
        />
        {/* <a href="#" className="know-more-btn">Know More</a> */}
      </div>
        <div className="right w-full lg:w-1/2 p-4">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Food of The Gods, Freshly Baked!</h3>
          <p className="text-lg text-gray-600">
            Since 2004, we've been serving our guests the best quality treats, traditionally made and presented with care.
          </p>
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Food of The Gods, Freshly Baked!</h3>
          <p className="text-lg text-gray-600">
            Since 2004, we've been serving our guests the best quality treats, traditionally made and presented with care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthenticRecipes;
