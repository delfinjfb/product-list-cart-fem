// src/components/DessertItem.jsx
import React from 'react';

const DessertItem = ({ dessert, onAddToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img src={dessert.image} alt={dessert.name} className="rounded-md" />
      <h3 className="text-lg font-medium mt-2">{dessert.name}</h3>
      <p className="text-gray-600">${dessert.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(dessert)}
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default DessertItem; // Make sure to export the component
