// src/components/DessertItem.jsx
import React from "react";
import AddToCartButton from "./AddToCartButton.jsx";

const DessertItem = ({ dessert, cartItem, onAddToCart, onAddItem, onRemoveItem }) => {
  return (
    <div className="rounded-lg flex flex-col items-center relative">
      <img
        src={dessert.image}
        alt={dessert.name}
        className="rounded-md w-full object-cover h-60"
      />
      <AddToCartButton
        item={dessert}
        cartItem={cartItem}
        onAddToCart={() => onAddToCart(dessert)}
        onAddItem={() => onAddItem(dessert)}
        onRemoveItem={() => onRemoveItem(dessert)}
      />
      <div className="mt-9 w-full ">
        <h4 className="text-sm">{dessert.category}</h4>
        <h3 className="text-lg font-medium">{dessert.name}</h3>
        <p className="text-orange-500 font font-bold ">
          ${dessert.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default DessertItem;
