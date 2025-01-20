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
        ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } sm:max-w-64 md:max-w-72 lg:max-w-80`}
      style={style}
      onMouseEnter={onMouseEnter} // 디테일 카드 유지
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.stopPropagation();
        console.log("play");
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
        <div className="buttons flex flex-row justify-between">
          <div className="left-buttons flex flex-row justify-start items-center gap-3">
            <button
              className="play-button relative w-[21px] h-[21px] flex items-center justify-center rounded-full bg-white hover:bg-slate-200 active:slate-200 active:ring-2 active:ring-offset-[#181818] active:ring-offset-2 active:ring-white z-30"
              onClick={(e) => {
                e.stopPropagation();
                console.log("play button clicked!");
              }}
            >
              <svg
                width="800px"
                height="800px"
                viewBox="-1.2 0 8 8"
                transform="scale(0.5)"
                transform-origin="center"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-427.000000, -3765.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <polygon
                        id="play-[#1001]"
                        points="371 3605 371 3613 378 3609"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <button
              className="favorite-button w-6 h-6 flex items-center justify-center rounded-full ring-2 ring-gray-500 hover:ring-white active:bg-gray-400 active:border-3 z-30"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <svg
                  className="checked-button"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  transform="scale(0.8)"
                  transform-origin="center"
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
                  transform="scale(0.8)"
                  transform-origin="center"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" fill="none" />
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
            <button
              className="likes-button w-6 h-6 flex items-center justify-center rounded-full ring-2 ring-gray-500 hover:ring-white active:bg-gray-400 active:border-3 z-30"
              onClick={(e) => {
                e.stopPropagation();
                console.log("likes buttons clicked");
              }}
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                transform="scale(0.6)"
                transform-origin="center"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4996 5.20228C16.4996 2.76034 15.3595 1.00359 13.4932 1.00359C12.467 1.00359 12.1149 1.60496 11.747 3.00317C11.6719 3.29202 11.635 3.43266 11.596 3.57126C11.495 3.93 11.3192 4.54075 11.069 5.40227C11.0623 5.42535 11.0524 5.4471 11.0396 5.46718L8.17281 9.95284C7.49476 11.0138 6.49429 11.8293 5.31841 12.2795L4.84513 12.4607C3.5984 12.938 2.87457 14.2418 3.1287 15.5524L3.53319 17.6385C3.77462 18.8836 4.71828 19.8745 5.9501 20.1764L13.5778 22.0459C16.109 22.6663 18.6674 21.1314 19.3113 18.606L20.7262 13.0569C21.1697 11.3176 20.1192 9.54813 18.3799 9.10466C18.1175 9.03776 17.8478 9.00391 17.5769 9.00391H15.7536C16.2497 7.37102 16.4996 6.11123 16.4996 5.20228ZM4.60127 15.2669C4.48576 14.6711 4.81477 14.0785 5.38147 13.8615L5.85475 13.6803C7.33036 13.1154 8.58585 12.092 9.43674 10.7606L12.3035 6.27494C12.3935 6.13406 12.4629 5.981 12.5095 5.82043C12.7608 4.95542 12.9375 4.34143 13.0399 3.97754C13.083 3.82429 13.1239 3.66884 13.1976 3.38487C13.3875 2.66317 13.4809 2.50359 13.4932 2.50359C14.3609 2.50359 14.9996 3.48766 14.9996 5.20228C14.9996 6.08676 14.6738 7.53772 14.0158 9.51735C13.8544 10.0029 14.2158 10.5039 14.7275 10.5039H17.5769C17.7228 10.5039 17.868 10.5221 18.0093 10.5582C18.9459 10.797 19.5115 11.7497 19.2727 12.6863L17.8578 18.2354C17.4172 19.9633 15.6668 21.0135 13.9349 20.589L6.30718 18.7195C5.64389 18.5569 5.13577 18.0234 5.00577 17.3529L4.60127 15.2669Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="right-buttons flex flex-row justify-end items-center">
            <button
              className="likes-button w-6 h-6 flex items-center justify-center rounded-full ring-2 ring-gray-500 hover:ring-white active:bg-gray-400 active:border-3 z-30"
              onClick={(e) => {
                e.stopPropagation();
                handleClickCard();
              }}
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="white"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyDetailCard;
