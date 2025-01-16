import React, { FC, useState } from "react";
import { Season } from "../Model/VideoDetail";
import { Episodes } from "../Model/Episodes";
import ModalEpisode from "./ModalEpisode";
import ModalDropdown from "./ModalDropdown";

interface ModalEpisodesProps {
	backdropPath: string;
	seasons: Season[];
	episodes: Episodes;
	selectedSeason: (season: Season) => void;
}

const ModalEpisodes: FC<ModalEpisodesProps> = ({
	backdropPath,
	seasons,
	episodes,
	selectedSeason,
}) => {
	const [season, setSeason] = useState(seasons[seasons.length - 1]);
	const [showEpNumber, setShowEpNumber] = useState(5); // TODO: 10으로 늘려야함

	const handleSeasonSelect = (season: Season) => {
		setSeason(season);
		selectedSeason(season);
	};

	const handleExpanded = () => {
		if (showEpNumber < episodes.episodes.length) {
			// 전체 에피소드보다 적은 경우 더 보기 동작
			setShowEpNumber((prev) => Math.min(prev + 5, episodes.episodes.length));
		} else {
			setShowEpNumber((prev) => Math.max(prev - 5, 5));
		}
	};

	return (
		<div className="px-12 py-8">
			<div className="grid gap-8 grid-cols-[2fr_1fr]">
				<p className="text-xl font-semibold">회차</p>
				<ModalDropdown
					seasons={seasons}
					onSelect={handleSeasonSelect}
					selectedSeason={season}
				/>
			</div>
			{seasons.length > 1 && (
				<p className="text-sm pt-4">{`${season.name}:`}</p>
			)}
			<div className="flex flex-col justify-start flex-wrap pt-3">
				{episodes.episodes.slice(0, showEpNumber).map((episode, index) => (
					<ModalEpisode
						key={episode.id}
						backdropPath={backdropPath}
						episode={episode}
						isFocus={index === 0}
					/>
				))}
			</div>
			<div className="flex bottom-0 left-0 w-full h-0.5 bg-neutral-700 justify-center items-center ">
				<button
					className="w-8 h-8 flex items-center justify-center bg-neutral-800 border border-white rounded-full z-10"
					onClick={() => {
						handleExpanded();
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={`h-4 w-4 transition-transform ${
							showEpNumber >= episodes.episodes.length ? "rotate-180" : ""
						}`}
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ModalEpisodes;
