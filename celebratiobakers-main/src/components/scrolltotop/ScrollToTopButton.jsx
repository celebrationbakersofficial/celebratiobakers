import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // You can use any icon library or custom SVG
import "../../css/styles.css"
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show the button when the user scrolls down 200px from the top
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
