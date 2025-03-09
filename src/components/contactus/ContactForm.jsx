// // import React, { useEffect, useState } from "react";
// // import Header from "../Header/Header";
// // import Footer from "../Footer";
// // import Navbar from "../Navbar/Navbar";
// // import OrderSection from "../ordersection/OrderSection";
// // import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";

// // const ContactForm = () => {
// //           const [isSticky, setIsSticky] = useState(false);
// //           const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open
        
// //           // Handle scroll event to toggle sticky class
// //           const handleScroll = () => {
// //             if (window.scrollY > 50) {
// //               setIsSticky(true);
// //             } else {
// //               setIsSticky(false);
// //             }
// //           };
        
// //           useEffect(() => {
// //             window.addEventListener("scroll", handleScroll);
// //             return () => {
// //               window.removeEventListener("scroll", handleScroll);
// //             };
// //           }, []);
        
// //           const toggleMenu = () => {
// //             setMenuOpen(!menuOpen); // Toggle menu state when the hamburger icon is clicked
// //           };
// //   return (
// //   <>
// //             {/* <div className="promo-banner">
// //         <p>
// //           <strong>Flat 10% OFF on the first order. </strong> <strong>Use Code:</strong>
// //           <strong>SIGNUP10</strong>
// //         </p>
// //       </div> */}
// //       <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
// //     <div className="bg-green-50 min-h-screen flex justify-center items-center p-10">
// //       <div className="bg-green-100 p-10 rounded-xl shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
// //         <div>
// //           <h2 className="text-2xl font-semibold text-yellow-900 text-center">Contact Us</h2>
// //           <p className="text-center text-gray-700 mt-2">We would love to hear from you. Share your thoughts and queries with us!</p>
// //           <form className="mt-6 space-y-4">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <input type="text" placeholder="Name *" className="p-2 border rounded w-full" required />
// //               <input type="text" placeholder="Contact no. *" className="p-2 border rounded w-full" required />
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <input type="email" placeholder="Email ID *" className="p-2 border rounded w-full" required />
// //               <input type="text" placeholder="City *" className="p-2 border rounded w-full" required />
// //             </div>
// //             <select className="p-2 border rounded w-full" required>
// //               <option>Choose your subject</option>
// //               <option>General Inquiry</option>
// //               <option>Support</option>
// //               <option>Feedback</option>
// //             </select>
// //             <textarea placeholder="Message *" className="p-2 border rounded w-full h-32" required></textarea>
// //             <div>
// //               <input type="file" className="w-full border p-2 rounded" />
// //               <p className="text-xs text-gray-500">We accept file sizes up to 1MB in jpeg, png, or pdf format.</p>
// //             </div>
// //             <button className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-800 transition w-full">
// //               SUBMIT
// //             </button>
// //           </form>
// //         </div>
// //         <div className="flex flex-col justify-center text-gray-700">
// //           <h3 className="font-semibold text-yellow-900">Theobroma Foods Private Limited</h3>
// //           <p className="mt-2 text-sm">Registered Address:</p>
// //           <p className="text-sm">32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East, Mumbai-400088, Maharashtra, India</p>
// //           <h3 className="mt-4 font-semibold text-yellow-900">Grievance & Nodal Officer:</h3>
// //           <p className="text-sm">Ms. Simantini Budukh, General Counsel & Company Secretary</p>
// //           <h3 className="mt-4 font-semibold text-yellow-900">Contact Details:</h3>
// //           <p className="text-sm">📞 +91 8182-881881</p>
// //           <p className="text-sm">📧 contact@theobroma.in</p>
// //         </div>
// //       </div>
// //     </div>
// //     <OrderSection />
// //     <ScrollToTopButton />
// //     <Footer />
// //     </>
// //   );
// // };

// // export default ContactForm;



// // import React, { useEffect, useState } from "react";
// // import Header from "../Header/Header";
// // import Footer from "../Footer";
// // import Navbar from "../Navbar/Navbar";
// // import OrderSection from "../ordersection/OrderSection";
// // import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";

// // const ContactForm = () => {
// //   const [isSticky, setIsSticky] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     contact: "",
// //     email: "",
// //     city: "",
// //     subject: "",
// //     message: "",
// //     file: null,
// //   });

