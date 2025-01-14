import React from "react";

interface CardProps {
  backdropUrl: string;
}

const Card: React.FC<CardProps> = ({ backdropUrl }) => {
  return (
    <div className="relative overflow-hidden">
      <img src={backdropUrl} alt="" className="h-auto object-cover" />
    </div>
  );
};

export default Card;
