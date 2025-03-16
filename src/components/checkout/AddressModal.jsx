import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AddressModal({ isOpen, onClose, onSave }) {
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-[450px] relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold mb-4">Enter Complete Address</h2>
        
        <div className="flex gap-2 mb-4">
          <Button variant="outline">Home</Button>
          <Button variant="outline">Office</Button>
          <Button variant="outline">Hotel</Button>
          <Button variant="outline">Other</Button>
        </div>
        
        <input
          type="text"
          className="w-full border p-2 rounded-md mb-3"
          placeholder="House / Flat / Block no.*"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          className="w-full border p-2 rounded-md mb-3"
          placeholder="Landmark*"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />
        <input
          type="text"
          className="w-full border p-2 rounded-md mb-3"
          placeholder="Phone Number*"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          className="w-full border p-2 rounded-md mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
          onClick={() => {
            onSave({ address, landmark, phone, email });
            onClose();
          }}
        >
          Save Address
        </Button>
      </div>
    </div>
  );
}
