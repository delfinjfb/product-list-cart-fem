// src/components/AddToCartButton.jsx
import React from "react";

const AddToCartButton = ({ onAddToCart }) => {
  return (
    <button
      onClick={onAddToCart}
      className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 mt-2 w-full"
    >
      Add to Cart 
    </button>
  );
};

export default AddToCartButton;
