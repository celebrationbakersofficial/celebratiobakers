// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer';
// import ScrollToTopButton from '../scrolltotop/ScrollToTopButton';
// const cakes = [
//     {
//       name: "After Nine Cake",
//       image:
//         "//theobroma.in/cdn/shop/files/AfterNine_Cake_2_2_Large_01c569f9-38b4-4a52-b136-eae7e4520f8f.jpg?v=1699625065",
//       link: "/products/afternine-cake",
//       description: "A rich chocolate cake infused with a hint of mint for a refreshing twist.",
//     },
//     {
//       name: "Almond Nougatine Cake",
//       image:
//         "//theobroma.in/cdn/shop/files/Chocolate_Nougatine_Cake_4_Large_4e6a98d8-94f4-4b59-9543-fa93071ba677.jpg?v=1705733220",
//       link: "/products/almond-nougatine-cake",
//       description: "Crunchy nougatine and almonds layered with smooth chocolate mousse.",
//     },
//     {
//       name: "Cappuccino Cake",
//       image:
//         "//theobroma.in/cdn/shop/files/Cappuccino_Cake_4_Large_404e96df-9134-43ed-be8b-67932e0c4f1b.jpg?v=1699625445",
//       link: "/products/cappuccino-cake",
//       description: "A coffee lover's delight with rich espresso-infused cake layers.",
//     },
//     {
//       name: "Carrot Cake",
//       image:
//         "//theobroma.in/cdn/shop/files/Carrot_Cake_2_1_Large_f27d85bd-b0c9-4d79-852b-277daf80eb0e.jpg?v=1699625481",
//       link: "/products/carrot-cake",
//       description: "A moist and flavorful cake made with fresh carrots and a hint of cinnamon.",
//     },
//   ];
// function ProductPage() {
//     const { productName } = useParams();
//     const cake = cakes.find(c => c.link.endsWith(productName));
  
//     if (!cake) return <h2 className="text-center text-3xl font-bold py-12">Product Not Found</h2>;
//     const similarCakes = cakes.filter(c => c.name !== cake.name);
//       const [isSticky, setIsSticky] = useState(false);
//       const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open
    
//       // Handle scroll event to toggle sticky class
//       const handleScroll = () => {
//         if (window.scrollY > 50) {
//           setIsSticky(true);
//         } else {
//           setIsSticky(false);
//         }
//       };
    
//       useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//           window.removeEventListener("scroll", handleScroll);
//         };
//       }, []);
    
//       const toggleMenu = (state) => {
//         setMenuOpen(state); // Toggle menu state when the hamburger icon is clicked
//       };

//   return (
//     <>
//     <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
//     <div className="max-w-4xl mx-auto py-12">
//       <nav className="text-sm mb-4">
//         <Link to="/" className="text-gray-500">Home</Link> &gt;
//         <Link to="/speciality-cakes" className="text-gray-500"> Speciality Cakes</Link> &gt;
//         <span className="text-gray-900"> {cake.name}</span>
//       </nav>
//       <div className="flex flex-col md:flex-row items-center">
//         <img src={cake.image} alt={cake.name} className="w-full max-w-md mx-auto" />
//         <div className="md:ml-8 text-center md:text-left">
//           <h2 className="text-3xl font-bold mt-6">{cake.name}</h2>
//           <p className="text-xl font-semibold text-gray-700 mt-2">{cake.price}</p>
//           <p className="mt-4 text-lg">{cake.description}</p>
//           <div className="mt-4">
//             <label className="block text-gray-700 font-semibold">Choose Size</label>
//             <select className="border p-2 mt-2 w-full max-w-xs">
//               <option>1 kg</option>
//             </select>
//           </div>
//           <div className="mt-6 flex flex-col md:flex-row gap-4">
//             <button className="bg-[#b2ddd3] px-6 py-2 text-black font-semibold rounded-md">CALL NOW</button>
//             <button className="border border-gray-500 px-6 py-2 text-black font-semibold rounded-md">EMAIL US</button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12">
//         <h3 className="text-2xl font-bold text-center mb-6">Similar Products</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {similarCakes.map((similarCake, index) => (
//             <div key={index} className="text-center">
//               <Link to={similarCake.link}>
//                 <img src={similarCake.image} alt={similarCake.name} className="w-full h-auto object-cover" />
//                 <h4 className="mt-2 font-semibold">{similarCake.name}</h4>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     <Footer />
//     <ScrollToTopButton />
//     </>
//   )
// }

