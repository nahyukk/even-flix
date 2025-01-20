import React, { useEffect, useState } from "react";
import { mapMediaList, Media, MediaType } from "../../models/Media";
import axios from "../../api/axios";
import CardList from "../../components/CardList";
import PosterList from "../../components/PosterList";

const NewContentsPage = () => {
	const [newContents, setNewContents] = useState<Media[]>([]);
	const [koreaTop10Movies, setKoreaTop10Movies] = useState<Media[]>([]);

	useEffect(() => {
		fetchNewContents();
		koreaTop10Movie();
	}, []);

	// TODO: 알맞는 API찾기.
	const fetchNewContents = async () => {
		try {
			const request = await axios.get("movie/top_rated");
			const mappedResult = mapMediaList(request.data);
			setNewContents(mappedResult);
		} catch (error) {
			console.log("ERROR - ", error);
		}
	};

	const koreaTop10Movie = async () => {
		try {
			const request = await axios.get("trending/movie/day");
			const mappedResult = mapMediaList(request.data);
			setKoreaTop10Movies(mappedResult);
		} catch (error) {
			console.log("ERROR - ", error);
		}
	};

	return (
		<div>
			<CardList
				title="넷플릭스의 새로운 콘텐츠"
				cardProps={newContents.map((item) => ({
					key: item.id,
					id: item.id,
					backdrop_path: `https://image.tmdb.org/t/p/original/${item.backdropPath}`,
					type: item.type,
				}))}
			/>
			<PosterList
				title="오늘 대한민국의 TOP 10 영화"
				posterProps={koreaTop10Movies.slice(0, 10).map((item, index) => ({
					key: item.id,
					id: item.id,
					poster_path: `https://image.tmdb.org/t/p/original/${item.posterPath}`,
					backdrop_path: `https://image.tmdb.org/t/p/original/${item.backdropPath}`,
					type: MediaType.MOVIE,
					rank: index,
				}))}
			/>
			<PosterList
				title="오늘 대한민국의 TOP 10 시리즈"
				posterProps={koreaTop10Movies.slice(0, 10).map((item, index) => ({
					key: item.id,
					id: item.id,
					poster_path: `https://image.tmdb.org/t/p/original/${item.posterPath}`,
					backdrop_path: `https://image.tmdb.org/t/p/original/${item.backdropPath}`,
					type: MediaType.TV,
					rank: index,
				}))}
			/>
			<CardList
				title="이번 주 공개 콘텐츠"
				cardProps={newContents.map((item) => ({
					key: item.id,
					id: item.id,
					backdrop_path: `https://image.tmdb.org/t/p/original/${item.backdropPath}`,
					type: item.type,
				}))}
			/>
			<CardList
				title="다음 주 공개 콘텐츠"
				cardProps={newContents.map((item) => ({
					key: item.id,
					id: item.id,
					backdrop_path: `https://image.tmdb.org/t/p/original/${item.backdropPath}`,
					type: item.type,
				}))}
			/>
		</div>
	);
};

export default NewContentsPage;
