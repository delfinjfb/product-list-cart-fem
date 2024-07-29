// src/components/AddToCartButton.jsx
import React from "react";
import {FaShoppingCart} from "react-icons/fa";

const AddToCartButton = ({onAddToCart}) => {
	return (
		<button
			onClick={onAddToCart}
			className="flex items-center justify-center bg-white text-orange-500  px-4 py-2 rounded-full hover:bg-orange-600 border border-orange-500 -m-5"
		>
			<FaShoppingCart className="mr-2" />
			<span>Add to Cart</span>
		</button>
	);
};

export default AddToCartButton;