// //   // Handle scroll event to toggle sticky class
// //   const handleScroll = () => {
// //     if (window.scrollY > 50) {
// //       setIsSticky(true);
// //     } else {
// //       setIsSticky(false);
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen); // Toggle menu state when the hamburger icon is clicked
// //   };

// //   // Handle form data change
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleFileChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       file: e.target.files[0],
// //     });
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const form = new FormData();
// //     for (let key in formData) {
// //       form.append(key, formData[key]);
// //     }

// //     try {
// //       const response = await fetch("http://localhost:3000/send-email", {
// //         method: "POST",
// //         body: form,
// //       });

// //       const result = await response.json();
// //       if (response.ok) {
// //         alert("Email sent successfully!");
// //         setFormData({
// //           name: "",
// //           contact: "",
// //           email: "",
// //           city: "",
// //           subject: "",
// //           message: "",
// //           file: null,
// //         });
// //       } else {
// //         alert("Error sending email: " + result.message);
// //       }
// //     } catch (error) {
// //       console.error("Error sending email:", error);
// //       alert("An error occurred. Please try again.");
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />
// //       <div className="bg-green-50 min-h-screen flex justify-center items-center p-10">
// //         <div className="bg-green-100 p-10 rounded-xl shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
// //           <div>
// //             <h2 className="text-2xl font-semibold text-yellow-900 text-center">Contact Us</h2>
// //             <p className="text-center text-gray-700 mt-2">We would love to hear from you. Share your thoughts and queries with us!</p>
// //             <form onSubmit={handleSubmit} className="mt-6 space-y-4">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <input
// //                   type="text"
// //                   placeholder="Name *"
// //                   className="p-2 border rounded w-full"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Contact no. *"
// //                   className="p-2 border rounded w-full"
// //                   name="contact"
// //                   value={formData.contact}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <input
// //                   type="email"
// //                   placeholder="Email ID *"
// //                   className="p-2 border rounded w-full"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="City *"
// //                   className="p-2 border rounded w-full"
// //                   name="city"
// //                   value={formData.city}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>
// //               <select
// //                 className="p-2 border rounded w-full"
// //                 name="subject"
// //                 value={formData.subject}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option>Choose your subject</option>
// //                 <option>General Inquiry</option>
// //                 <option>Support</option>
// //                 <option>Feedback</option>
// //               </select>
// //               <textarea
// //                 placeholder="Message *"
// //                 className="p-2 border rounded w-full h-32"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //               ></textarea>
// //               <div>
// //                 <input
// //                   type="file"
// //                   className="w-full border p-2 rounded"
// //                   onChange={handleFileChange}
// //                 />
// //                 <p className="text-xs text-gray-500">We accept file sizes up to 1MB in jpeg, png, or pdf format.</p>
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-800 transition w-full"
// //               >
// //                 SUBMIT
// //               </button>
// //             </form>
// //           </div>
// //           <div className="flex flex-col justify-center text-gray-700">
// //             <h3 className="font-semibold text-yellow-900">Theobroma Foods Private Limited</h3>
// //             <p className="mt-2 text-sm">Registered Address:</p>
// //             <p className="text-sm">
// //               32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East, Mumbai-400088, Maharashtra, India
// //             </p>
// //             <h3 className="mt-4 font-semibold text-yellow-900">Grievance & Nodal Officer:</h3>
// //             <p className="text-sm">Ms. Simantini Budukh, General Counsel & Company Secretary</p>
// //             <h3 className="mt-4 font-semibold text-yellow-900">Contact Details:</h3>
// //             <p className="text-sm">📞 +91 8182-881881</p>
// //             <p className="text-sm">📧 contact@theobroma.in</p>
// //           </div>
// //         </div>
// //       </div>
// //       <OrderSection />
// //       <ScrollToTopButton />
// //       <Footer />
// //     </>
// //   );
// // };

// // export default ContactForm;

// // import React, { useEffect, useState } from "react";
// // import ReactLoading from "react-loading"; // Import the spinner
// // import Header from "../Header/Header";
// // import Footer from "../Footer";
// // import Navbar from "../Navbar/Navbar";
// // import OrderSection from "../ordersection/OrderSection";
// // import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";

// // const ContactForm = () => {
// //   const [isSticky, setIsSticky] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     contact: "",
// //     email: "",
// //     city: "",
// //     subject: "",
// //     message: "",
// //     file: null,
// //   });
// //   const [isLoading, setIsLoading] = useState(false); // Track loading state
// //   const [showModal, setShowModal] = useState(false); // Track modal visibility
// //   const [modalMessage, setModalMessage] = useState(""); // Modal message (success or error)

