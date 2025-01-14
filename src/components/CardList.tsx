import React from "react";
import Card from "./Card";

interface MovieOrSeries {
  id: number;
  backdropUrl: string;
}

interface CardListProps {
	title: string;
  moviesAndSeries: MovieOrSeries[];
}

const CardList: React.FC<CardListProps> = ({ title, moviesAndSeries }) => {
  return (
    <section className="cardList">
			<h2>{title}</h2>
      <div className="relative flex flex-row gap-1">
        {moviesAndSeries.map((item) => (
          <div className="relative">
            <Card key={item.id} backdropUrl={item.backdropUrl} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;
