import React, { FC } from "react";
import { Episode } from "../Model/Episodes";
import { convertMinutesToHoursAndMinutes } from "../../../util/calculate";

interface ModalEpisodeProps {
	backdropPath: string;
	episode: Episode;
	isFocus: boolean;
}

const ModalEpisode: FC<ModalEpisodeProps> = ({
	backdropPath,
	episode,
	isFocus,
}) => {
	const isPastDate = (dateString: string): boolean => {
		const inputDate = new Date(dateString);
		const today = new Date();

		today.setHours(0, 0, 0, 0); // 현재 날짜를 yyyy-MM-dd 기준으로 초기화
		return inputDate < today;
	};

	const formatDate = (dateString: string): string => {
		const [year, month, day] = dateString.split("-").map(Number); // 문자열 분리 및 숫자로 변환
		return `${month}월 ${day}일`; // 원하는 형식으로 반환
	};

	return isPastDate(episode.airDate) ? (
		<div
			className={`relative flex items-center p-4 min-h-32 rounded-md ${
				isFocus ? "bg-neutral-800" : "bg-transparent"
			}`}
		>
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
	) : (
		<div className="relative flex items-center p-4 min-h-3 bg-black">
			<p className="text-xl px-4">{episode.episodeNumber}</p>
			<img
				className="flex w-10 sm:w-14 md:w-24 lg:w-40 h-auto aspect-video rounded-md"
				src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
				alt="episode-poster-img"
			/>
			<div className="flex-[0_0_70%]">
				<div className="flex justify-between pt-4 px-4 pb-2">
					<p className="font-semibold">{episode.name}</p>
				</div>
				<p className="text-neutral-400 text-sm px-4 pb-4">{`${formatDate(
					episode.airDate
				)} 공개`}</p>
			</div>
			<div className="absolute bottom-0 left-0 w-full h-px bg-neutral-800"></div>
		</div>
	);
};

export default ModalEpisode;
