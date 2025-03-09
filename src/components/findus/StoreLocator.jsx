import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Search } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import OrderSection from "../ordersection/OrderSection";
import "./StoreLocator.css"
import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";
export default function StoreLocator() {
  const [radius, setRadius] = useState(5);
  const [location, setLocation] = useState({ lat: 30.3782, lng: 76.7767 }); // Default to Ambala Cantt

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  }, []);
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
      <div className="bg-[#fdf1e6] flex flex-col items-center p-24 flex-grow sm:flex-row md:flex-col">
      <h2 className="text-lg text-gray-700 text-center mb-4">
        We are present in over 200+ locations across 30+ cities. Find a Theobroma
        Bakery Shop Near You.
      </h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4">
      <div class="flex-1 h-[500px] border rounded-lg overflow-hidden flex-shrink-0">
      <MapContainer center={[location.lat, location.lng]} zoom={13} className="leaflet-container h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.lat, location.lng]}>
              <Popup>Your Location</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="w-full md:w-96 bg-white shadow-lg rounded-lg p-4">
          <div className="relative flex items-center border rounded-md px-3 py-2 mb-4">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              className="flex-1 outline-none px-2 text-sm"
              placeholder="Enter Location..."
              defaultValue="Ambala Cantt"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600">
              Search Radius: {radius} km
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full mt-1"
            />
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <MapPin className="w-5 h-5 text-yellow-500" /> KIPPS Market
            </div>
            <p className="text-sm text-gray-600 mt-1">
              SCO 35, Ground floor, Left hand side portion
              <br /> Kipps market, Kardhan Road, Ambala Cantt, Haryana - 133001
            </p>
          </div>
        </div>
      </div>
    </div>
      <OrderSection />
      <Footer />
      <ScrollToTopButton />
      </>
  );
}
