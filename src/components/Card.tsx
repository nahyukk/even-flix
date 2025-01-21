import React from "react";
import { Media } from "../models/Media";

export interface CardProps {
	media: Media;
}

const Card: React.FC<CardProps> = ({ media }) => {
	return (
		<div className="relative">
			<img
				src={`https://image.tmdb.org/t/p/original/${media.backdropPath}`}
				alt=""
				className="h-auto object-cover rounded-sm"
			/>
		</div>
	);
};

export default Card;
