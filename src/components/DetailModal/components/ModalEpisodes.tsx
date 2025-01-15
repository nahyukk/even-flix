import React, { FC } from "react";
import { Season } from "../Model/VideoDetail";
import { Episodes } from "../Model/Episodes";

interface ModalEpisodesProps {
	seasons: Season[];
	episodes: Episodes;
}

const ModalEpisodes: FC<ModalEpisodesProps> = ({ seasons, episodes }) => {
	return (
		<div className="px-12 py-8">
			<div className="grid gap-8 grid-cols-[2fr_1fr]">
				<p className="text-xl">회차</p>
				<p>시즌</p>
			</div>
			{seasons.length > 1 && (
				<p className="text-sm">{`시즌 ${seasons.at(-1)?.seasonNumber}:`}</p>
			)}
			<div className="">
				{episodes.episodes.map((episode) => (
					<p>{episode.name}</p>
				))}
			</div>
		</div>
	);
};

export default ModalEpisodes;