// //   // Handle scroll event to toggle sticky class
// //   const handleScroll = () => {
// //     if (window.scrollY > 50) {
// //       setIsSticky(true);
// //     } else {
// //       setIsSticky(false);
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen); // Toggle menu state when the hamburger icon is clicked
// //   };

// //   // Handle form data change
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleFileChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       file: e.target.files[0],
// //     });
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true); // Start loading spinner

// //     const form = new FormData();
// //     for (let key in formData) {
// //       form.append(key, formData[key]);
// //     }

// //     try {
// //       const response = await fetch('https://celebrationbakers.onrender.com/send-email', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData),
// //         mode: 'cors' // Ensures CORS is enabled
// //       });
      

// //       const result = await response.json();
// //       if (response.ok) {
// //         setModalMessage("Email sent successfully!");
// //         setShowModal(true); // Show success modal
// //         setFormData({
// //           name: "",
// //           contact: "",
// //           email: "",
// //           city: "",
// //           subject: "",
// //           message: "",
// //           file: null,
// //         });
// //       } else {
// //         setModalMessage("Error sending email: " + result.message);
// //         setShowModal(true); // Show error modal
// //       }
// //     } catch (error) {
// //       console.error("Error sending email:", error);
// //       setModalMessage("An error occurred. Please try again.");
// //       setShowModal(true); // Show error modal
// //     } finally {
// //       setIsLoading(false); // Stop loading spinner
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />

// //       {/* Form section */}
// //       <div className="bg-green-50 min-h-screen flex justify-center items-center p-10">
// //         <div className="bg-green-100 p-10 rounded-xl shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
// //           <div>
// //             <h2 className="text-2xl font-semibold text-yellow-900 text-center">Contact Us</h2>
// //             <p className="text-center text-gray-700 mt-2">We would love to hear from you. Share your thoughts and queries with us!</p>
// //             <form onSubmit={handleSubmit} className="mt-6 space-y-4">
// //               {/* Form Fields */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <input
// //                   type="text"
// //                   placeholder="Name *"
// //                   className="p-2 border rounded w-full"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Contact no. *"
// //                   className="p-2 border rounded w-full"
// //                   name="contact"
// //                   value={formData.contact}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <input
// //                   type="email"
// //                   placeholder="Email ID *"
// //                   className="p-2 border rounded w-full"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="City *"
// //                   className="p-2 border rounded w-full"
// //                   name="city"
// //                   value={formData.city}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </div>
// //               <select
// //                 className="p-2 border rounded w-full"
// //                 name="subject"
// //                 value={formData.subject}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option>Choose your subject</option>
// //                 <option>General Inquiry</option>
// //                 <option>Support</option>
// //                 <option>Feedback</option>
// //               </select>
// //               <textarea
// //                 placeholder="Message *"
// //                 className="p-2 border rounded w-full h-32"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //               ></textarea>
// //               <div>
// //                 <input
// //                   type="file"
// //                   className="w-full border p-2 rounded"
// //                   onChange={handleFileChange}
// //                 />
// //                 <p className="text-xs text-gray-500">We accept file sizes up to 1MB in jpeg, png, or pdf format.</p>
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-800 transition w-full"
// //               >
// //                 SUBMIT
// //               </button>
// //             </form>
// //           </div>
// //           <div className="flex flex-col justify-center text-gray-700">
// //             <h3 className="font-semibold text-yellow-900">Theobroma Foods Private Limited</h3>
// //             <p className="mt-2 text-sm">Registered Address:</p>
// //             <p className="text-sm">
// //               32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East, Mumbai-400088, Maharashtra, India
// //             </p>
// //             <h3 className="mt-4 font-semibold text-yellow-900">Grievance & Nodal Officer:</h3>
// //             <p className="text-sm">Ms. Simantini Budukh, General Counsel & Company Secretary</p>
// //             <h3 className="mt-4 font-semibold text-yellow-900">Contact Details:</h3>
// //             <p className="text-sm">📞 +91 8182-881881</p>
// //             <p className="text-sm">📧 contact@theobroma.in</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Preloader */}
// //       {isLoading && (
// //         <div className="preloader-overlay">
// //           <ReactLoading type="spin" color="yellow" height={50} width={50} />
// //         </div>
// //       )}

