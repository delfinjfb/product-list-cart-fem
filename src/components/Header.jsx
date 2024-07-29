// src/components/Header.jsx
import React from "react";
import CartIcon from "./CartIcon.jsx"; // Assuming you have a CartIcon component

const Header = ({cartItemCount}) => {
	// Pass cartItemCount from App.jsx
	return (
		<header className="bg-orange-500 text-white py-4 shadow-md">
			<div className="container mx-auto flex items-center justify-between px-4">
				<h1 className="text-2xl font-semibold font-['Red Hat Text']">
					Sweet Delights
				</h1>
				<CartIcon itemCount={cartItemCount} />{" "}
				{/* Display cart icon and count */}
			</div>
		</header>
	);
};

export default Header;
