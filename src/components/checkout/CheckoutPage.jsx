// // // import React, { useEffect, useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import { Input } from "@/components/ui/input";
// // // import { Checkbox } from "@/components/ui/checkbox";
// // // import { Select, SelectItem } from "@/components/ui/select";
// // // import Navbar from "@/components/Navbar";
// // // import Footer from "@/components/Footer";

// // // export default function CheckoutPage() {
// // //   const [deliverySlot, setDeliverySlot] = useState(null);
// // //   const [giftOption, setGiftOption] = useState(false);
// // //   const [address, setAddress] = useState(null);

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <div className="min-h-screen bg-[#f4f4f4] p-6 flex justify-center">
// // //         <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
// // //           {/* Theobroma Store Details */}
// // //           <div className="flex items-center space-x-2 border-b pb-4">
// // //             <h2 className="text-lg font-semibold">Theobroma</h2>
// // //             <span className="text-gray-500 text-sm">Kipps Market, Ludhiana</span>
// // //           </div>

// // //           {/* Delivery Option */}
// // //           <div className="mt-4 flex justify-between bg-gray-100 p-3 rounded-md">
// // //             <Button className="bg-black text-white px-4 py-2 rounded">Delivery (60 Mins)</Button>
// // //             <Button className="text-gray-600 px-4 py-2 rounded">Pickup</Button>
// // //           </div>

// // //           {/* Address Section */}
// // //           <div className="mt-4 border p-4 rounded-md">
// // //             <h3 className="font-medium text-md">Delivery Address</h3>
// // //             <Card className="mt-2 bg-gray-50">
// // //               <CardContent className="p-4 flex justify-between items-center">
// // //                 {address ? (
// // //                   <span>{address}</span>
// // //                 ) : (
// // //                   <Button variant="outline" onClick={() => setAddress("Home, Example Street")}>
// // //                     + Add New Address
// // //                   </Button>
// // //                 )}
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Delivery Slot */}
// // //           <div className="mt-4">
// // //             <h3 className="font-medium text-md">Delivery Slot</h3>
// // //             <Select onValueChange={setDeliverySlot} className="mt-2 w-full">
// // //               <SelectItem value="Morning">Morning</SelectItem>
// // //               <SelectItem value="Afternoon">Afternoon</SelectItem>
// // //               <SelectItem value="Evening">Evening</SelectItem>
// // //             </Select>
// // //           </div>

// // //           {/* Gift Option */}
// // //           <div className="mt-4 flex items-center space-x-2 border p-4 rounded-md">
// // //             <Checkbox checked={giftOption} onCheckedChange={setGiftOption} />
// // //             <span className="text-red-600 font-medium">Want to send this as a gift?</span>
// // //           </div>

// // //           {/* Order Summary */}
// // //           <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
// // //             <h3 className="font-medium text-md">Bill Details</h3>
// // //             <div className="mt-2 space-y-2">
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Subtotal</span>
// // //                 <span>₹120.00</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Delivery Charges</span>
// // //                 <span>₹21.19</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Packaging Charges</span>
// // //                 <span>₹16.95</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>GST</span>
// // //                 <span>₹28.46</span>
// // //               </div>
// // //               <div className="flex justify-between font-semibold text-md">
// // //                 <span>Grand Total</span>
// // //                 <span>₹186.60</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Place Order Button */}
// // //           <Button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
// // //             Select Delivery Slot
// // //           </Button>
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </>
// // //   );
// // // }


// // // import React, { useEffect, useState } from "react";
// // // import { Button } from "../ui/button";
// // // import { Card, CardContent } from "../ui/Card";
// // // import { Checkbox } from "../ui/checkbox";
// // // import { Select, SelectItem } from "../ui/select";
// // // import Footer from "../Footer";
// // // import Navbar from "../Navbar/Navbar";

// // // export default function CheckoutPage() {
// // //   const [deliverySlot, setDeliverySlot] = useState(null);
// // //   const [giftOption, setGiftOption] = useState(false);
// // //   const [address, setAddress] = useState(null);
// // //   const [isSticky, setIsSticky] = useState(false);
// // //   const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open

