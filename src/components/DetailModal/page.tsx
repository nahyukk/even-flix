import React, {
	FC,
	useEffect,
	useRef,
	useState,
} from "react";
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
} from "./Model/VideoDetail";
import ModalInfoDetail from "./components/ModalInfoDetail";
import { Credit, mapCredit } from "./Model/Credit";
import { Keywords, mapKeywords } from "./Model/Keyword";
import ModalEpisodes from "./components/ModalEpisodes";
import { Episodes, mapEpisodes } from "./Model/Episodes";
import { Recommend, mapRecommend } from "./Model/Recommend";
import { useNavigate } from "react-router-dom";

interface DetailModalProps {
	// id: int,
	mediaType: MediaType;
}

const DetailModal: FC<DetailModalProps> = ({ mediaType }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const navigate = useNavigate();
	const [video, setVideo] = useState<Movie | Series | null>(null);
	const [episodes, setEpisodes] = useState<Episodes | null>(null);
	const [credit, setCredit] = useState<Credit | null>(null);
	const [keyword, setKeyword] = useState<Keywords | null>(null);
	const [recommends, setRecommends] = useState<Recommend[]>([]);

	useOnClickOutside({ ref: ref, handler: () => navigate(-1) });

	useEffect(() => {
		console.log("open");
		fetchCredit();
		fetchKeyword();
		fetchRecommend();
		if (mediaType === MediaType.MOVIE) {
			fetchMovieJSON();
		} else if (mediaType === MediaType.TV) {
			fetchTVJSON();
			fetchEpisodes();
		}
	}, []);

	const fetchMovieJSON = async () => {
		try {
			const response = await fetch("../json/movie.json");
			const data = await response.json();
			const mappedMovie = mapMovie(data);
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

	const fetchCredit = async () => {
		try {
			const response = await fetch("../json/credit.json");
			const data = await response.json();
			const mappedCredit = mapCredit(data);
			setCredit(mappedCredit);
		} catch (error) {
			console.log("Error fetch data", error);
		}
	};

	const fetchKeyword = async () => {
		try {
			const response = await fetch("../json/keywords.json");
			const data = await response.json();
			const mappedKeywords = mapKeywords(data);
			setKeyword(mappedKeywords);
		} catch (error) {
			console.log("Error fetch data", error);
		}
	};

	const fetchRecommend = async () => {
		try {
			const response = await fetch("../json/recommdation.json");
			const data = await response.json();
			const mappedRecommend = mapRecommend(data);
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
