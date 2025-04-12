import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import ScrollToTopButton from '../scrolltotop/ScrollToTopButton';
import Product1 from "./images/chocolate-cake-with-coffee-cup.jpg";
import Product2 from "./images/cup-tea-near-homemade-cheesecake-with-fresh-berries-mint-dessert-table.jpg";
import Product3 from "./images/top-view-cup-coffee-plate-chocolate-cake-wooden-table.jpg";
import Product4 from "./images/easter-carrot-cake-with-frosting-blue-table.jpg";

  const cakes = [
    {
      name: "After Nine Cake",
      image: Product1,
      link: "/products/afternine-cake",
    },
    {
      name: "Almond Nougatine Cake",
      image:Product2,
      link: "/products/almond-nougatine-cake",
    },
    {
      name: "Cappuccino Cake",
      image:Product3,
      link: "/products/cappuccino-cake",
    },
    {
      name: "Carrot Cake",
      image:Product4,
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
      <ScrollToTopButton />
    </>
  );
}

export default AllCakesPage;
