// src/App.jsx
import React, {useState} from "react";
import {HelmetProvider} from "react-helmet-async";
import Home from "./pages/Home"; // Import your Home component
import Header from "./components/Header";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<HelmetProvider>
			<div className="App">
				<Header cartItemCount={cart.length} />
				<main>
					<Home cart={cart} setCart={setCart} />
				</main>
			</div>
		</HelmetProvider>
	);
}

export default App;
