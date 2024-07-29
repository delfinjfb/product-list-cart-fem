// src/pages/Home.jsx
import React from "react";
import DessertItem from "../components/DessertItem.jsx"; // Assuming you have a DessertItem component

const Home = () => {
	// Sample dessert data (replace with your actual data)
	const desserts = [
		{
			name: "Chocolate Lava Cake",
			price: 9.99,
			image: "/images/image-brownie-tablet.jpg"
		},
		{
			name: "Strawberry Shortcake",
			price: 8.5,
			image: "/images/image-cake-tablet.jpg"
		}
		// ...more desserts
	];

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-4">Our Delicious Desserts</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{desserts.map(dessert => (
					<DessertItem key={dessert.name} dessert={dessert} />
				))}
			</div>
		</div>
	);
};

export default Home;
