import React, { FC, useRef, useState } from "react";
import { Season } from "../../../models/Media";
import useOnClickOutside from "../../../hooks/useOnclickOutside";

interface ModalDropdownProps {
	seasons: Season[];
	onSelect: (season: Season) => void;
	selectedSeason: Season;
}

const ModalDropdown: FC<ModalDropdownProps> = ({
	seasons,
	onSelect,
	selectedSeason,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	useOnClickOutside({ ref: ref, handler: () => setIsOpen(false) });

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (season: Season) => {
		onSelect(season);
		setIsOpen(false);
	};

	return (
		<div className="relative justify-self-end" ref={ref}>
			<button
				className="px-4 py-2 bg-neutral-800 text-white rounded-md flex justify-between items-center border-neutral-700 border-2 font-bold gap-5"
				onClick={() => handleClick()}
			>
				{selectedSeason.name}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-4 w-4 transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{isOpen && (
				<div className="absolute whitespace-nowrap z-10 right-0 mt-2 bg-neutral-800 text-white border-neutral-700 border-2 py-2">
					{seasons.map((season, index) => (
						<div key={index}>
							<button
								onClick={() => {
									handleSelect(season);
								}}
								className="flex min-w-32 px-4 py-2 text-white hover:bg-neutral-500 items-center"
							>
								<p className="font-bold">{season.name}</p>
								<p className="text-xs">{`(${season.episodeCount}개 에피소드)`}</p>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ModalDropdown;
