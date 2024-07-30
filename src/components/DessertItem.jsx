import React from "react";
import AddToCartButton from "./AddToCartButton.jsx";

const DessertItem = ({
	dessert,
	id,
	cartItem,
	onAddToCart,
	onAddItem,
	onRemoveItem
}) => {
	return (
		<div className="rounded-lg flex flex-col items-center relative">
			<figure>
				<img
					src={dessert.image.tablet}
					alt={dessert.name}
					className="rounded-md w-full object-cover h-60"
				/>
			</figure>
			<AddToCartButton
				item={dessert}
				id={id}
				cartItem={cartItem}
				onAddToCart={() => onAddToCart(dessert)}
				onAddItem={onAddItem}
				onRemoveItem={onRemoveItem}
			/>
			<div className="mt-9 w-full">
				<h3 className="text-sm">{dessert.category}</h3>
				<h3 className="text-lg font-medium">{dessert.name}</h3>
				<p className="text-orange-500 font-bold">${dessert.price.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default DessertItem;
