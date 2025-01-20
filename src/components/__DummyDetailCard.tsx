import React, { useEffect, useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";
import { MediaType } from "../models/Media";

interface DummyDetailCardProps {
	type: MediaType;
	id: number;
	backdrop_path: string;
	style: React.CSSProperties;
	isActive: boolean;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onClick?: () => void;
}

const DummyDetailCard: React.FC<DummyDetailCardProps> = ({
	id,
	type,
	backdrop_path,
	style,
	isActive,
	onMouseEnter,
	onMouseLeave,
	onClick,
}) => {
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const { favorites, addFavorite, removeFavorite } = useFavorite();

	// 디테일 카드 호버 부분
	useEffect(() => {
		setVisible(false);

		if (isActive) {
			const timeout = setTimeout(() => setVisible(true), 1000);
			return () => clearTimeout(timeout);
		}
	}, [backdrop_path, isActive]);

	// 클릭해서 모달 띄우는 부분
	const handleClickCard = () => {
		switch (type) {
			case MediaType.MOVIE:
				navigate(`/movie/${id}`, { replace: true });
				break;
			case MediaType.TV:
				navigate(`/tv/${id}`, { replace: true });
				break;
			default:
				console.error("Unknown Media type");
		}
	};

	// 찜 목록 추가, 삭제 부분
	const isFavorite = favorites.some((fav) => fav.id === id);

	const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		if (isFavorite) {
			removeFavorite(id);
		} else {
			addFavorite({ id, backdrop_path, type });
		}
	};

	return (
		// 기존 w=256 h=318px
		<div
			className={`dummy-detail-card w-full h-auto max-w-64 max-h-96 rounded-md bg-[#181818] text-white shadow-lg overflow-hidden absolute z-50 transition-all duration-500  
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"} sm:max-w-64 md:max-w-72 lg:max-w-80`}
			style={style}
			onMouseEnter={onMouseEnter} // 디테일 카드 유지
			onMouseLeave={onMouseLeave}
			onClick={(e) => {
				e.stopPropagation(); // 이벤트 버블링 방지
				handleClickCard();
			}}
		>
			<div className="dummy-detail-card-backdrop w-full h-auto">
				<img
					className="w-full h-full object-cover"
					src={backdrop_path}
					alt=""
				/>
			</div>
			{/* 원래 h=174px */}
			<div className="dummy-detail-card-contents w-full h-44 p-5">
				<button
					className="favorite-button w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-500 hover:border-white z-30"
					onClick={handleFavoriteClick}
				>
					{isFavorite ? (
						<svg
							className="checked-button"
							width="80px"
							height="80px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5 12L10 17L20 7"
								stroke="#ffffff"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					) : (
						<svg
							className="plus-button"
							width="80px"
							height="80px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="24" height="24" fill="none" />
							<path
								d="M12 6V18"
								stroke="#ffffff"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6 12H18"
								stroke="#ffffff"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	);
};

export default DummyDetailCard;