// //       {/* Modal for Success/Error */}
// //       {showModal && (
// //         <div className="modal-overlay">
// //           <div className="modal-content">
// //             <p>{modalMessage}</p>
// //             <button
// //               onClick={() => setShowModal(false)}
// //               className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-800 transition mt-4"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Custom Styles */}
// //       <style jsx>{`
// //         .preloader-overlay {
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           background: rgba(0, 0, 0, 0.4);
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //         }
// //         .modal-overlay {
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           background: rgba(0, 0, 0, 0.5);
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //         }
// //         .modal-content {
// //           background-color: white;
// //           padding: 20px;
// //           border-radius: 8px;
// //           text-align: center;
// //         }
// //       `}</style>

// //       <OrderSection />
// //       <ScrollToTopButton />
// //       <Footer />
// //     </>
// //   );
// // };

// // export default ContactForm;


// import React, { useEffect, useState } from "react";
// import ReactLoading from "react-loading"; // Import the spinner
// import Header from "../Header/Header";
// import Footer from "../Footer";
// import Navbar from "../Navbar/Navbar";
// import OrderSection from "../ordersection/OrderSection";
// import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";
// import Modal from "../../modals/Modal";

// const ContactForm = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     city: "",
//     subject: "",
//     message: "",
//     file: null,
//   });
//   const [isLoading, setIsLoading] = useState(false); // Track loading state
//   const [modalVisible, setModalVisible] = useState(false); // Track modal visibility
//   const [modalMessage, setModalMessage] = useState(""); // Modal message (success or error)

//   // Handle scroll event to toggle sticky class
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle menu state when the hamburger icon is clicked
//   };

//   // Handle form data change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       file: e.target.files[0],
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true); // Start loading spinner

//     const form = new FormData();
//     for (let key in formData) {
//       form.append(key, formData[key]);
//     }

//     try {
//       const response = await fetch('https://celebrationbakers.onrender.com/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//         mode: 'cors' // Ensures CORS is enabled
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setModalMessage("Email sent successfully!");
//       } else {
//         setModalMessage("Error sending email: " + result.message);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setModalMessage("An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false); // Stop loading spinner
//       setModalVisible(true); // Show modal with the message
//       setFormData({
//         name: "",
//         contact: "",
//         email: "",
//         city: "",
//         subject: "",
//         message: "",
//         file: null,
//       });
//     }
//   };

//   return (
//     <>
//       <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />

//       {/* Form section */}
//       <div className="bg-green-50 min-h-screen flex justify-center items-center p-10">
//         <div className="bg-green-100 p-10 rounded-xl shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div>
//             <h2 className="text-2xl font-semibold text-yellow-900 text-center">Contact Us</h2>
//             <p className="text-center text-gray-700 mt-2">We would love to hear from you. Share your thoughts and queries with us!</p>
//             <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//               {/* Form Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Name *"
//                   className="p-2 border rounded w-full"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Contact no. *"
//                   className="p-2 border rounded w-full"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="email"
//                   placeholder="Email ID *"
//                   className="p-2 border rounded w-full"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="City *"
//                   className="p-2 border rounded w-full"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <select
//                 className="p-2 border rounded w-full"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               >
//                 <option>Choose your subject</option>
//                 <option>General Inquiry</option>
//                 <option>Support</option>
//                 <option>Feedback</option>
//               </select>
//               <textarea
//                 placeholder="Message *"
//                 className="p-2 border rounded w-full h-32"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//               <div>
//                 <input
//                   type="file"
//                   className="w-full border p-2 rounded"
//                   onChange={handleFileChange}
//                 />
//                 <p className="text-xs text-gray-500">We accept file sizes up to 1MB in jpeg, png, or pdf format.</p>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-800 transition w-full"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//           <div className="flex flex-col justify-center text-gray-700">
//             <h3 className="font-semibold text-yellow-900">Theobroma Foods Private Limited</h3>
//             <p className="mt-2 text-sm">Registered Address:</p>
//             <p className="text-sm">
//               32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East, Mumbai-400088, Maharashtra, India
//             </p>
//             <h3 className="mt-4 font-semibold text-yellow-900">Grievance & Nodal Officer:</h3>
//             <p className="text-sm">Ms. Simantini Budukh, General Counsel & Company Secretary</p>
//             <h3 className="mt-4 font-semibold text-yellow-900">Contact Details:</h3>
//             <p className="text-sm">📞 +91 8182-881881</p>
//             <p className="text-sm">📧 contact@theobroma.in</p>
//           </div>
//         </div>
//       </div>

