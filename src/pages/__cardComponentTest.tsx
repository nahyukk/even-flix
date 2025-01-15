import React from "react";
import CardList from "../components/CardList";
import dummyMoviesAndSeries from "../data/__dummyMoviesAndSeries";
import PosterList from "../components/PosterList";

const CardComponentTest: React.FC = () => {
  const transformedData = dummyMoviesAndSeries.map((item) => ({
    id: item.id,
    backdropUrl: item.backdrop_path,
    posterUrl: item.poster_path,
  }));

  return (
    <div className="overflow-x-hidden">
      <CardList title="타이틀을 넣어주세요" moviesAndSeries={transformedData} />
      <PosterList title="Top10 인기 짱짱" moviesAndSeries={transformedData} />
    </div>
  );
};

export default CardComponentTest;
