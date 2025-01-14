import React from "react";

interface CardProps {
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ imageUrl }) => {
  return (
    <div className="relative overflow-hidden">
      <img src={imageUrl} alt="" className="h-auto object-cover" />
    </div>
  );
};

export default Card;
