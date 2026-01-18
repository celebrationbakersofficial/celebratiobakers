import React from "react";

const OurPromise = () => {
  const values = [
    {
      imgSrc: "//theobroma.in/cdn/shop/files/icon1.jpg?v=1615448111",
      title: "AUTHENTIC RECIPES",
      description:
        "Our products are based on traditional home-style recipes, using fresh ingredients.",
    },
    {
      imgSrc: "//theobroma.in/cdn/shop/files/icon2.jpg?v=1615448111",
      title: "BAKED WITH LOVE",
      description:
        "Our passion for baking is poured into every recipe, serving smiles on a plate everyday.",
    },
    {
      imgSrc: "//theobroma.in/cdn/shop/files/icon3.jpg?v=1615448111",
      title: "HONESTLY PRICED",
      description:
        "We constantly strive to offer the best products at the right prices.",
    },
    {
      imgSrc: "//theobroma.in/cdn/shop/files/icon4.jpg?v=1615448111",
      title: "COMMITTED TO QUALITY",
      description:
        "From our ingredients to our kitchen operations & guest services, we always prioritize quality.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Promise</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {values.map((item, index) => (
          <div key={index} className="text-center p-4">
            <img src={item.imgSrc} alt={item.title} className="h-14 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-yellow-600">{item.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPromise;
