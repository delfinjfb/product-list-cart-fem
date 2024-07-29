// src/components/DessertItem.jsx
import React from "react";
import AddToCartButton from "./AddToCartButton.jsx";

const DessertItem = ({dessert, onAddToCart}) => {
	return (
		<div className="bg-white  rounded-lg shadow flex flex-col items-center">
			<img
				src={dessert.image}
				alt={dessert.name}
				className="rounded-md w-full object-cover h-60"
			/>
			<AddToCartButton onAddToCart={() => onAddToCart(dessert)} />
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
