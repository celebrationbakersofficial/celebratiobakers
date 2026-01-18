import React from "react";

const TheProducts = () => {
  return (
    <div
      className="text-center bg-cover bg-center"
      style={{
        backgroundImage: "url(http://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold uppercase font-overlock text-white">
              Celebration Bakers
              </h1>
            </div>
          </div>
          <p className="hidden md:block text-lg text-white mt-4">
            At celebratiobakers, we offer a wide range of products, both sweet & savory.
            Our offerings include indulgent brownies, cakes & desserts, artisanal
            breads, puffs & quiches, wholesome sandwiches, wraps & rolls,
            beverages and more.
          </p>
          <p className="md:hidden text-base text-white mt-4">
            At celebratiobakers, we offer a wide range of products, both sweet & savory.
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
