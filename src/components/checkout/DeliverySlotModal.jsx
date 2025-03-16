// // // import React, { useState } from "react";
// // // import { Button } from "../ui/button";
// // // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
// // // import { CalendarClock, Bike, X } from "lucide-react";

// // // export default function DeliverySlotModal({ isOpen, onClose }) {
// // //   const [selectedOption, setSelectedOption] = useState("later");
// // //   const [selectedDate, setSelectedDate] = useState("Mar 16");
// // //   const [selectedSlot, setSelectedSlot] = useState(null);

// // //   const dates = [
// // //     { day: "Sun", date: "Mar 16" },
// // //     { day: "Mon", date: "Mar 17" },
// // //     { day: "Tue", date: "Mar 18" },
// // //   ];

// // //   const slots = {
// // //     Morning: ["11:00 AM - 12:00 PM"],
// // //     Afternoon: ["12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
// // //     Evening: ["4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM"],
// // //   };

// // //   return (
// // //     <Dialog open={isOpen} onOpenChange={onClose}>
// // //       <DialogContent 
// // //         className={`p-6 rounded-lg max-w-md bg-white transition-all duration-300 ${selectedOption === "now" ? "h-48" : "h-auto"}`}
// // //         style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(245, 244, 244, 0.5)" }}
// // //       >
// // //         <DialogHeader className="relative">
// // //           <DialogTitle className="text-lg font-semibold">Choose Delivery Timings</DialogTitle>
// // //           {/* Close Icon */}
// // //           <button 
// // //             onClick={onClose} 
// // //             className="absolute top-0 right-0 p-2 text-gray-500 hover:text-black"
// // //             aria-label="Close"
// // //           >
// // //             <X className="w-6 h-6" />
// // //           </button>
// // //         </DialogHeader>

// // //         {/* Delivery Options */}
// // //         <div className="mt-2 border-b pb-4">
// // //           <div className="flex items-center space-x-2">
// // //             <input
// // //               type="radio"
// // //               name="delivery"
// // //               id="now"
// // //               className="hidden"
// // //               checked={selectedOption === "now"}
// // //               onChange={() => setSelectedOption("now")}
// // //             />
// // //             <label
// // //               htmlFor="now"
// // //               className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-md w-full ${
// // //                 selectedOption === "now" ? "border-black" : "border-gray-300"
// // //               }`}
// // //             >
// // //               <Bike className="w-6 h-auto" />
// // //               <span className="font-medium">Deliver Now <span className="text-gray-500">(within 60 mins)</span></span>
// // //             </label>
// // //           </div>
// // //           <p className="text-xs text-gray-500 pl-6">Subject to Delivery Partner Availability</p>
// // //         </div>

// // //         {/* Scheduled Delivery */}
// // //         <div className="mt-4">
// // //           <div className="flex items-center space-x-2">
// // //             <input
// // //               type="radio"
// // //               name="delivery"
// // //               id="later"
// // //               className="hidden"
// // //               checked={selectedOption === "later"}
// // //               onChange={() => setSelectedOption("later")}
// // //             />
// // //             <label
// // //               htmlFor="later"
// // //               className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-md w-full ${
// // //                 selectedOption === "later" ? "border-black" : "border-gray-300"
// // //               }`}
// // //             >
// // //               <CalendarClock className="w-6 h-auto" />
// // //               <span className="font-medium">Deliver Later</span>
// // //             </label>
// // //           </div>

// // //           {selectedOption === "later" && (
// // //             <div className="transition-all duration-300">
// // //               {/* Date Selection */}
// // //               <div className="flex space-x-2 mt-3">
// // //                 {dates.map(({ day, date }) => (
// // //                   <button
// // //                     key={date}
// // //                     className={`border p-2 rounded-md text-center w-20 ${
// // //                       selectedDate === date ? "border-black font-semibold" : "border-gray-300"
// // //                     }`}
// // //                     onClick={() => setSelectedDate(date)}
// // //                   >
// // //                     <span className="block font-medium">{date}</span>
// // //                     <span className="block text-gray-500 text-sm">{day}</span>
// // //                   </button>
// // //                 ))}
// // //               </div>

