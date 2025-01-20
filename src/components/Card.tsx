import React from "react";
import { MediaType } from "../models/Media";

export interface CardProps {
	id: number;
	backdrop_path: string;
	type: MediaType;
}

const Card: React.FC<CardProps> = ({ backdrop_path }) => {
	return (
		<div className="relative">
			<img
				src={backdrop_path}
				alt=""
				className="h-auto object-cover rounded-sm"
			/>
		</div>
	);
};

export default Card;
