// src/components/DessertItem.jsx
import React from "react";
import AddToCartButton from "./AddToCartButton.jsx";

const DessertItem = ({dessert, onAddToCart}) => {
	return (
		<div className="bg-white  rounded-lg shadow flex flex-col items-center">
			<img
				src={dessert.image}
				alt={dessert.name}
				className="rounded-md w-full object-cover h-40"
			/>
			<AddToCartButton onAddToCart={() => onAddToCart(dessert)} />
			<div className="mt-4 w-full text-center">
				<h3 className="text-lg font-medium">{dessert.name}</h3>
				<p className="text-gray-600">${dessert.price.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default DessertItem;
