// // // // import React from "react";
// // // // import image1 from "./imagesss/anna-przepiorka-LjtviHokbr4-unsplash.jpg";
// // // // import image2 from "./imagesss/elle-inlom-aJDpzJTB9tI-unsplash.jpg";
// // // // import image3 from "./imagesss/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg";
// // // // import image5 from "./imagesss/inna-safa-saTHWyeTGQQ-unsplash.jpg";
// // // // import image6 from "./imagesss/kumiko-shimizu-_ualFWI3D9s-unsplash.jpg";
// // // // import image7 from "./imagesss/sergio-arze-UNhdg9K7Snw-unsplash.jpg";
// // // // import image9 from "./imagesss/sergio-arze-wq39WnRNRfg-unsplash.jpg";
// // // // import image71 from "./imagesss/z-graphica-UrBEO1g6O_0-unsplash.jpg";
// // // // const products = [
// // // //   {
// // // //     name: "Fresh Cream Pineapple Cake",
// // // //     image: image1,
// // // //   },
// // // //   {
// // // //     name: "Overload Brownie",
// // // //     image: image2,
// // // //   },
// // // //   {
// // // //     name: "Dense Loaf",
// // // //     image: image3,
// // // //   },
// // // //   {
// // // //     name: "Baked Wada Pao (1 Pc)",
// // // //     image: image5,
// // // //   },
// // // //   {
// // // //     name: "Blueberry Cheesecake Cup",
// // // //     image: image6,
// // // //   },
// // // //   {
// // // //     name: "Chocoholic Pastry",
// // // //     image: image7,
// // // //   },
// // // //   {
// // // //     name: "Chocolate Chip Cookies",
// // // //     image: image9,
// // // //   },
// // // //   {
// // // //     name: "Butter Palmiers",
// // // //     image: image71,
// // // //   },
// // // // ];

// // // // const BakerySection = () => {
// // // //   return (
// // // //     <div className="bg-gray-100 py-10 px-4">
// // // //               <h2 className="section-title">Our best sellers</h2>
// // // //       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// // // //         {products.map((product, index) => (
// // // //           <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
// // // //             <img
// // // //               src={product.image}
// // // //               alt={product.name}
// // // //               className="w-full h-40 object-cover"
// // // //             />
// // // //             <div className="p-4 text-center">
// // // //               <h3 className="text-lg font-semibold text-gray-700">
// // // //                 {product.name}
// // // //               </h3>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BakerySection;


// // // import React from "react";
// // // import image1 from "./imagesss/anna-przepiorka-LjtviHokbr4-unsplash.jpg";
// // // import image2 from "./imagesss/elle-inlom-aJDpzJTB9tI-unsplash.jpg";
// // // import image3 from "./imagesss/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg";
// // // import image5 from "./imagesss/inna-safa-saTHWyeTGQQ-unsplash.jpg";
// // // import image6 from "./imagesss/kumiko-shimizu-_ualFWI3D9s-unsplash.jpg";
// // // import image7 from "./imagesss/sergio-arze-UNhdg9K7Snw-unsplash.jpg";
// // // import image9 from "./imagesss/sergio-arze-wq39WnRNRfg-unsplash.jpg";
// // // import image71 from "./imagesss/z-graphica-UrBEO1g6O_0-unsplash.jpg";

// // // const products = [
// // //   {
// // //     name: "Fresh Cream Pineapple Cake",
// // //     image: image1,
// // //   },
// // //   {
// // //     name: "Overload Brownie",
// // //     image: image2,
// // //   },
// // //   {
// // //     name: "Dense Loaf",
// // //     image: image3,
// // //   },
// // //   {
// // //     name: "Baked Wada Pao (1 Pc)",
// // //     image: image5,
// // //   },
// // //   {
// // //     name: "Blueberry Cheesecake Cup",
// // //     image: image6,
// // //   },
// // //   {
// // //     name: "Chocoholic Pastry",
// // //     image: image7,
// // //   },
// // //   {
// // //     name: "Chocolate Chip Cookies",
// // //     image: image9,
// // //   },
// // //   {
// // //     name: "Butter Palmiers",
// // //     image: image71,
// // //   },
// // // ];

// // // const BakerySection = () => {
// // //   return (
// // //     <div className="bg-gray-100 py-10 px-4">
// // //       <h2 className="section-title text-2xl font-bold text-center mb-8">Our Best Sellers</h2>
// // //       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// // //         {products.map((product, index) => (
// // //           <div
// // //             key={index}
// // //             className="group bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative"
// // //           >
// // //             <img
// // //               src={product.image}
// // //               alt={product.name}
// // //               className="w-full h-40 object-cover transition duration-300 ease-in-out group-hover:opacity-10"
// // //             />
// // //             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out" />
// // //             <div className="p-4 text-center">
// // //               <h3 className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out">
// // //                 {product.name}
// // //               </h3>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BakerySection;