// // //               {/* Time Slots */}
// // //               {Object.entries(slots).map(([period, times]) => (
// // //                 <div key={period} className="mt-3">
// // //                   <h4 className="text-md font-medium">{period}</h4>
// // //                   <div className="flex flex-wrap gap-2 mt-2">
// // //                     {times.map((time) => (
// // //                       <button
// // //                         key={time}
// // //                         className={`border p-2 rounded-md text-sm ${
// // //                           selectedSlot === time ? "border-black font-semibold" : "border-gray-300"
// // //                         }`}
// // //                         onClick={() => setSelectedSlot(time)}
// // //                       >
// // //                         {time}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Update Slot Button */}
// // //         <Button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md" onClick={onClose}>
// // //           Update Slot
// // //         </Button>
// // //       </DialogContent>
// // //     </Dialog>
// // //   );
// // // }


// // import React, { useState, useEffect } from "react";
// // import { Button } from "../ui/button";
// // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
// // import { CalendarClock, Bike, X } from "lucide-react";

// // export default function DeliverySlotModal({ isOpen, onClose }) {
// //   const [selectedOption, setSelectedOption] = useState("later");
// //   const [selectedDate, setSelectedDate] = useState("Mar 16");
// //   const [selectedSlot, setSelectedSlot] = useState(null);

// //   const dates = [
// //     { day: "Sun", date: "Mar 16" },
// //     { day: "Mon", date: "Mar 17" },
// //     { day: "Tue", date: "Mar 18" },
// //   ];

// //   const slots = {
// //     Morning: ["11:00 AM - 12:00 PM"],
// //     Afternoon: ["12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
// //     Evening: ["4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM"],
// //   };

// //   // Disable background scrolling when modal is open
// //   useEffect(() => {
// //     if (isOpen) {
// //       document.body.style.overflow = "hidden"; // Prevent scrolling
// //     } else {
// //       document.body.style.overflow = "auto"; // Restore scrolling
// //     }

// //     return () => {
// //       document.body.style.overflow = "auto"; // Cleanup on unmount
// //     };
// //   }, [isOpen]);

// //   return (
// //     <Dialog open={isOpen} onOpenChange={onClose}>
// //       <DialogContent
// //         className={`p-6 rounded-lg max-w-md bg-white transition-all duration-300 ${selectedOption === "now" ? "h-48" : "h-auto"}`}
// //         style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(245, 244, 244, 0.5)" }}
// //       >
// //         <DialogHeader className="relative">
// //           <DialogTitle className="text-lg font-semibold">Choose Delivery Timings</DialogTitle>
// //           {/* Close Icon */}
// //           <button
// //             onClick={onClose}
// //             className="absolute top-0 right-0 p-2 text-gray-500 hover:text-black"
// //             aria-label="Close"
// //           >
// //             <X className="w-6 h-6" />
// //           </button>
// //         </DialogHeader>

// //         {/* Delivery Options */}
// //         <div className="mt-2 border-b pb-4">
// //           <div className="flex items-center space-x-2">
// //             <input
// //               type="radio"
// //               name="delivery"
// //               id="now"
// //               className="hidden"
// //               checked={selectedOption === "now"}
// //               onChange={() => setSelectedOption("now")}
// //             />
// //             <label
// //               htmlFor="now"
// //               className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-md w-full ${
// //                 selectedOption === "now" ? "border-black" : "border-gray-300"
// //               }`}
// //             >
// //               <Bike className="w-6 h-auto" />
// //               <span className="font-medium">Deliver Now <span className="text-gray-500">(within 60 mins)</span></span>
// //             </label>
// //           </div>
// //           <p className="text-xs text-gray-500 pl-6">Subject to Delivery Partner Availability</p>
// //         </div>

// //         {/* Scheduled Delivery */}
// //         <div className="mt-4">
// //           <div className="flex items-center space-x-2">
// //             <input
// //               type="radio"
// //               name="delivery"
// //               id="later"
// //               className="hidden"
// //               checked={selectedOption === "later"}
// //               onChange={() => setSelectedOption("later")}
// //             />
// //             <label
// //               htmlFor="later"
// //               className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-md w-full ${
// //                 selectedOption === "later" ? "border-black" : "border-gray-300"
// //               }`}
// //             >
// //               <CalendarClock className="w-6 h-auto" />
// //               <span className="font-medium">Deliver Later</span>
// //             </label>
// //           </div>

