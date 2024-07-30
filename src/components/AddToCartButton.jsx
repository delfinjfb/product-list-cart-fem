// src/components/AddToCartButton.jsx
import React from "react";
import {FaShoppingCart, FaPlus, FaMinus} from "react-icons/fa";

const AddToCartButton = ({
	item,
	cartItem,
	onAddToCart,
	onAddItem,
	onRemoveItem
}) => {
	return (
		<div>
			{!cartItem ? (
				<button
					onClick={onAddToCart}
					className="flex items-center justify-center bg-white text-orange-500  px-4 py-2 rounded-full hover:bg-orange-600 border border-orange-500 -m-5"
				>
					<FaShoppingCart className="mr-2" />
					<span>Add to Cart</span>
				</button>
			) : (
				<div className="flex items-center bg-orange-500 rounded-full -m-5 px-4 py-2">
					<button
						onClick={onRemoveItem}
						className="p-2 bg-orange-500 text-white rounded-full hover:bg-white hover:text-orange-500"
					>
						<FaMinus />
					</button>
					<span className="px-4 bg-orange-500 text-white">
						{cartItem.quantity}
					</span>
					<button
						onClick={onAddItem}
						className="p-2 bg-orange-500 text-white rounded-full hover:bg-white hover:text-orange-500"
					>
						<FaPlus />
					</button>
				</div>
			)}
		</div>
	);
};

export default AddToCartButton;
