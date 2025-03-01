import { useState } from "react";

const teamMembers = [
  {
    name: "RISHI GOUR",
    title: "Chief Executive Officer",
    image: "//theobroma.in/cdn/shop/files/rishi_1.jpg?v=1615354261",
    description: "With over 22 years of international management experience, Rishi has a track record of increasing sales & growing bottom line while driving operational improvements & business transformation, in dynamic and demanding business environments. His areas of expertise include P&L Management, Strategy, Operations, Business Development, Program Management, Change Management & Business Transformation. He was awarded the D&I CEO of the Year at the 2019 Future Fluent Global Summit and has served on the advisory boards of global non-profits Catalyst and Stop Hunger Foundation.",
  },
  {
    name: "KUNAL KUMAR",
    title: "Head – Production, Product Development & Innovation",
    image: "//theobroma.in/cdn/shop/files/Kunal_Chef_Portrait.jpg?v=1703060186",
    description: "With over 20 years of culinary and F&B experience, Kunal heads Production and New Product Development at Theobroma. A graduate of the Oberoi Centre for Learning and Development (OCLD), he has worked with prestigious hospitality chains such as Oberoi Hotels, Accor Hotels and Leela hotels, with international stints in South East Asia and France. Complimenting the extensive experience in hospitality, he has also held leadership positions in the food and bakery manufacturing and retail industry.",
  },
  // Add other team members here
];

const OurTeam = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-yellow-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-5">
              <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover" />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <p className="mt-2 text-gray-800">
                {expanded[index] ? member.description : member.description.substring(0, 100) + "..."}
              </p>
              <button
                className="text-yellow-700 font-semibold mt-2"
                onClick={() => toggleReadMore(index)}
              >
                {expanded[index] ? "READ LESS" : "READ MORE"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