// //           {selectedOption === "later" && (
// //             <div className="transition-all duration-300">
// //               {/* Date Selection */}
// //               <div className="flex space-x-2 mt-3">
// //                 {dates.map(({ day, date }) => (
// //                   <button
// //                     key={date}
// //                     className={`border p-2 rounded-md text-center w-20 ${
// //                       selectedDate === date ? "border-black font-semibold" : "border-gray-300"
// //                     }`}
// //                     onClick={() => setSelectedDate(date)}
// //                   >
// //                     <span className="block font-medium">{date}</span>
// //                     <span className="block text-gray-500 text-sm">{day}</span>
// //                   </button>
// //                 ))}
// //               </div>

// //               {/* Time Slots */}
// //               {Object.entries(slots).map(([period, times]) => (
// //                 <div key={period} className="mt-3">
// //                   <h4 className="text-md font-medium">{period}</h4>
// //                   <div className="flex flex-wrap gap-2 mt-2">
// //                     {times.map((time) => (
// //                       <button
// //                         key={time}
// //                         className={`border p-2 rounded-md text-sm ${
// //                           selectedSlot === time ? "border-black font-semibold" : "border-gray-300"
// //                         }`}
// //                         onClick={() => setSelectedSlot(time)}
// //                       >
// //                         {time}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Update Slot Button */}
// //         <Button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md" onClick={onClose}>
// //           Update Slot
// //         </Button>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }



// import React, { useState, useEffect } from "react";
// import { Button } from "../ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
// import { CalendarClock, Bike, X } from "lucide-react";

// export default function DeliverySlotModal({ isOpen, onClose }) {
//   const [selectedOption, setSelectedOption] = useState("later");
//   const [selectedDate, setSelectedDate] = useState("Mar 16");
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   const dates = [
//     { day: "Sun", date: "Mar 16" },
//     { day: "Mon", date: "Mar 17" },
//     { day: "Tue", date: "Mar 18" },
//   ];

//   const slots = {
//     Morning: ["11:00 AM - 12:00 PM"],
//     Afternoon: ["12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
//     Evening: ["4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM"],
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.documentElement.style.overflow = "";
//     }

//     return () => {
//       document.documentElement.style.overflow = "";
//     };
//   }, [isOpen]);

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent
//         className="relative p-6 rounded-lg max-w-md bg-white transition-all duration-300 shadow-lg"
//         style={{
//           backdropFilter: "blur(8px)",
//           backgroundColor: "rgba(255, 255, 255, 0.95)",
//         }}
//       >
//         <DialogHeader>
//         <div className="flex justify-between items-center mb-4">
//           <DialogTitle className="text-lg font-semibold">Choose Delivery Timings</DialogTitle>
//                   <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-black focus:outline-none"
//             aria-label="Close"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>
//         </DialogHeader>



//         {/* Delivery Options */}
//         <div className="mt-2 border-b pb-4">
//           <div className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name="delivery"
//               id="now"
//               className="hidden"
//               checked={selectedOption === "now"}
//               onChange={() => setSelectedOption("now")}
//             />
//             <label
//               htmlFor="now"
//               className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-md w-full ${
//                 selectedOption === "now" ? "border-black" : "border-gray-300"
//               }`}
//             >
//               <Bike className="w-6 h-auto" />
//               <span className="font-medium">Deliver Now <span className="text-gray-500">(within 60 mins)</span></span>
//             </label>
//           </div>
//           <p className="text-xs text-gray-500 pl-6">Subject to Delivery Partner Availability</p>
//         </div>

//         {/* Scheduled Delivery */}
//         <div className="mt-4">
//           <div className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name="delivery"
//               id="later"
//               className="hidden"
//               checked={selectedOption === "later"}
//               onChange={() => setSelectedOption("later")}
//             />
//             <label
//               htmlFor="later"
//               className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-md w-full ${
//                 selectedOption === "later" ? "border-black" : "border-gray-300"
//               }`}
//             >
//               <CalendarClock className="w-6 h-auto" />
//               <span className="font-medium">Deliver Later</span>
//             </label>
//           </div>

//           {selectedOption === "later" && (
//             <div className="transition-all duration-300">
//               {/* Date Selection */}
//               <div className="flex space-x-2 mt-3">
//                 {dates.map(({ day, date }) => (
//                   <button
//                     key={date}
//                     className={`border p-2 rounded-md text-center w-20 ${
//                       selectedDate === date ? "border-black font-semibold" : "border-gray-300"
//                     }`}
//                     onClick={() => setSelectedDate(date)}
//                   >
//                     <span className="block font-medium">{date}</span>
//                     <span className="block text-gray-500 text-sm">{day}</span>
//                   </button>
//                 ))}
//               </div>

//               {/* Time Slots */}
//               {Object.entries(slots).map(([period, times]) => (
//                 <div key={period} className="mt-3">
//                   <h4 className="text-md font-medium">{period}</h4>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {times.map((time) => (
//                       <button
//                         key={time}
//                         className={`border p-2 rounded-md text-sm ${
//                           selectedSlot === time ? "border-black font-semibold" : "border-gray-300"
//                         }`}
//                         onClick={() => setSelectedSlot(time)}
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Update Slot Button */}
//         <Button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md" onClick={onClose}>
//           Update Slot
//         </Button>
//       </DialogContent>
//     </Dialog>
//   );
// }


