import { useState } from "react";

// const teamMembers = [
//   {
//     name: "RISHI GOUR",
//     title: "Chief Executive Officer",
//     image: "//theobroma.in/cdn/shop/files/rishi_1.jpg?v=1615354261",
//     description: "With over 22 years of international management experience, Rishi has a track record of increasing sales & growing bottom line while driving operational improvements & business transformation, in dynamic and demanding business environments. His areas of expertise include P&L Management, Strategy, Operations, Business Development, Program Management, Change Management & Business Transformation. He was awarded the D&I CEO of the Year at the 2019 Future Fluent Global Summit and has served on the advisory boards of global non-profits Catalyst and Stop Hunger Foundation.",
//   },
//   {
//     name: "KUNAL KUMAR",
//     title: "Head – Production, Product Development & Innovation",
//     image: "//theobroma.in/cdn/shop/files/Kunal_Chef_Portrait.jpg?v=1703060186",
//     description: "With over 20 years of culinary and F&B experience, Kunal heads Production and New Product Development at Theobroma. A graduate of the Oberoi Centre for Learning and Development (OCLD), he has worked with prestigious hospitality chains such as Oberoi Hotels, Accor Hotels and Leela hotels, with international stints in South East Asia and France. Complimenting the extensive experience in hospitality, he has also held leadership positions in the food and bakery manufacturing and retail industry.",
//   },
//   // Add other team members here
// ];

const teamMembers = [
  {
    name: "RISHI GOUR",
    title: "Chief Executive Officer",
    image: "https://i.pravatar.cc/300?img=1",
    description: "With over 22 years of international management experience, Rishi has a track record of increasing sales & growing bottom line while driving operational improvements & business transformation, in dynamic and demanding business environments. His areas of expertise include P&L Management, Strategy, Operations, Business Development, Program Management, Change Management & Business Transformation. He was awarded the D&I CEO of the Year at the 2019 Future Fluent Global Summit and has served on the advisory boards of global non-profits Catalyst and Stop Hunger Foundation.",
  },
  {
    name: "KUNAL KUMAR",
    title: "Head – Production, Product Development & Innovation",
    image: "https://i.pravatar.cc/300?img=11",
    description: "With over 20 years of culinary and F&B experience, Kunal heads Production and New Product Development at Theobroma. A graduate of the Oberoi Centre for Learning and Development (OCLD), he has worked with prestigious hospitality chains such as Oberoi Hotels, Accor Hotels and Leela hotels, with international stints in South East Asia and France. Complimenting the extensive experience in hospitality, he has also held leadership positions in the food and bakery manufacturing and retail industry.",
  },
  {
    name: "ANJALI MEHTA",
    title: "Chief Financial Officer",
    image: "https://i.pravatar.cc/300?img=3",
    description: "Anjali is a seasoned finance professional with 18 years of experience in financial strategy, risk management, and corporate governance. She has previously worked with leading multinational companies, driving financial growth and stability.",
  },
  {
    name: "RAHUL SHARMA",
    title: "Head of Marketing & Strategy",
    image: "https://i.pravatar.cc/300?img=4",
    description: "Rahul brings over 15 years of experience in brand management, digital marketing, and business strategy. He has played a crucial role in scaling brands and executing successful marketing campaigns.",
  },
  {
    name: "PRIYA SINGH",
    title: "Head of Human Resources",
    image: "https://i.pravatar.cc/300?img=5",
    description: "Priya has over 12 years of experience in HR strategy, talent acquisition, and employee engagement. She is passionate about fostering a positive work culture and ensuring organizational growth through people development.",
  },
  {
    name: "VIKAS NAIR",
    title: "Chief Technology Officer",
    image: "https://i.pravatar.cc/300?img=9",
    description: "Vikas is a technology leader with expertise in digital transformation, cloud computing, and cybersecurity. With 16 years of experience, he has led several IT initiatives to enhance business operations.",
  }
];


const OurTeam = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-[#fdf8e9] py-10">
      <div className="container mx-auto text-center">
      <div className="grid md:grid-cols-2 gap-x-0 gap-y-6 px-5"> {/* Reduced horizontal gap */}
      {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg p-5 text-left max-w-md mx-auto">
              <div className="bg-black p-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-yellow-700 mt-4">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.title}</p>
              <p className="mt-2 text-gray-800 text-sm">
                {expanded[index] ? member.description : member.description.substring(0, 100) + "..."}
              </p>
              <button
                className="text-yellow-700 text-xs underline font-semibold mt-2"
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
