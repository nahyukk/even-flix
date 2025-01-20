import React from "react";
import { useNavigate } from "react-router-dom";
import { MediaType } from "../models/Media";

export interface CardProps {
	id: number;
	backdrop_path: string;
	type: MediaType;
}


const Card: React.FC<CardProps> = ({ backdrop_path }) => {
	const navigate = useNavigate();

	const handleClickCard = () => {
		// navigate("/movie/1241982");
		navigate("/tv/1408");
	};

	return (
		<div className="relative">
			<button onClick={handleClickCard}>
				<img
					src={backdrop_path}
					alt=""
					className="h-auto object-cover rounded-sm"
				/>
			</button>
		</div>
	);
};

export default Card;