// // //   // Handle scroll event to toggle sticky class
// // //   const handleScroll = () => {
// // //     if (window.scrollY > 50) {
// // //       setIsSticky(true);
// // //     } else {
// // //       setIsSticky(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   const toggleMenu = (state) => {
// // //     setMenuOpen(state); // Toggle menu state when the hamburger icon is clicked
// // //   };
// // //   return (
// // //     <>
// // //             <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />      
// // //       <div className="min-h-screen bg-[#f4f4f4] p-6 flex justify-center">
// // //         <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
// // //           {/* Theobroma Store Details */}
// // //           <div className="flex items-center space-x-2 border-b pb-4">
// // //             <h2 className="text-lg font-semibold">Theobroma</h2>
// // //             <span className="text-gray-500 text-sm">Kipps Market, Ludhiana</span>
// // //           </div>

// // //           {/* Delivery Option */}
// // //           <div className="mt-4 flex justify-between bg-gray-100 p-3 rounded-md">
// // //             <Button className="bg-black text-white px-4 py-2 rounded">Delivery (60 Mins)</Button>
// // //             <Button className="text-gray-600 px-4 py-2 rounded">Pickup</Button>
// // //           </div>

// // //           {/* Address Section */}
// // //           <div className="mt-4 border p-4 rounded-md">
// // //             <h3 className="font-medium text-md">Delivery Address</h3>
// // //             <Card className="mt-2 bg-gray-50">
// // //               <CardContent className="p-4 flex justify-between items-center">
// // //                 {address ? (
// // //                   <span>{address}</span>
// // //                 ) : (
// // //                   <Button variant="outline" onClick={() => setAddress("Home, Example Street")}>
// // //                     + Add New Address
// // //                   </Button>
// // //                 )}
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Delivery Slot */}
// // //           <div className="mt-4">
// // //             <h3 className="font-medium text-md">Delivery Slot</h3>
// // //             <Select onValueChange={setDeliverySlot} className="mt-2 w-full">
// // //               <SelectItem value="Morning">Morning</SelectItem>
// // //               <SelectItem value="Afternoon">Afternoon</SelectItem>
// // //               <SelectItem value="Evening">Evening</SelectItem>
// // //             </Select>
// // //           </div>

// // //           {/* Gift Option */}
// // //           <div className="mt-4 flex items-center space-x-2 border p-4 rounded-md">
// // //             <Checkbox checked={giftOption} onCheckedChange={setGiftOption} />
// // //             <span className="text-red-600 font-medium">Want to send this as a gift?</span>
// // //           </div>

// // //           {/* Order Summary */}
// // //           <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
// // //             <h3 className="font-medium text-md">Bill Details</h3>
// // //             <div className="mt-2 space-y-2">
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Subtotal</span>
// // //                 <span>₹120.00</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Delivery Charges</span>
// // //                 <span>₹21.19</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Packaging Charges</span>
// // //                 <span>₹16.95</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>GST</span>
// // //                 <span>₹28.46</span>
// // //               </div>
// // //               <div className="flex justify-between font-semibold text-md">
// // //                 <span>Grand Total</span>
// // //                 <span>₹186.60</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Place Order Button */}
// // //           <Button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
// // //             Select Delivery Slot
// // //           </Button>
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </>
// // //   );
// // // }


// // // import React, { useEffect, useState } from "react";
// // // import { Button } from "../ui/button";
// // // import { Card, CardContent } from "../ui/Card";
// // // import { Checkbox } from "../ui/checkbox";
// // // import { Select, SelectItem } from "../ui/select";
// // // import Footer from "../Footer";
// // // import Navbar from "../Navbar/Navbar";
// // // import DeliverySlotModal from "./DeliverySlotModal";
// // // import GiftModal from "./GiftModal";

// // // export default function CheckoutPage() {
// // //   const [deliverySlot, setDeliverySlot] = useState(null);
// // //   const [giftOption, setGiftOption] = useState(false);
// // //   const [address, setAddress] = useState(null);
// // //   const [isSticky, setIsSticky] = useState(false);
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false); // New state for modal
// // //   const [isGiftModalOpen, setIsGiftModalOpen] = useState(false); // State for Gift Modal

// // //   // Handle scroll event to toggle sticky class
// // //   const handleScroll = () => {
// // //     if (window.scrollY > 50) {
// // //       setIsSticky(true);
// // //     } else {
// // //       setIsSticky(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   const toggleMenu = (state) => {
// // //     setMenuOpen(state);
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />

