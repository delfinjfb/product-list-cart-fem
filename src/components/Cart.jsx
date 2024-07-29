// src/components/Cart.jsx
import React from "react";

const Cart = ({cartItems, onRemoveFromCart, onConfirmOrder}) => {
	const getTotalPrice = () => {
		return cartItems
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	return (
		<div className="bg-white p-4 rounded-lg shadow  top-0 right-0 m-4 w-80 md:w-96 lg:static lg:w-full lg:mt-8">
			<h2 className="text-2xl font-bold mb-4">
				Your Cart ({cartItems.length})
			</h2>
			<ul>
				{cartItems.map((item, index) => (
					<li key={index} className="flex justify-between items-center mb-4">
						<div>
							<h3 className="text-lg font-medium">{item.name}</h3>
							<p className="text-gray-600">
								{item.quantity} x ${item.price.toFixed(2)}
							</p>
						</div>
						<button
							onClick={() => onRemoveFromCart(item)}
							className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
						>
							Remove
						</button>
					</li>
				))}
			</ul>
			<div className="border-t pt-4 mt-4">
				<p className="text-lg font-bold">Order Total: ${getTotalPrice()}</p>
				<button
					onClick={onConfirmOrder}
					className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 mt-4 w-full"
				>
					Confirm Order
				</button>
			</div>
		</div>
	);
};

export default Cart;
