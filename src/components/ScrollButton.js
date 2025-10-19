import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ScrollButton = ({ side = "left", onClick, visible = true }) => {
  const Icon = side === "left" ? FaChevronLeft : FaChevronRight;
  const posClass = side === "left" ? "left-1" : "right-1";
  return (
    <button
      aria-label={side === "left" ? "Scroll left" : "Scroll right"}
      onClick={onClick}
      className={`${posClass} absolute top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-red-600/90 text-white shadow-lg hover:scale-105 transition-all hidden md:flex ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Icon />
    </button>
  );
};

export default ScrollButton;
