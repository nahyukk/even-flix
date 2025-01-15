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

	const handleSeasonSelect = (season: Season) => {
		setSeason(season);
		selectedSeason(season);
	};

	return (
		<div className="px-12 py-8">
			<div className="grid gap-8 grid-cols-[2fr_1fr]">
				<p className="text-xl">회차</p>
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
				{episodes.episodes.map((episode, index) => (
					<ModalEpisode
						backdropPath={backdropPath}
						episode={episode}
						isFocus={index === 0}
					/>
				))}
			</div>
		</div>
	);
};

export default ModalEpisodes;
