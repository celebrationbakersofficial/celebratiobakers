// Button.jsx
const Button = ({ children, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 bg-brown text-white rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
