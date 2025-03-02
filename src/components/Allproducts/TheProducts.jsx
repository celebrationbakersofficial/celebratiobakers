import React from "react";

const TheProducts = () => {
  return (
    <div
      className="text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(//theobroma.in/cdn/shop/files/Collection-desktop.jpg?v=1654084131)",
      }}
    >
      <div className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold uppercase font-overlock text-white">
              celebrationbakers
              </h1>
            </div>
          </div>
          <p className="hidden md:block text-lg text-white mt-4">
            At Theobroma, we offer a wide range of products, both sweet & savory.
            Our offerings include indulgent brownies, cakes & desserts, artisanal
            breads, puffs & quiches, wholesome sandwiches, wraps & rolls,
            beverages and more.
          </p>
          <p className="md:hidden text-base text-white mt-4">
            At Theobroma, we offer a wide range of products, both sweet & savory.
            Our offerings include indulgent brownies, cakes & desserts, artisanal
            breads, puffs & quiches, wholesome sandwiches, wraps & rolls,
            beverages and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheProducts;