// export default ProductPage



import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import ScrollToTopButton from '../scrolltotop/ScrollToTopButton';
import SEO from '../SEO/SEO';
import Product1 from "./images/chocolate-cake-with-coffee-cup.jpg";
import Product2 from "./images/cup-tea-near-homemade-cheesecake-with-fresh-berries-mint-dessert-table.jpg";
import Product3 from "./images/top-view-cup-coffee-plate-chocolate-cake-wooden-table.jpg";
import Product4 from "./images/easter-carrot-cake-with-frosting-blue-table.jpg";

import CustomisedVantoCakesImg from "../Allproducts/Pineapple cake.jpg";
import CustomThemeCakeImg from "../Allproducts/images1/photo_2025-03-30_09-50-25.jpg";
import ComboCakeImg from "../Allproducts/images1/photo_2025-03-30_09-50-24.jpg";

const cakes = [
  {
    name: "After Nine Cake",
    image:Product1,
    link: "/products/afternine-cake",
    description: "A rich chocolate cake infused with a hint of mint for a refreshing twist.",
    variants: ['1 kg', '2 kg', '3 kg']
  },
  {
    name: "Almond Nougatine Cake",
    image:Product2,
    link: "/products/almond-nougatine-cake",
    description: "Crunchy nougatine and almonds layered with smooth chocolate mousse.",
    variants: ['1 kg', '2 kg', '3 kg']
  },
  {
    name: "Cappuccino Cake",
    image:Product3,
    link: "/products/cappuccino-cake",
    description: "A coffee lover's delight with rich espresso-infused cake layers.",
    variants: ['1 kg', '2 kg', '3 kg']
  },
  {
    name: "Carrot Cake",
    image:Product4,
    link: "/products/carrot-cake",
    description: "A moist and flavorful cake made with fresh carrots and a hint of cinnamon.",
    variants: ['1 kg', '2 kg', '3 kg']
  },
  {
    name: "Customised VANTO Cakes",
    image: CustomisedVantoCakesImg,
    link: "/products/special-order/customised-vanto-cakes",
    price: "Call/Email for price",
    description: "Custom designed VANTO cakes for your special occasions.",
    variants: []
  },
  {
    name: "Custom Theme Cake",
    image: CustomThemeCakeImg,
    link: "/products/special-order/custom-theme-cake",
    price: "Call/Email for price",
    description: "Custom designed theme cakes for your special occasions.",
    variants: []
  },
  {
    name: "Cake + Pastry + Snack Combo",
    image: ComboCakeImg,
    link: "/products/special-order/cake-pastry-snack-combo",
    price: "Call/Email for price",
    description: "A delightful combo of cake, pastry, and snacks.",
    variants: []
  },
];

// Helper function to normalize slugs (remove multiple consecutive dashes)
const normalizeSlug = (str) => {
  return str.toLowerCase()
    .replace(/\s+/g, '-')  // Replace spaces with single dash
    .replace(/\+/g, '-')    // Replace + with dash
    .replace(/-+/g, '-')    // Replace multiple dashes with single dash
    .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
};

