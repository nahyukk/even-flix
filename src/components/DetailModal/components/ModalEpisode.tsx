import React, { FC } from "react";
import { Episode } from "../Model/Episodes";

interface ModalEpisodeProps {
	episode: Episode;
  isFocus: boolean;
}

const ModalEpisode: FC<ModalEpisodeProps> = ({ episode, isFocus }) => {
	const convertMinutesToHoursAndMinutes = (totalMinutes: number): string => {
		const hours = Math.floor(totalMinutes / 60); // 시간을 계산
		const minutes = totalMinutes % 60; // 남은 분 계산
		return `${hours}시간 ${minutes}분`;
	};

	return (
		<div className={`relative flex items-center p-4 min-h-32 rounded-md ${isFocus ? 'bg-neutral-800' : 'bg-transparent'}`}>
			<p className="text-xl px-4">{episode.episodeNumber}</p>
			<img
				className="flex w-10 sm:w-14 md:w-24 lg:w-40 h-auto aspect-video rounded-md"
				src={`https://image.tmdb.org/t/p/original/${episode.stillPath}`}
				alt="episode-poster-img"
			/>
			<div className="flex-[0_0_70%]">
				<div className="flex justify-between pt-4 px-4 pb-2">
					<p className="font-semibold">{episode.name}</p>
					<p>{convertMinutesToHoursAndMinutes(episode.runtime)}</p>
				</div>
				<p className="text-neutral-400 text-sm px-4 pb-4">{episode.overview}</p>
			</div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-800"></div>
		</div>
	);
};

export default ModalEpisode;
