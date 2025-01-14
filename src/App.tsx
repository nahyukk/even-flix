import React, { useState } from "react";
import "./App.css";
import DetailModal from "./components/DetailModal/page";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleClick = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<button onClick={handleClick}>Open Modal</button>
			{isModalOpen && <DetailModal setIsModalOpen={setIsModalOpen} />}
		</>
	);
}

export default App;
