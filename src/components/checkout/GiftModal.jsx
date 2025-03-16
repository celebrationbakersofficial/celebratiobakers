// // import React, { useState } from "react";
// // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
// // import { Button } from "../ui/button";
// // import { Home } from "lucide-react";

// // export default function GiftModal({ isOpen, onClose }) {
// //   const [recipientMobile, setRecipientMobile] = useState("");
// //   const [recipientName, setRecipientName] = useState("");
// //   const [senderName, setSenderName] = useState("");
// //   const [message, setMessage] = useState("");

// //   return (
// //     <Dialog open={isOpen} onOpenChange={onClose}>
// //       <DialogContent className="p-6 rounded-lg max-w-lg bg-white shadow-lg">
// //         <DialogHeader>
// //           <DialogTitle className="text-xl font-semibold">Want to send this as a gift?</DialogTitle>
// //         </DialogHeader>

// //         {/* Delivery Address Section */}
// //         <div className="bg-gray-100 p-3 rounded-md flex items-start justify-between mt-3">
// //           <div className="flex items-start space-x-3">
// //             <Home className="w-5 h-5 text-gray-600 mt-1" />
// //             <div>
// //               <p className="text-sm font-semibold">Delivery Address:</p>
// //               <p className="text-sm text-gray-600">
// //                 asdas, asdasd, Sant Pura, Industrial Area-A, Ludhiana
// //               </p>
// //             </div>
// //           </div>
// //           <button className="text-blue-600 text-sm font-medium hover:underline">Change</button>
// //         </div>

// //         {/* Form Fields */}
// //         <div className="mt-4">
// //           <p className="text-sm font-semibold mb-2">Fill Details</p>

// //           <div className="space-y-3">
// //             <div>
// //               <label className="text-xs text-gray-600">Recipient's Mobile No.</label>
// //               <input
// //                 type="text"
// //                 placeholder="Mobile No."
// //                 value={recipientMobile}
// //                 onChange={(e) => setRecipientMobile(e.target.value)}
// //                 className="w-full p-2 border rounded-md focus:border-black text-sm"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-xs text-gray-600">To (Recipient's Name)</label>
// //               <input
// //                 type="text"
// //                 placeholder="Recipient's Name"
// //                 value={recipientName}
// //                 onChange={(e) => setRecipientName(e.target.value)}
// //                 className="w-full p-2 border rounded-md focus:border-black text-sm"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-xs text-gray-600">From (Sender's Name)</label>
// //               <input
// //                 type="text"
// //                 placeholder="Sender's Name"
// //                 value={senderName}
// //                 onChange={(e) => setSenderName(e.target.value)}
// //                 className="w-full p-2 border rounded-md focus:border-black text-sm"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-xs text-gray-600">Message (Optional)</label>
// //               <textarea
// //                 placeholder="Add Message"
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //                 className="w-full p-2 border rounded-md focus:border-black text-sm h-16"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Buttons */}
// //         <div className="mt-4 flex flex-col">
// //           <Button className="w-full bg-green-200 text-green-800 font-semibold py-2 rounded-md hover:bg-green-300">
// //             Save Details
// //           </Button>
// //           <button className="mt-2 text-red-600 font-medium hover:underline text-sm">Remove</button>
// //         </div>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
// import { Button } from "../ui/button";
// import { Home, X } from "lucide-react";

// export default function GiftModal({ isOpen, onClose }) {
//   const [recipientMobile, setRecipientMobile] = useState("");
//   const [recipientName, setRecipientName] = useState("");
//   const [senderName, setSenderName] = useState("");
//   const [message, setMessage] = useState("");

//   // Disable background scrolling when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"; // Prevent scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Restore scrolling
//     }
    
//     return () => {
//       document.body.style.overflow = "auto"; // Cleanup on unmount
//     };
//   }, [isOpen]);

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="p-6 rounded-lg max-w-lg bg-white shadow-lg">
//         <DialogHeader>
//           <div className="flex justify-between items-center mb-4">
//           <DialogTitle className="text-lg font-semibold">Want to send this as a gift?</DialogTitle>
//                   <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-black focus:outline-none"
//             aria-label="Close"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>
//         </DialogHeader>

