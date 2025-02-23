import React from 'react'
import SpecialHamper from './anthony-demarino-MIghDHwPsVg-unsplash.jpg'

function SpecialHampers() {
  return (
    <section className="bg-red-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Packed with love &<br />
            <span className="text-red-600">all your favourites!</span>
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Now gift your loved ones our special hampers curated with our<br />
            signature products.
          </p>
  
          <a 
            href="#know-more"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 mt-8"
          >
            KNOW MORE
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img 
            src={SpecialHamper} // Replace with your image path
            alt="Special Hampers"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialHampers;
