// src/App.jsx
import React, { useState } from 'react';
import Home from "./pages/Home"; // Import your Home component
import Header from "./components/Header";

function App() {
  const [cart, setCart] = useState([]); 

	return (
		<div className="App">
			<Header cartItemCount={cart.length} />
			<Home />
		</div>
	);
}

export default App;