//         {/* Delivery Address Section */}
//         <div className="bg-gray-100 p-3 rounded-md flex items-start justify-between mt-3">
//           <div className="flex items-start space-x-3">
//             <Home className="w-5 h-5 text-gray-600 mt-1" />
//             <div>
//               <p className="text-sm font-semibold">Delivery Address:</p>
//               <p className="text-sm text-gray-600">
//                 asdas, asdasd, Sant Pura, Industrial Area-A, Ludhiana
//               </p>
//             </div>
//           </div>
//           <button className="text-blue-600 text-sm font-medium hover:underline">Change</button>
//         </div>

//         {/* Form Fields */}
//         <div className="mt-4">
//           <p className="text-sm font-semibold mb-2">Fill Details</p>

//           <div className="space-y-3">
//             <div>
//               <label className="text-xs text-gray-600">Recipient's Mobile No.</label>
//               <input
//                 type="text"
//                 placeholder="Mobile No."
//                 value={recipientMobile}
//                 onChange={(e) => setRecipientMobile(e.target.value)}
//                 className="w-full p-2 border rounded-md focus:border-black text-sm"
//               />
//             </div>

//             <div>
//               <label className="text-xs text-gray-600">To (Recipient's Name)</label>
//               <input
//                 type="text"
//                 placeholder="Recipient's Name"
//                 value={recipientName}
//                 onChange={(e) => setRecipientName(e.target.value)}
//                 className="w-full p-2 border rounded-md focus:border-black text-sm"
//               />
//             </div>

//             <div>
//               <label className="text-xs text-gray-600">From (Sender's Name)</label>
//               <input
//                 type="text"
//                 placeholder="Sender's Name"
//                 value={senderName}
//                 onChange={(e) => setSenderName(e.target.value)}
//                 className="w-full p-2 border rounded-md focus:border-black text-sm"
//               />
//             </div>

//             <div>
//               <label className="text-xs text-gray-600">Message (Optional)</label>
//               <textarea
//                 placeholder="Add Message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full p-2 border rounded-md focus:border-black text-sm h-16"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-4 flex flex-col">
//           <Button className="w-full bg-green-200 text-green-800 font-semibold py-2 rounded-md hover:bg-green-300">
//             Save Details
//           </Button>
//           <button className="mt-2 text-red-600 font-medium hover:underline text-sm" onClick={onClose}>
//             Remove
//           </button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/Button";
import { Home, X } from "lucide-react";

export default function GiftModal({ isOpen, onClose, onSave }) {
  const [recipientMobile, setRecipientMobile] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  // Handle saving gift details
  const handleSave = () => {
    const details = {
      recipientName,
      senderName,
      recipientMobile,
      message,
    };
    onSave(details);  // Pass the details back to the parent
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-6 rounded-lg max-w-lg bg-white shadow-lg">
        <DialogHeader>
          <div className="flex justify-between items-center mb-4">
            <DialogTitle className="text-lg font-semibold">Want to send this as a gift?</DialogTitle>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black focus:outline-none"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </DialogHeader>

        {/* Delivery Address Section */}
        <div className="bg-gray-100 p-3 rounded-md flex items-start justify-between mt-3">
          <div className="flex items-start space-x-3">
            <Home className="w-5 h-5 text-gray-600 mt-1" />
            <div>
              <p className="text-sm font-semibold">Delivery Address:</p>
              <p className="text-sm text-gray-600">
                asdas, asdasd, Sant Pura, Industrial Area-A, Ludhiana
              </p>
            </div>
          </div>
          <button className="text-blue-600 text-sm font-medium hover:underline">Change</button>
        </div>

        {/* Form Fields */}
        <div className="mt-4">
          <p className="text-sm font-semibold mb-2">Fill Details</p>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-600">Recipient's Mobile No.</label>
              <input
                type="text"
                placeholder="Mobile No."
                value={recipientMobile}
                onChange={(e) => setRecipientMobile(e.target.value)}
                className="w-full p-2 border rounded-md focus:border-black text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-600">To (Recipient's Name)</label>
              <input
                type="text"
                placeholder="Recipient's Name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full p-2 border rounded-md focus:border-black text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-600">From (Sender's Name)</label>
              <input
                type="text"
                placeholder="Sender's Name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full p-2 border rounded-md focus:border-black text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-600">Message (Optional)</label>
              <textarea
                placeholder="Add Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border rounded-md focus:border-black text-sm h-16"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col">
          <Button
            className="w-full bg-green-200 text-green-800 font-semibold py-2 rounded-md hover:bg-green-300"
            onClick={handleSave}  // Save the gift details
          >
            Save Details
          </Button>
          <button className="mt-2 text-red-600 font-medium hover:underline text-sm" onClick={onClose}>
            Remove
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
