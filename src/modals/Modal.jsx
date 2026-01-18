import React from "react";

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-800 transition mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