import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { CalendarClock, Bike, X } from "lucide-react";

export default function DeliverySlotModal({ isOpen, onClose, onSelectSlot }) {
  const [selectedOption, setSelectedOption] = useState("later");
  const [selectedDate, setSelectedDate] = useState("Mar 16");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const dates = [
    { day: "Sun", date: "Mar 16" },
    { day: "Mon", date: "Mar 17" },
    { day: "Tue", date: "Mar 18" },
  ];

  const slots = {
    Morning: ["11:00 AM - 12:00 PM"],
    Afternoon: ["12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM"],
    Evening: ["4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM"],
  };

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Handle selecting a delivery slot
  const handleUpdateSlot = () => {
    if (selectedOption === "later" && selectedSlot) {
      const selectedDelivery = `${selectedDate} - ${selectedSlot}`;
      onSelectSlot(selectedDelivery);  // Pass the selected delivery slot to the parent
    } else if (selectedOption === "now") {
      onSelectSlot("Deliver Now");  // Handle the "Deliver Now" option
    }
    onClose();  // Close the modal after selecting the slot
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="relative p-6 rounded-lg max-w-md bg-white transition-all duration-300 shadow-lg"
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <DialogHeader>
          <div className="flex justify-between items-center mb-4">
            <DialogTitle className="text-lg font-semibold">Choose Delivery Timings</DialogTitle>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black focus:outline-none"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </DialogHeader>

        {/* Delivery Options */}
        <div className="mt-2 border-b pb-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="delivery"
              id="now"
              className="hidden"
              checked={selectedOption === "now"}
              onChange={() => setSelectedOption("now")}
            />
            <label
              htmlFor="now"
              className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-md w-full ${
                selectedOption === "now" ? "border-black" : "border-gray-300"
              }`}
            >
              <Bike className="w-6 h-auto" />
              <span className="font-medium">Deliver Now <span className="text-gray-500">(within 60 mins)</span></span>
            </label>
          </div>
          <p className="text-xs text-gray-500 pl-6">Subject to Delivery Partner Availability</p>
        </div>

        {/* Scheduled Delivery */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="delivery"
              id="later"
              className="hidden"
              checked={selectedOption === "later"}
              onChange={() => setSelectedOption("later")}
            />
            <label
              htmlFor="later"
              className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-md w-full ${
                selectedOption === "later" ? "border-black" : "border-gray-300"
              }`}
            >
              <CalendarClock className="w-6 h-auto" />
              <span className="font-medium">Deliver Later</span>
            </label>
          </div>

          {selectedOption === "later" && (
            <div className="transition-all duration-300">
              {/* Date Selection */}
              <div className="flex space-x-2 mt-3">
                {dates.map(({ day, date }) => (
                  <button
                    key={date}
                    className={`border p-2 rounded-md text-center w-20 ${
                      selectedDate === date ? "border-black font-semibold" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <span className="block font-medium">{date}</span>
                    <span className="block text-gray-500 text-sm">{day}</span>
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              {Object.entries(slots).map(([period, times]) => (
                <div key={period} className="mt-3">
                  <h4 className="text-md font-medium">{period}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        className={`border p-2 rounded-md text-sm ${
                          selectedSlot === time ? "border-black font-semibold" : "border-gray-300"
                        }`}
                        onClick={() => setSelectedSlot(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Update Slot Button */}
        <Button
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
          onClick={handleUpdateSlot}  // Call the updated function to set the slot
        >
          Update Slot
        </Button>
      </DialogContent>
    </Dialog>
  );
}
