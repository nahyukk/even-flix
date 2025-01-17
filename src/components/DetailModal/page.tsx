import React, { FC, useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnclickOutside";
import ModalHeader from "./components/ModalHeader";
import ModalPoster from "./components/ModalPoster";
import ModalPosterButtons from "./components/ModalPosterButtons";
import ModalInfoSummary from "./components/ModalInfoSummary";
import ModalRecommends from "./components/ModalRecommends";
import {
	mapMovie,
	mapTV,
	MediaType,
	Movie,
	Season,
	Series,
} from "../../models/Media";
import ModalInfoDetail from "./components/ModalInfoDetail";
import { Credit, mapCredit } from "../../models/Credit";
import { Keywords, mapKeywords } from "../../models/Keyword";
import ModalEpisodes from "./components/ModalEpisodes";
import { Episodes, mapEpisodes } from "../../models/Episodes";
import { Recommend, mapRecommend } from "../../models/Recommend";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";

interface DetailModalProps {
	mediaType: MediaType;
}

const DetailModal: FC<DetailModalProps> = ({ mediaType }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	const [video, setVideo] = useState<Movie | Series | null>(null);
	const [episodes, setEpisodes] = useState<Episodes | null>(null);
	const [credit, setCredit] = useState<Credit | null>(null);
	const [keyword, setKeyword] = useState<Keywords | null>(null);
	const [recommends, setRecommends] = useState<Recommend[]>([]);

	useOnClickOutside({ ref: ref, handler: () => navigate(-1) });

	useEffect(() => {
		if (!id) {
			throw new Error("ID is Missing!");
		}
		fetchCredit(id, mediaType);
		fetchKeyword(id, mediaType);
		fetchRecommend(id, mediaType);
		if (mediaType === MediaType.MOVIE) {
			fetchMovieJSON(id);
		} else if (mediaType === MediaType.TV) {
			fetchTVJSON();
			fetchEpisodes();
		}
	}, []);

	const fetchMovieJSON = async (id: string) => {
		try {
			const request = await axios.get(`/movie/${id}`);
			const mappedMovie = mapMovie(request.data);
			console.log(mappedMovie);
			setVideo(mappedMovie);
		} catch (error) {
			console.log("Error fetch data", error);
		}
	};

	const fetchTVJSON = async () => {
		try {
			const response = await fetch("../json/series.json");
			const data = await response.json();
			const mappedMovie = mapTV(data);
			setVideo(mappedMovie);
		} catch (error) {
			console.log("Error fetch data", error);
		}
	};

	const fetchEpisodes = async () => {
		try {
			const response = await fetch("../json/season.json");
			const data = await response.json();
			const mappedSeason = mapEpisodes(data);
			setEpisodes(mappedSeason);
		} catch (error) {
			console.log("Error fetch data", error);
		}
	};

	const fetchCredit = async (id: string, movieType: MediaType) => {
		const url =
		mediaType === MediaType.MOVIE
			? `/movie/${id}/credits`
			: `/tv/${id}/credits`;
		try {
			const request = await axios.get(url);
			const mappedCredit = mapCredit(request.data);
			setCredit(mappedCredit);
		} catch (error) {
			console.log("Error fetch data", error);
		}
	};

	const fetchKeyword = async (id: string, movieType: MediaType) => {
		const url =
			mediaType === MediaType.MOVIE
				? `/movie/${id}/keywords`
				: `/tv/${id}/keywords`;
		try {
			const request = await axios.get(url);
			const mappedKeywords = mapKeywords(request.data);
			setKeyword(mappedKeywords);
		} catch (error) {
			console.log("Error fetch data", error);
		}
	};

	const fetchRecommend = async (id: string, movieType: MediaType) => {
		const url =
			mediaType === MediaType.MOVIE
				? `/movie/${id}/recommendations`
				: `/tv/${id}/recommendations`;
		try {
			const request = await axios.get(url);
			const mappedRecommend = mapRecommend(request.data);
			setRecommends(mappedRecommend);
		} catch (error) {
			console.log("Error fetch data", error);
		}
	};

	const handleSeasonSelect = (season: Season) => {
		// API 연결 시 시즌 업데이트
		console.log(season);
	};

	return (
		<div className="presenter z-10 absolute min-h-screen">
			{video && credit && keyword ? (
				<div className="wrapper-model fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center overflow-auto">
					<div
						className="modal relative bg-neutral-900 w-full max-w-6xl mt-8 mx-2 rounded-lg overflow-auto"
						ref={ref}
					>
						<ModalHeader />
						<ModalPoster video={video}>
							<ModalPosterButtons />
						</ModalPoster>
						<ModalInfoSummary
							video={video}
							casts={credit.cast}
							keywords={keyword.keywords}
						/>
						{episodes && (
							<ModalEpisodes
								backdropPath={video.backdropPath}
								seasons={(video as Series).seasons}
								episodes={episodes}
								selectedSeason={handleSeasonSelect}
							/>
						)}
						<ModalRecommends recommends={recommends} />
						<ModalInfoDetail
							video={video}
							credit={credit}
							keywords={keyword.keywords}
						/>
					</div>
				</div>
			) : (
				<div>loading...</div>
			)}
			;
		</div>
	);
};

export default DetailModal;