//       {/* Preloader */}

//       {/* Modal for Success/Error */}
//       {modalVisible && (
//         <Modal
//           message={modalMessage}
//           onClose={() => setModalVisible(false)} // Close modal when clicked
//         />
//       )}

//       {/* Custom Styles */}
//       <style jsx>{`
//         .preloader-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.4);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .modal-content {
//           background-color: white;
//           padding: 20px;
//           border-radius: 8px;
//           text-align: center;
//         }
//       `}</style>

//       <OrderSection />
//       <ScrollToTopButton />
//       <Footer />
//     </>
//   );
// };

// export default ContactForm;




import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading"; // Import the spinner
import Header from "../Header/Header";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import OrderSection from "../ordersection/OrderSection";
import ScrollToTopButton from "../scrolltotop/ScrollToTopButton";

const ContactForm = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    city: "",
    subject: "",
    message: "",
    file: null,
  });
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [modalVisible, setModalVisible] = useState(false); // Track modal visibility
  const [modalMessage, setModalMessage] = useState(""); // Modal message (success or error)

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state when the hamburger icon is clicked
  };

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading spinner

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch('https://celebrationbakers.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors' // Ensures CORS is enabled
      });

      const result = await response.json();
      if (response.ok) {
        setModalMessage("Email sent successfully!");
      } else {
        setModalMessage("Error sending email: " + result.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setModalMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading spinner
      setModalVisible(true); // Show modal with the message
      setFormData({
        name: "",
        contact: "",
        email: "",
        city: "",
        subject: "",
        message: "",
        file: null,
      });
    }
  };

  return (
    <>
      <Navbar isSticky={isSticky} menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Form section */}
      <div className="bg-green-50 min-h-screen flex justify-center items-center p-10">
        <div className="bg-green-100 p-10 rounded-xl shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-yellow-900 text-center">Contact Us</h2>
            <p className="text-center text-gray-700 mt-2">We would love to hear from you. Share your thoughts and queries with us!</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="p-2 border rounded w-full"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Contact no. *"
                  className="p-2 border rounded w-full"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email ID *"
                  className="p-2 border rounded w-full"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="City *"
                  className="p-2 border rounded w-full"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                className="p-2 border rounded w-full"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option>Choose your subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
              <textarea
                placeholder="Message *"
                className="p-2 border rounded w-full h-32"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div>
                <input
                  type="file"
                  className="w-full border p-2 rounded"
                  onChange={handleFileChange}
                />
                <p className="text-xs text-gray-500">We accept file sizes up to 1MB in jpeg, png, or pdf format.</p>
              </div>
              <button
                type="submit"
                className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-800 transition w-full cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center text-gray-700">
            <h3 className="font-semibold text-yellow-900">Theobroma Foods Private Limited</h3>
            <p className="mt-2 text-sm">Registered Address:</p>
            <p className="text-sm">
              32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East, Mumbai-400088, Maharashtra, India
            </p>
            <h3 className="mt-4 font-semibold text-yellow-900">Grievance & Nodal Officer:</h3>
            <p className="text-sm">Ms. Simantini Budukh, General Counsel & Company Secretary</p>
            <h3 className="mt-4 font-semibold text-yellow-900">Contact Details:</h3>
            <p className="text-sm">📞 +91 8182-881881</p>
            <p className="text-sm">📧 contact@theobroma.in</p>
          </div>
        </div>
      </div>

      {/* Modal for Success/Error */}
{/* Modal for Success/Error */}

{/* Modal for Success/Error */}
{modalVisible && (
  <div className="fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 md:w-[500px] lg:w-[600px] max-w-full">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        {modalMessage.includes("successfully") ? "Success!" : "Error"}
      </h3>
      <p className="text-gray-700 mb-6 text-lg">{modalMessage}</p>
      <div className="flex justify-center">
        <button
          onClick={() => setModalVisible(false)}
          className="bg-yellow-700 text-white py-3 px-8 rounded-md hover:bg-yellow-800 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

      <OrderSection />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default ContactForm;