// // //       <div className="min-h-screen bg-[#f4f4f4] p-6 flex justify-center">
// // //         <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
// // //           {/* Theobroma Store Details */}
// // //           <div className="flex items-center space-x-2 border-b pb-4">
// // //             <h2 className="text-lg font-semibold">Theobroma</h2>
// // //             <span className="text-gray-500 text-sm">Kipps Market, Ludhiana</span>
// // //           </div>

// // //           {/* Delivery Option */}
// // //           <div className="mt-4 flex justify-between bg-gray-100 p-3 rounded-md">
// // //             <Button className="bg-black text-white px-4 py-2 rounded">Delivery (60 Mins)</Button>
// // //             <Button className="text-gray-600 px-4 py-2 rounded">Pickup</Button>
// // //           </div>

// // //           {/* Address Section */}
// // //           <div className="mt-4 border p-4 rounded-md">
// // //             <h3 className="font-medium text-md">Delivery Address</h3>
// // //             <Card className="mt-2 bg-gray-50">
// // //               <CardContent className="p-4 flex justify-between items-center">
// // //                 {address ? (
// // //                   <span>{address}</span>
// // //                 ) : (
// // //                   <Button variant="outline" onClick={() => setAddress("Home, Example Street")}>
// // //                     + Add New Address
// // //                   </Button>
// // //                 )}
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Delivery Slot */}
// // //           <div className="mt-4">
// // //             <h3 className="font-medium text-md">Delivery Slot</h3>
// // //             <div 
// // //               className="mt-2 w-full border p-2 rounded cursor-pointer text-gray-600"
// // //               onClick={() => setIsDeliveryModalOpen(true)}
// // //             >
// // //               {deliverySlot ? deliverySlot : "Select a Delivery Slot"}
// // //             </div>
// // //           </div>

// // //           {/* Gift Option */}
// // //           <div className="mt-4 flex items-center space-x-2 border p-4 rounded-md">
// // //             <Checkbox
// // //               checked={giftOption}
// // //               onCheckedChange={(checked) => {
// // //                 setGiftOption(checked);
// // //                 if (checked) setIsGiftModalOpen(true); // Open modal if checked
// // //               }}
// // //             />
// // //             <span className="text-red-600 font-medium">Want to send this as a gift?</span>
// // //           </div>

// // //           {/* Order Summary */}
// // //           <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
// // //             <h3 className="font-medium text-md">Bill Details</h3>
// // //             <div className="mt-2 space-y-2">
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Subtotal</span>
// // //                 <span>₹120.00</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Delivery Charges</span>
// // //                 <span>₹21.19</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>Packaging Charges</span>
// // //                 <span>₹16.95</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span>GST</span>
// // //                 <span>₹28.46</span>
// // //               </div>
// // //               <div className="flex justify-between font-semibold text-md">
// // //                 <span>Grand Total</span>
// // //                 <span>₹186.60</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Place Order Button */}
// // //           <Button
// // //             className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
// // //             onClick={() => setIsDeliveryModalOpen(true)}
// // //           >
// // //             Select Delivery Slot
// // //           </Button>
// // //         </div>
// // //       </div>

// // //       <Footer />

// // //       {/* Delivery Slot Modal */}
// // //       {isDeliveryModalOpen && (
// // //         <DeliverySlotModal
// // //           onClose={() => setIsDeliveryModalOpen(false)}
// // //           onSelectSlot={(slot) => {
// // //             setDeliverySlot(slot);
// // //             setIsDeliveryModalOpen(false);
// // //           }}
// // //         />
// // //       )}
// // //             {/* Gift Modal */}
// // //             {isGiftModalOpen && (
// // //         <GiftModal
// // //           isOpen={isGiftModalOpen}
// // //           onClose={() => setIsGiftModalOpen(false)}
// // //         />
// // //       )}
// // //     </>
// // //   );
// // // }


// // import React, { useEffect, useState } from "react";
// // import { Button } from "../ui/button";
// // import { Card, CardContent } from "../ui/Card";
// // import { Checkbox } from "../ui/checkbox";
// // import { Select, SelectItem } from "../ui/select";
// // import Footer from "../Footer";
// // import Navbar from "../Navbar/Navbar";
// // import DeliverySlotModal from "./DeliverySlotModal";
// // import GiftModal from "./GiftModal";

