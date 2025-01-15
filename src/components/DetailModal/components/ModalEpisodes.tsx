import React, { FC } from "react";
import { Season } from "../Model/VideoDetail";
import { Episodes } from "../Model/Episodes";
import ModalEpisode from "./ModalEpisode";

interface ModalEpisodesProps {
	backdropPath: string;
	seasons: Season[];
	episodes: Episodes;
}

const ModalEpisodes: FC<ModalEpisodesProps> = ({ backdropPath, seasons, episodes }) => {
	return (
		<div className="px-12 py-8">
			<div className="grid gap-8 grid-cols-[2fr_1fr]">
				<p className="text-xl">회차</p>
				<p>시즌</p>
			</div>
			{seasons.length > 1 && (
				<p className="text-sm pt-4">{`시즌 ${
					seasons.at(-1)?.seasonNumber
				}:`}</p>
			)}
			<div className="flex flex-col justify-start flex-wrap pt-3">
				{episodes.episodes.map((episode, index) => (
					<ModalEpisode backdropPath={backdropPath} episode={episode} isFocus={index === 0} />
				))}
			</div>
		</div>
	);
};

export default ModalEpisodes;
