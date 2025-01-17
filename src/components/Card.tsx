import React from "react";

export interface CardProps {
	id: number;
	backdrop_path: string;
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