// // export default function CheckoutPage() {
// //   const [deliverySlot, setDeliverySlot] = useState(null);
// //   const [giftOption, setGiftOption] = useState(false);
// //   const [address, setAddress] = useState(null);
// //   const [isSticky, setIsSticky] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
// //   const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
// //   const [isPickup, setIsPickup] = useState(false);

// //   const handleScroll = () => {
// //     setIsSticky(window.scrollY > 50);
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={setMenuOpen} />

// //       <div className="min-h-screen bg-[#f4f4f4] p-6 flex justify-center">
// //         <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
// //           {/* Theobroma Store Details */}
// //           <div className="flex items-center space-x-2 border-b pb-4">
// //             <h2 className="text-lg font-semibold">Theobroma</h2>
// //             <span className="text-gray-500 text-sm">Kipps Market, Ludhiana</span>
// //           </div>

// //           {/* Delivery & Pickup Toggle */}
// //           <div className="mt-4 flex justify-between bg-gray-100 p-3 rounded-md">
// //             <Button 
// //               className={`${!isPickup ? "bg-black text-white" : "text-gray-600"} px-4 py-2 rounded`} 
// //               onClick={() => setIsPickup(false)}
// //             >
// //               Delivery (60 Mins)
// //             </Button>
// //             <Button 
// //               className={`${isPickup ? "bg-black text-white" : "text-gray-600"} px-4 py-2 rounded`} 
// //               onClick={() => setIsPickup(true)}
// //             >
// //               Pickup
// //             </Button>
// //           </div>

