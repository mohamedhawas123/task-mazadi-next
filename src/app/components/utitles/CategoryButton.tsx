"use client"; // Ensures it runs on the client side

import React, { useState, useEffect } from "react";

interface CategoryButtonProps {
  text: string;
  defaultSelected?: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  text,
  defaultSelected = false,
}) => {
  const [selected, setSelected] = useState(defaultSelected);

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]); // Ensure default selection on first render

  return (
    <div
      className={`flex border rounded-2xl py-1 sm:px-6  px-3 cursor-pointer transition-all ${
        selected
          ? "border-[#FF951D] bg-[#FFF5E9] text-[#FF951D]"
          : "border-[#E0E0E0] bg-white text-[#828282]"
      }`}
      onClick={() => setSelected(!selected)} // Toggle selection when clicked
    >
      {text}
    </div>
  );
};

export default CategoryButton;
