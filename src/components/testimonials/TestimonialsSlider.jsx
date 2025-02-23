import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./testimonial.css"
const testimonials = [
  {
    text: "Always a delight coming here for pastries. This Theobrama outlet may not be very spacious but their pastries are lip-smacking good. Loved hazelnut pastry among the ones I tried. Value for money and a must-visit place!",
    author: "Saurabh Mehra, Mumbai",
  },
  {
    text: "The pastries here are absolutely delicious! The ambiance is cozy, and the service is great. Highly recommended for dessert lovers!",
    author: "Anjali Sharma, Delhi",
  },
  {
    text: "A hidden gem for sweet lovers. The cakes and pastries are fresh and tasty. Will definitely come back!",
    author: "Rohan Patel, Bangalore",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 1000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className=" testimonials relative flex flex-col items-center text-center p-6 max-w-3xl mx-auto">
      <h2 className="text-sm text-gold font-semibold uppercase tracking-wide">Testimonials</h2>
      <div className="flex items-center gap-4 mt-4">
        <button onClick={prevSlide} className="text-gray-500 hover:text-gray-700">
          <ChevronLeft size={24} />
        </button>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-700 max-w-xl"
        >
          <blockquote className="italic">{testimonials[index].text}</blockquote>
          <p className="mt-4 font-semibold text-gold">{testimonials[index].author}</p>
        </motion.div>
        <button onClick={nextSlide} className="text-gray-500 hover:text-gray-700">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
