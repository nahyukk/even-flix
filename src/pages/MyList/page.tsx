import React from "react";
import CardGrid from "../../components/CardGrid";
import { useFavorite } from "../../context/FavoriteContext";

const MyList = () => {
	const { favorites } = useFavorite();

  return (
    <div className="my-2 mx-12">
      <section className="my-list-header mb-24">
        <h1 className="text-[21px]">내가 찜한 리스트</h1>
      </section>
      <section className="my-list-main mb-80">
        {favorites.length > 0 ? (
					<CardGrid cardProps={favorites} />
				) : (
					<div className="flex justify-center items-center h-[200px]">
						<p className="text-[#666666]">아직 찜하신 콘텐츠가 없습니다.</p>
						<div className="h-[300px]"></div>
					</div>
				)}
      </section>
    </div>
  );
};

export default MyList;