// // import React from "react";
// // import image1 from "./imagesss/anna-przepiorka-LjtviHokbr4-unsplash.jpg";
// // import image2 from "./imagesss/elle-inlom-aJDpzJTB9tI-unsplash.jpg";
// // import image3 from "./imagesss/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg";
// // import image5 from "./imagesss/inna-safa-saTHWyeTGQQ-unsplash.jpg";
// // import image6 from "./imagesss/kumiko-shimizu-_ualFWI3D9s-unsplash.jpg";
// // import image7 from "./imagesss/sergio-arze-UNhdg9K7Snw-unsplash.jpg";
// // import image9 from "./imagesss/sergio-arze-wq39WnRNRfg-unsplash.jpg";
// // import image71 from "./imagesss/z-graphica-UrBEO1g6O_0-unsplash.jpg";

// // const products = [
// //   {
// //     name: "Fresh Cream Pineapple Cake",
// //     image: image1,
// //   },
// //   {
// //     name: "Overload Brownie",
// //     image: image2,
// //   },
// //   {
// //     name: "Dense Loaf",
// //     image: image3,
// //   },
// //   {
// //     name: "Baked Wada Pao (1 Pc)",
// //     image: image5,
// //   },
// //   {
// //     name: "Blueberry Cheesecake Cup",
// //     image: image6,
// //   },
// //   {
// //     name: "Chocoholic Pastry",
// //     image: image7,
// //   },
// //   {
// //     name: "Chocolate Chip Cookies",
// //     image: image9,
// //   },
// //   {
// //     name: "Butter Palmiers",
// //     image: image71,
// //   },
// // ];

// // const BakerySection = () => {
// //   return (
// //     <div className="bg-gray-100 py-10 px-4">
// //       <h2 className="section-title text-2xl font-bold text-center mb-8">Our Best Sellers</h2>
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //         {products.map((product, index) => (
// //           <div
// //             key={index}
// //             className="group bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative"
// //           >
// //             <img
// //               src={product.image}
// //               alt={product.name}
// //               className="w-full h-40 object-cover transition duration-300 ease-in-out group-hover:opacity-80"
// //             />
// //             {/* Softer gradient overlay */}
// //             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
// //             <div className="p-4 text-center relative z-10">
// //               <h3 className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out">
// //                 {product.name}
// //               </h3>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BakerySection;


// import React from "react";
// import image1 from "./imagesss/anna-przepiorka-LjtviHokbr4-unsplash.jpg";
// import image2 from "./imagesss/elle-inlom-aJDpzJTB9tI-unsplash.jpg";
// import image3 from "./imagesss/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg";
// import image5 from "./imagesss/inna-safa-saTHWyeTGQQ-unsplash.jpg";
// import image6 from "./imagesss/kumiko-shimizu-_ualFWI3D9s-unsplash.jpg";
// import image7 from "./imagesss/sergio-arze-UNhdg9K7Snw-unsplash.jpg";
// import image9 from "./imagesss/sergio-arze-wq39WnRNRfg-unsplash.jpg";
// import image71 from "./imagesss/z-graphica-UrBEO1g6O_0-unsplash.jpg";

// const products = [
//   {
//     name: "Fresh Cream Pineapple Cake",
//     image: image1,
//   },
//   {
//     name: "Overload Brownie",
//     image: image2,
//   },
//   {
//     name: "Dense Loaf",
//     image: image3,
//   },
//   {
//     name: "Baked Wada Pao (1 Pc)",
//     image: image5,
//   },
//   {
//     name: "Blueberry Cheesecake Cup",
//     image: image6,
//   },
//   {
//     name: "Chocoholic Pastry",
//     image: image7,
//   },
//   {
//     name: "Chocolate Chip Cookies",
//     image: image9,
//   },
//   {
//     name: "Butter Palmiers",
//     image: image71,
//   },
// ];

// const BakerySection = () => {
//   return (
//     <div className="bg-gray-100 py-10 px-4">
//       <h2 className="section-title text-2xl font-bold text-center mb-8">Our Best Sellers</h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="group bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl relative"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-40 object-cover transition duration-300 ease-in-out group-hover:opacity-90"
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out">
//                 {product.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BakerySection;


import React from "react";
import image1 from "./imagess/anna-przepiorka-LjtviHokbr4-unsplash.jpg";
import image2 from "./imagess/elle-inlom-aJDpzJTB9tI-unsplash.jpg";
import image3 from "./imagess/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg";
import image5 from "./imagess/inna-safa-saTHWyeTGQQ-unsplash.jpg";
import image6 from "./imagess/kumiko-shimizu-_ualFWI3D9s-unsplash.jpg";
import image7 from "./imagess/sergio-arze-UNhdg9K7Snw-unsplash.jpg";
import image9 from "./imagess/sergio-arze-wq39WnRNRfg-unsplash.jpg";
import image71 from "./imagess/z-graphica-UrBEO1g6O_0-unsplash.jpg";

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
      <h2 className="section-title text-2xl font-bold text-center mb-8">Our Best Sellers</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
  key={index}
  className="group bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl relative"
>
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-40 object-cover transition duration-300 ease-in-out group-hover:opacity-90"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-black transition-colors duration-300 ease-in-out">
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
