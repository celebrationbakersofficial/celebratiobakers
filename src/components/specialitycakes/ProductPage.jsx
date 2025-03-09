import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import ScrollToTopButton from '../scrolltotop/ScrollToTopButton';
const cakes = [
    {
      name: "After Nine Cake",
      image:
        "//theobroma.in/cdn/shop/files/AfterNine_Cake_2_2_Large_01c569f9-38b4-4a52-b136-eae7e4520f8f.jpg?v=1699625065",
      link: "/products/afternine-cake",
      description: "A rich chocolate cake infused with a hint of mint for a refreshing twist.",
    },
    {
      name: "Almond Nougatine Cake",
      image:
        "//theobroma.in/cdn/shop/files/Chocolate_Nougatine_Cake_4_Large_4e6a98d8-94f4-4b59-9543-fa93071ba677.jpg?v=1705733220",
      link: "/products/almond-nougatine-cake",
      description: "Crunchy nougatine and almonds layered with smooth chocolate mousse.",
    },
    {
      name: "Cappuccino Cake",
      image:
        "//theobroma.in/cdn/shop/files/Cappuccino_Cake_4_Large_404e96df-9134-43ed-be8b-67932e0c4f1b.jpg?v=1699625445",
      link: "/products/cappuccino-cake",
      description: "A coffee lover's delight with rich espresso-infused cake layers.",
    },
    {
      name: "Carrot Cake",
      image:
        "//theobroma.in/cdn/shop/files/Carrot_Cake_2_1_Large_f27d85bd-b0c9-4d79-852b-277daf80eb0e.jpg?v=1699625481",
      link: "/products/carrot-cake",
      description: "A moist and flavorful cake made with fresh carrots and a hint of cinnamon.",
    },
  ];
function ProductPage() {
    const { productName } = useParams();
    const cake = cakes.find(c => c.link.endsWith(productName));
  
    if (!cake) return <h2 className="text-center text-3xl font-bold py-12">Product Not Found</h2>;
    const similarCakes = cakes.filter(c => c.name !== cake.name);
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
    <div className="max-w-4xl mx-auto py-12">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-gray-500">Home</Link> &gt;
        <Link to="/speciality-cakes" className="text-gray-500"> Speciality Cakes</Link> &gt;
        <span className="text-gray-900"> {cake.name}</span>
      </nav>
      <div className="flex flex-col md:flex-row items-center">
        <img src={cake.image} alt={cake.name} className="w-full max-w-md mx-auto" />
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mt-6">{cake.name}</h2>
          <p className="text-xl font-semibold text-gray-700 mt-2">{cake.price}</p>
          <p className="mt-4 text-lg">{cake.description}</p>
          <div className="mt-4">
            <label className="block text-gray-700 font-semibold">Choose Size</label>
            <select className="border p-2 mt-2 w-full max-w-xs">
              <option>1 kg</option>
            </select>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button className="bg-[#b2ddd3] px-6 py-2 text-black font-semibold rounded-md">CALL NOW</button>
            <button className="border border-gray-500 px-6 py-2 text-black font-semibold rounded-md">EMAIL US</button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-6">Similar Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarCakes.map((similarCake, index) => (
            <div key={index} className="text-center">
              <Link to={similarCake.link}>
                <img src={similarCake.image} alt={similarCake.name} className="w-full h-auto object-cover" />
                <h4 className="mt-2 font-semibold">{similarCake.name}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    <ScrollToTopButton />
    </>
  )
}

export default ProductPage
