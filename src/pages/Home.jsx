// src/pages/Home.jsx
import React, {useState, useEffect} from "react";
import DessertItem from "../components/DessertItem.jsx";
import Cart from "../components/Cart.jsx";

const Home = () => {
	const [desserts, setDesserts] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then(response => response.json())
			.then(data => setDesserts(data))
			.catch(error => console.error("Error fetching desserts:", error));
	}, []);

	const handleAddToCart = dessert => {
		const existingItem = cartItems.find(item => item.name === dessert.name);
		if (existingItem) {
			setCartItems(
				cartItems.map(item =>
					item.name === dessert.name
						? {...item, quantity: item.quantity + 1}
						: item
				)
			);
		} else {
			setCartItems([...cartItems, {...dessert, quantity: 1}]);
		}
	};

	const handleRemoveFromCart = dessert => {
		const existingItem = cartItems.find(item => item.name === dessert.name);
		if (existingItem.quantity === 1) {
			setCartItems(cartItems.filter(item => item.name !== dessert.name));
		} else {
			setCartItems(
				cartItems.map(item =>
					item.name === dessert.name
						? {...item, quantity: item.quantity - 1}
						: item
				)
			);
		}
	};

	const handleConfirmOrder = () => {
		alert("Order confirmed!");
		setCartItems([]);
	};

	return (
		<div className="container mx-auto py-8 flex flex-col lg:flex-row lg:justify-between">
			<div className="w-full lg:w-2/3">
				<h1 className="text-3xl font-bold mb-4">Our Delicious Desserts</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{desserts.map(dessert => (
						<DessertItem
							key={dessert.name}
							dessert={dessert}
							cartItem={cartItems.find(item => item.name === dessert.name)}
							onAddToCart={handleAddToCart}
							onAddItem={() => handleAddToCart(dessert)}
							onRemoveItem={() => handleRemoveFromCart(dessert)}
						/>
					))}
				</div>
			</div>
			<div className="lg:w-1/3">
				<Cart
					cartItems={cartItems}
					onRemoveFromCart={handleRemoveFromCart}
					onConfirmOrder={handleConfirmOrder}
				/>
			</div>
		</div>
	);
};

export default Home;
