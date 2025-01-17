import React from "react";

interface CardProps {
	id: number;
	backdropPath: string;
}

const Card: React.FC<CardProps> = ({ backdropPath }) => {
  return (
    <div className="relative">
      <img
        src={backdropPath}
        alt=""
        className="h-auto object-cover rounded-sm"
      />
    </div>
  );
};

export default Card;