// //           {/* Delivery or Pickup Details */}
// //           {!isPickup ? (
// //             <div className="mt-4 border p-4 rounded-md">
// //               <h3 className="font-medium text-md">Delivery Address</h3>
// //               <Card className="mt-2 bg-gray-50">
// //                 <CardContent className="p-4 flex justify-between items-center">
// //                   {address ? (
// //                     <span>{address}</span>
// //                   ) : (
// //                     <Button variant="outline" onClick={() => setAddress("Home, Example Street")}>+ Add New Address</Button>
// //                   )}
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           ) : (
// //             <div className="mt-4 border p-4 rounded-md flex justify-between items-center">
// //               <span className="text-gray-700">Pick up your order from:</span>
// //               <a 
// //                 href="https://www.google.com/maps/dir//30.8931073,75.82148223/@30.8931073,75.82148223,17z/data=!4m2!4m1!3e0" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer" 
// //                 className="text-blue-600 underline"
// //               >
// //                 Get Directions
// //               </a>
// //             </div>
// //           )}

// //           {/* Delivery Slot */}
// //           {!isPickup && (
// //             <div className="mt-4">
// //               <h3 className="font-medium text-md">Delivery Slot</h3>
// //               <div 
// //                 className="mt-2 w-full border p-2 rounded cursor-pointer text-gray-600"
// //                 onClick={() => setIsDeliveryModalOpen(true)}
// //               >
// //                 {deliverySlot ? deliverySlot : "Select a Delivery Slot"}
// //               </div>
// //             </div>
// //           )}

// //           {/* Gift Option */}
// //           <div className="mt-4 flex items-center space-x-2 border p-4 rounded-md">
// //             <Checkbox
// //               checked={giftOption}
// //               onCheckedChange={(checked) => {
// //                 setGiftOption(checked);
// //                 if (checked) setIsGiftModalOpen(true);
// //               }}
// //             />
// //             <span className="text-red-600 font-medium">Want to send this as a gift?</span>
// //           </div>
// //         </div>
// //       </div>

// //       <Footer />

// //       {/* Delivery Slot Modal */}
// //       {isDeliveryModalOpen && (
// //         <DeliverySlotModal
// //           onClose={() => setIsDeliveryModalOpen(false)}
// //           onSelectSlot={(slot) => {
// //             setDeliverySlot(slot);
// //             setIsDeliveryModalOpen(false);
// //           }}
// //         />
// //       )}
      
// //       {/* Gift Modal */}
// //       {isGiftModalOpen && (
// //         <GiftModal isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} />
// //       )}
// //     </>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { Button } from "../ui/button";
// import { Card, CardContent } from "../ui/Card";
// import { Checkbox } from "../ui/checkbox";
// import { Select, SelectItem } from "../ui/select";
// import Footer from "../Footer";
// import Navbar from "../Navbar/Navbar";
// import DeliverySlotModal from "./DeliverySlotModal";
// import GiftModal from "./GiftModal";

// export default function CheckoutPage() {
//   const [deliverySlot, setDeliverySlot] = useState(null);
//   const [giftOption, setGiftOption] = useState(false);
//   const [address, setAddress] = useState(null);
//   const [isSticky, setIsSticky] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
//   const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
//   const [isPickup, setIsPickup] = useState(false);
//   const [isPickupConfirmModalOpen, setIsPickupConfirmModalOpen] = useState(false);

//   const handleScroll = () => {
//     setIsSticky(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={setMenuOpen} />

//       <div className="min-h-screen bg-[#f4f4f4] p-6 flex justify-center">
//         <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
//           {/* Theobroma Store Details */}
//           <div className="flex items-center space-x-2 border-b pb-4">
//             <h2 className="text-lg font-semibold">Theobroma</h2>
//             <span className="text-gray-500 text-sm">Kipps Market, Ludhiana</span>
//           </div>

//           {/* Delivery & Pickup Toggle */}
//           <div className="mt-4 flex justify-between bg-gray-100 p-3 rounded-md">
//             <Button 
//               className={`${!isPickup ? "bg-black text-white" : "text-gray-600"} px-4 py-2 rounded`} 
//               onClick={() => setIsPickup(false)}
//             >
//               Delivery (60 Mins)
//             </Button>
//             <Button 
//               className={`${isPickup ? "bg-black text-white" : "text-gray-600"} px-4 py-2 rounded`} 
//               onClick={() => setIsPickupConfirmModalOpen(true)}
//             >
//               Pickup
//             </Button>
//           </div>

//           {/* Delivery or Pickup Details */}
//           {!isPickup ? (
//             <div className="mt-4 border p-4 rounded-md">
//               <h3 className="font-medium text-md">Delivery Address</h3>
//               <Card className="mt-2 bg-gray-50">
//                 <CardContent className="p-4 flex justify-between items-center">
//                   {address ? (
//                     <span>{address}</span>
//                   ) : (
//                     <Button variant="outline" onClick={() => setAddress("Home, Example Street")}>
//                       + Add New Address
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           ) : (
//             <div className="mt-4 border p-4 rounded-md flex justify-between items-center">
//               <span className="text-gray-700">Pick up your order from:</span>
//               <a 
//                 href="https://www.google.com/maps/dir//30.8931073,75.82148223/@30.8931073,75.82148223,17z/data=!4m2!4m1!3e0" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-blue-600 underline"
//               >
//                 Get Directions
//               </a>
//             </div>
//           )}

//           {/* Delivery Slot */}
//           {!isPickup && (
//             <div className="mt-4">
//               <h3 className="font-medium text-md">Delivery Slot</h3>
//               <div 
//                 className="mt-2 w-full border p-2 rounded cursor-pointer text-gray-600"
//                 onClick={() => setIsDeliveryModalOpen(true)}
//               >
//                 {deliverySlot ? deliverySlot : "Select a Delivery Slot"}
//               </div>
//             </div>
//           )}

//           {/* Gift Option */}
//           <div className="mt-4 flex items-center space-x-2 border p-4 rounded-md">
//             <Checkbox
//               checked={giftOption}
//               onCheckedChange={(checked) => {
//                 setGiftOption(checked);
//                 if (checked) setIsGiftModalOpen(true);
//               }}
//             />
//             <span className="text-red-600 font-medium">Want to send this as a gift?</span>
//           </div>
//         </div>
//       </div>

//       <Footer />

//       {/* Delivery Slot Modal */}
//       {isDeliveryModalOpen && (
//         <DeliverySlotModal
//           onClose={() => setIsDeliveryModalOpen(false)}
//           onSelectSlot={(slot) => {
//             setDeliverySlot(slot);
//             setIsDeliveryModalOpen(false);
//           }}
//         />
//       )}
      
//       {/* Gift Modal */}
//       {isGiftModalOpen && (
//         <GiftModal isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} />
//       )}

//       {/* Pickup Confirmation Modal */}
//       {isPickupConfirmModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-md w-96">
//             <h2 className="text-lg font-semibold">Pickup Order</h2>
//             <p className="text-gray-600 mt-2">You have to collect the order from Kipps Market Ludhiana</p>
//             <div className="mt-4 flex justify-end space-x-2">
//               <Button variant="outline" onClick={() => setIsPickupConfirmModalOpen(false)}>Cancel</Button>
//               <Button className="bg-green-600 text-white" onClick={() => {
//                 setIsPickup(true);
//                 setIsPickupConfirmModalOpen(false);
//               }}>Confirm Pickup</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/Card";
import { motion } from "framer-motion";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectItem } from "../ui/select";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import DeliverySlotModal from "./DeliverySlotModal";
import GiftModal from "./GiftModal";
import { Gift, PackageCheck, X } from "lucide-react";

