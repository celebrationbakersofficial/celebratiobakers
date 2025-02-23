import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Card, CardContent } from "../ui/Card";

export default function StoreLocator() {
  const [radius, setRadius] = useState(5);

  return (
    <div className="bg-[#fdf1e6] min-h-screen flex flex-col items-center p-8">
      <h2 className="text-lg text-gray-700 text-center mb-4">
        We are present in over 200+ locations across 30+ cities. Find a Theobroma
        Bakery Shop Near You.
      </h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4">
        <div className="flex-1 h-[500px] border rounded-lg overflow-hidden">
          <iframe
            title="Google Maps"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789!2d75.8577258!3d30.9002016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83b06f83d6df%3A0x123456789abcd!2sKIPPS%20Market!5e0!3m2!1sen!2sin!4v1672020000000"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:w-96 bg-white shadow-lg rounded-lg p-4">
          <div className="relative flex items-center border rounded-md px-3 py-2 mb-4">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              className="flex-1 outline-none px-2 text-sm"
              placeholder="Enter Location..."
              defaultValue="WV24+9WF, Vishwakarma Chowk, Sant Pura, Ludhiana"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600">Search Radius: {radius} km</label>
            <input
              type="range"
              min="1"
              max="10"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full mt-1"
            />
          </div>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <MapPin className="w-5 h-5 text-yellow-500" /> KIPPS Market
              </div>
              <p className="text-sm text-gray-600 mt-1">
                SCO 35, Ground floor, Left hand side portion
                <br /> Kipps market, Sarabha Nagar, Ludhiana, Punjab - 141001
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
