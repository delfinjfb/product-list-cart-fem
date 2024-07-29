// src/components/Cart.jsx
import React from "react";
import emptyCartImage from "./images/illustration-empty-cart.svg";

const Cart = ({cartItems, onRemoveFromCart, onConfirmOrder}) => {
	const getTotalPrice = () => {
		return cartItems
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	return (
		<div className="bg-white p-4 rounded-lg shadow  top-0 right-0 m-4 w-80 md:w-96 lg:static lg:w-full lg:mt-8">
			<h2 className="text-2xl font-bold mb-4 text-orange-500">
				Your Cart ({cartItems.length})
			</h2>

			{cartItems.length === 0 ? (
				<div className="flex flex-col items-center">
					<img src={emptyCartImage} alt="Empty Cart" className="w-48 mb-4" />
					<p className="text-gray-500">Your added items will appear here</p>
				</div>
			) : (
				<>
					<ul>
						{cartItems.map((item, index) => (
							<li
								key={index}
								className="flex justify-between items-center mb-4"
							>
								<div>
									<h3 className="text-lg text-sm font-bold">{item.name}</h3>
									<p className="text-gray-600">
										<span className="text-orange-500 font-bold">
											{item.quantity}x
										</span>
										@ ${item.price.toFixed(2)}{" "}
										<span className="">
											{(item.price * item.quantity).toFixed(2)}{" "}
										</span>
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
							className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 mt-4 w-full"
						>
							Confirm Order
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