export default function CheckoutPage() {
  const [deliverySlot, setDeliverySlot] = useState(null);
  const [giftOption, setGiftOption] = useState(false);
  const [address, setAddress] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [isPickup, setIsPickup] = useState(false);
  const [isPickupConfirmModalOpen, setIsPickupConfirmModalOpen] = useState(false);
  const [isDeliveryConfirmModalOpen, setIsDeliveryConfirmModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={setMenuOpen} />

      <div className="min-h-screen bg-[#f4f4f4] p-6 flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
          {/* Theobroma Store Details */}
          <div className="flex items-center space-x-2 border-b pb-4">
            <h2 className="text-lg font-semibold">celeberationbakers</h2>
            <span className="text-gray-500 text-sm">Sadar Bazar, Ambala Cantt</span>
          </div>

          {/* Delivery & Pickup Toggle */}
<div className="mt-4 flex bg-gray-100 rounded-lg">
  <button
    className={`flex-1 rounded-lg text-sm font-medium transition-all ${
      !isPickup ? "bg-black text-white shadow-md" : "text-gray-600"
    }`}
    onClick={() => setIsDeliveryConfirmModalOpen(true)}
  >
    Delivery <span className="text-xs">(60 Mins)</span>
  </button>
  <button
    className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
      isPickup ? "bg-black text-white shadow-md" : "text-gray-600"
    }`}
    onClick={() => setIsPickupConfirmModalOpen(true)}
  >
    Pickup
  </button>
</div>


          {/* Delivery or Pickup Details */}
          {!isPickup ? (
            <div className="mt-4 border p-4 rounded-md">
              <h3 className="font-medium text-md">Delivery Address</h3>
              <Card className="mt-2 bg-gray-50">
                <CardContent className="p-4 flex justify-between items-center">
                  {address ? (
                    <span>{address}</span>
                  ) : (
                    <Button variant="outline" onClick={() => setAddress("Home, Example Street")}>
                      + Add New Address
                    </Button>
                  )}
                </CardContent>
              </Card>
              <div className="mt-4">
              <h3 className="font-medium text-md">Delivery Slot</h3>
              <div 
                className="mt-2 w-full border p-2 rounded cursor-pointer text-gray-600"
                onClick={() => setIsDeliveryModalOpen(true)}
              >
                {deliverySlot ? deliverySlot : "Select a Delivery Slot"}
              </div>
            </div>
            </div>
          ) : (
            <div className="mt-4 border p-4 rounded-md flex justify-between items-center">
              <span className="text-gray-700">Pick up your order from:</span>
              <a 
                href="https://www.google.com/maps/dir//30.8931073,75.82148223/@30.8931073,75.82148223,17z/data=!4m2!4m1!3e0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline"
              >
                Get Directions
              </a>
            </div>
          )}

          {/* Delivery Slot */}
          {!isPickup && (
            <div className="mt-4">
              <h3 className="font-medium text-md">Delivery Slot</h3>
              <div 
                className="mt-2 w-full border p-2 rounded cursor-pointer text-gray-600"
                onClick={() => setIsDeliveryModalOpen(true)}
              >
                {deliverySlot ? deliverySlot : "Select a Delivery Slot"}
              </div>
            </div>
          )}

          {/* Gift Option */}
          {/* <div className="mt-4 flex items-center space-x-2 border p-4 rounded-md">
            <Checkbox
              checked={giftOption}
              onCheckedChange={(checked) => {
                setGiftOption(checked);
                if (checked) setIsGiftModalOpen(true);
              }}
            />
            <span className="text-red-600 font-medium">Want to send this as a gift?</span>
          </div> */}
          
    <div className="relative p-4 mt-4 rounded-lg bg-gray-100 shadow-md">
      <div className="flex justify-between items-center p-4 bg-white rounded-md">
        <div className="flex items-center space-x-2">
          <div className="relative w-6 h-6">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: isOpen ? -5 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 right-0"
            >
              <Gift className="text-red-500" size={24} />
            </motion.div>
          </div>
          <span className="text-gray-700 font-medium">Want to send this as a gift?</span>
        </div>
        <Button variant="link" className="text-gray-700" onClick={() => setIsGiftModalOpen(true)}>
          Add Details
        </Button>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-6 bg-red-300 flex items-center justify-center">
        <div className="w-full h-1 bg-red-500"></div>
        <div className="absolute -bottom-2 right-29">
          <span className="text-3xl">🎀</span>
        </div>
      </div>
    </div>
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
            <h3 className="font-medium text-md">Bill Details</h3>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹120.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Charges</span>
                <span>₹21.19</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Packaging Charges</span>
                <span>₹16.95</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>GST</span>
                <span>₹28.46</span>
              </div>
              <div className="flex justify-between font-semibold text-md">
                <span>Grand Total</span>
                <span>₹186.60</span>
              </div>
            </div>
          </div>
                    <Button
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
            onClick={() => setIsDeliveryModalOpen(true)}
          >
            Select Delivery Slot
          </Button>
        </div>
      </div>

      <Footer />

      {/* Delivery Slot Modal */}
      {isDeliveryModalOpen && (
        <DeliverySlotModal
          onClose={() => setIsDeliveryModalOpen(false)}
          onSelectSlot={(slot) => {
            setDeliverySlot(slot);
            setIsDeliveryModalOpen(false);
          }}
        />
      )}
      
      {/* Gift Modal */}
      {isGiftModalOpen && (
        <GiftModal isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} />
      )}

      {/* Pickup Confirmation Modal */}
      {isPickupConfirmModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg shadow-md w-123 text-center relative transform -translate-y-30">
    {/* Close Button */}
    <button 
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" 
      onClick={() => setIsPickupConfirmModalOpen(false)}
    >
      <X className="w-6 h-6" />
    </button>

    {/* Title */}
    <h2 className="text-lg font-semibold">Pickup Order</h2>
    <hr className="my-2 border-gray-300" />

    {/* Icon */}
    <div className="flex justify-center my-4">
      <PackageCheck className="w-16 h-16 text-gray-500" />
    </div>

    {/* Message */}
    <p className="text-gray-600">You have to collect the order from Kipps Market Ludhiana</p>

    {/* Buttons */}
    <div className="mt-4 flex justify-center space-x-4">
      <Button variant="outline" onClick={() => setIsPickupConfirmModalOpen(false)} className="px-4 py-2 border border-gray-400 rounded-lg text-gray-700">Cancel</Button>
      <Button className="px-4 py-2 bg-green-300 text-gray-800 rounded-lg" onClick={() => {
        setIsPickup(true);
        setIsPickupConfirmModalOpen(false);
      }}>Confirm Pickup</Button>
    </div>
  </div>
</div>

      )}

      {/* Delivery Confirmation Modal */}
      {isDeliveryConfirmModalOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-md w-123 text-center -translate-y-30">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Pickup Order</h2>
        <button onClick={() => setIsPickupConfirmModalOpen(false)}>
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="flex justify-center my-4">
        <PackageCheck className="w-16 h-16 text-gray-500 bg-gray-100 rounded-lg" />
      </div>
      <p className="text-gray-600">
        You have to collect the order from Kipps Market Ludhiana
      </p>
      <div className="mt-4 flex justify-center space-x-2">
      <Button variant="outline" onClick={() => setIsDeliveryConfirmModalOpen(false)} className="px-4 py-2 border border-gray-400 rounded-lg text-gray-700">Cancel</Button>
              <Button className="px-4 py-2 bg-green-300 text-gray-800 rounded-lg" onClick={() => {
                setIsPickup(false);
                setIsDeliveryConfirmModalOpen(false);
              }}>Confirm Delivery</Button>
      </div>
    </div>
  </div>
      )}
    </>
  );
}
