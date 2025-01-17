import React, { FC } from "react";
import { Recommend } from "../../../models/Recommend";
import { convertReleaseDate } from "../../../util/calculate";

interface ModalRecommendProps {
	recommend: Recommend;
}

const ModalRecommend: FC<ModalRecommendProps> = ({ recommend }) => {
	const handleMyListAction = () => {
		console.log("tapMyList");
	};

	return (
		<div className="flex flex-col bg-neutral-700 rounded-md overflow-hidden">
			<img
				className="modal__poster-img w-full h-auto"
				src={`https://image.tmdb.org/t/p/original/${recommend.backdropPath}`}
				alt="modal__poster-img"
			/>
			<div className="flex justify-between p-4 items-center">
				<p className="flex items-center text-neutral-300 gap-1">
					<span className="text-[9px] border border-neutral-400 rounded-sm px-1">
						HD
					</span>
					{convertReleaseDate(recommend.releaseDate)}
				</p>
				<button
					className="modal__mylist-button text-white border-gray-400 border-2 rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center hover:border-white"
					onClick={() => handleMyListAction()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						role="img"
						viewBox="0 0 24 24"
						width="24"
						height="24"
						data-icon="PlusStandard"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
							fill="currentColor"
						></path>
					</svg>
				</button>
			</div>
			<p className="px-4 pb-4 text-sm">{recommend.overview}</p>
		</div>
	);
};

export default ModalRecommend;