function ProductPage() {
  const { productName: encodedProductName } = useParams();
  const productName = decodeURIComponent(encodedProductName);
  const [selectedSize, setSelectedSize] = useState('1 kg');
  const normalizedProductName = normalizeSlug(productName);
  const cake = cakes.find(c => {
    const linkSlug = normalizeSlug(c.link.split('/').pop());
    return linkSlug === normalizedProductName;
  });

  if (!cake) return <h2 className="text-center text-3xl font-bold py-12">Product Not Found</h2>;
  const similarCakes = cakes.filter(c => c.name !== cake.name);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleCallNow = () => {
    window.location.href = "tel:+916306442533"; // Replace with actual phone number
  };

  const handleEmailUs = () => {
    const subject = `Inquiry about ${cake.name}`;
    const body = `I would like to inquire more about the ${cake.name}. Selected size: ${selectedSize}`;
    window.location.href = `mailto:Shivpratapsinghbundela@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  
  // Generate structured data for the product
  const getImageUrl = (img) => {
    if (typeof img === 'string') {
      if (img.startsWith('http')) return img;
      return window.location.origin + (img.startsWith('/') ? img : '/' + img);
    }
    return window.location.origin + '/new_logos-removebg-preview.png';
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": cake.name,
    "description": cake.description || `Order ${cake.name} from Celebration Bakers`,
    "image": getImageUrl(cake.image),
    "brand": {
      "@type": "Brand",
      "name": "Celebration Bakers"
    },
    "offers": cake.price && cake.price !== "Call/Email for price" ? {
      "@type": "Offer",
      "price": cake.price.replace('₹', '').replace(',', '').trim(),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": window.location.href
    } : {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "url": window.location.href,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "Contact for pricing"
      }
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://celeberationbakers.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Speciality Cakes",
        "item": "https://celeberationbakers.com/speciality-cakes"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cake.name,
        "item": window.location.href
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`${cake.name} - Celebration Bakers | Order Online`}
        description={cake.description || `Order ${cake.name} from Celebration Bakers. ${cake.price ? `Price: ${cake.price}` : 'Call or email for pricing and customization options.'} Fresh, delicious, and made to order.`}
        keywords={`${cake.name}, celebration bakers, ${cake.name.toLowerCase()}, custom cake, order cake online, bakery, ${cake.variants && cake.variants.length > 0 ? 'cake sizes, cake variants' : ''}`}
        image={cake.image}
        type="product"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="max-w-4xl mx-auto py-12">
        <nav className="text-sm mb-4">
          <Link to="/" className="text-gray-500">Home</Link> &gt;
          <Link to="/speciality-cakes" className="text-gray-500"> Speciality Cakes</Link> &gt;
          <span className="text-gray-900"> {cake.name}</span>
        </nav>
        <div className="flex flex-col md:flex-row items-start gap-8 px-4">
          <img src={cake.image} alt={cake.name} className="w-full max-w-xs md:max-w-md mx-auto md:mx-0 h-auto rounded-lg shadow-lg"
          />
          <div className="md:ml-0 text-center md:text-left flex-1">
            <h2 className="text-3xl font-bold mt-6 md:mt-0">{cake.name}</h2>
            {cake.price && (
              <p className="text-xl font-semibold text-gray-700 mt-2">{cake.price}</p>
            )}
            {cake.description && (
              <p className="text-lg text-gray-600 mt-4">{cake.description}</p>
            )}
            {cake.variants && cake.variants.length > 0 && (
              <div className="mt-4">
                <label className="block text-gray-700 font-semibold">Choose Size</label>
                <select
                  value={selectedSize}
                  onChange={handleSizeChange}
                  className="border p-2 mt-2 w-full max-w-xs"
                >
                  {cake.variants.map((variant, idx) => (
                    <option key={idx}>{variant}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button onClick={handleCallNow} className="bg-[#b2ddd3] px-6 py-2 text-black font-semibold rounded-md cursor-pointer hover:bg-[#a0cdc3] transition-colors">CALL NOW</button>
              <button onClick={handleEmailUs} className="border border-gray-500 px-6 py-2 text-black font-semibold rounded-md cursor-pointer hover:bg-gray-100 transition-colors">EMAIL US</button>
            </div>
          </div>
        </div>
        <div className="mt-12 px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Similar Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {similarCakes.map((similarCake, index) => (
              <div key={index} className="group">
                <Link to={similarCake.link} className="block">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={similarCake.image} 
                        alt={similarCake.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 text-center group-hover:text-[#b2ddd3] transition-colors min-h-[3rem] flex items-center justify-center">
                        {similarCake.name}
                      </h4>
                    </div>
                  </div>
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

export default ProductPage;
