import React, { useState } from "react";
import "./App.css";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleClick = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<button onClick={handleClick}>Open Modal</button>
		</>
	);
}

export default App;
