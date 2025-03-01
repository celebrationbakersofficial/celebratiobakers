import React from 'react'
import { useParams } from 'react-router-dom';
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
  return (
    <div className="max-w-4xl mx-auto py-12 text-center">
      <img src={cake.image} alt={cake.name} className="w-full max-w-md mx-auto" />
      <h2 className="text-3xl font-bold mt-6">{cake.name}</h2>
      <p className="mt-4 text-lg">{cake.description}</p>
    </div>
  )
}

export default ProductPage
