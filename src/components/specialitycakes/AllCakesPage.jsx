import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';

const cakes = [
  {
    name: "After Nine Cake",
    image:
      "//theobroma.in/cdn/shop/files/AfterNine_Cake_2_2_Large_01c569f9-38b4-4a52-b136-eae7e4520f8f.jpg?v=1699625065",
    link: "/products/afternine-cake",
  },
  {
    name: "Almond Nougatine Cake",
    image:
      "//theobroma.in/cdn/shop/files/Chocolate_Nougatine_Cake_4_Large_4e6a98d8-94f4-4b59-9543-fa93071ba677.jpg?v=1705733220",
    link: "/products/almond-nougatine-cake",
  },
  {
    name: "Cappuccino Cake",
    image:
      "//theobroma.in/cdn/shop/files/Cappuccino_Cake_4_Large_404e96df-9134-43ed-be8b-67932e0c4f1b.jpg?v=1699625445",
    link: "/products/cappuccino-cake",
  },
  {
    name: "Carrot Cake",
    image:
      "//theobroma.in/cdn/shop/files/Carrot_Cake_2_1_Large_f27d85bd-b0c9-4d79-852b-277daf80eb0e.jpg?v=1699625481",
    link: "/products/carrot-cake",
  },
];

function AllCakesPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">All Cakes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cakes.map((cake, index) => (
            <div key={index} className="text-center">
              <Link to={cake.link}>
                <img src={cake.image} alt={cake.name} className="w-full h-auto object-cover" />
                <h3 className="mt-2 text-lg font-semibold">{cake.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllCakesPage;
