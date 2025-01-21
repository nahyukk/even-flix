import React, { useEffect, useState } from "react";
import { mapMediaList, Media, MediaType } from "../../models/Media";
import axios from "../../api/axios";
import CardList from "../../components/CardList";
import PosterList from "../../components/PosterList";

const NewContentsPage = () => {
	const [newContents, setNewContents] = useState<Media[]>([]);
	const [koreaTop10Movies, setKoreaTop10Movies] = useState<Media[]>([]);
	const [koreaTop10Series, setKoreaTop10Series] = useState<Media[]>([]);
	const [upComingMovies, setUpComingMovies] = useState<Media[]>([]);
	const [upComingSeries, setUpComingSeries] = useState<Media[]>([]);

	useEffect(() => {
		fetchNewContents();
		fetchTop10Movies();
		fetchTop10Series();
		fetchUpComingMovie();
		fetchUpComingSeries();
	}, []);

	const fetchNewContents = async () => {
		try {
			const request = await axios.get("movie/top_rated");
			const mappedResult = mapMediaList(request.data);
			setNewContents(mappedResult);
		} catch (error) {
			console.log("ERROR - ", error);
		}
	};

	const fetchTop10Movies = async () => {
		try {
			const request = await axios.get("trending/movie/day");
			const mappedResult = mapMediaList(request.data);
			setKoreaTop10Movies(mappedResult);
		} catch (error) {
			console.log("ERROR - ", error);
		}
	};

	const fetchTop10Series = async () => {
		try {
			const request = await axios.get("trending/tv/day");
			const mappedResult = mapMediaList(request.data);
			setKoreaTop10Series(mappedResult);
		} catch (error) {
			console.log("ERROR - ", error);
		}
	};

	const fetchUpComingMovie = async () => {
		try {
			const request = await axios.get("movie/upcoming");
			const mappedResult = mapMediaList(request.data);
			setUpComingMovies(mappedResult);
		} catch (error) {
			console.log("ERROR - ", error);
		}
	};

	const fetchUpComingSeries = async () => {
		try {
			const request = await axios.get("tv/airing_today");
			const mappedResult = mapMediaList(request.data);
			setUpComingSeries(mappedResult);
		} catch (error) {
			console.log("ERROR - ", error);
		}
	};

	return (
		<div className="py-10">
			<CardList title="넷플릭스의 새로운 콘텐츠" mediaList={newContents} />
			<PosterList
				title="오늘 대한민국의 TOP 10 영화"
				mediaList={koreaTop10Movies.slice(0, 10)}
			/>
			<PosterList
				title="오늘 대한민국의 TOP 10 시리즈"
				mediaList={koreaTop10Series.slice(0, 10)}
			/>
			<CardList title="이번 주 공개 영화" mediaList={upComingMovies} />
			<CardList title="방영 예정 콘텐츠" mediaList={upComingSeries} />
		</div>
	);
};

export default NewContentsPage;
