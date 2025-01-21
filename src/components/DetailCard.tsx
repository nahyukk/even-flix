import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";
import {
  mapMovie,
  mapTV,
  Media,
  MediaType,
  Movie,
  Series,
} from "../models/Media";
import { convertMinutesToHoursAndMinutes } from "../util/calculate";
import instance from "../api/axios";
import Tooltip from "./Tooltip";

interface DetailCardProps {
  media: Media;
  style: React.CSSProperties;
  isActive: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const DetailCard: React.FC<DetailCardProps> = ({
  media,
  style,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const [newMedia, setNewMedia] = useState<Media | null>(null);
  const [visible, setVisible] = useState(false);
  const [showBanner, setShowBanner] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites, addFavorite, removeFavorite } = useFavorite();

  // 디테일 카드 활성화 시 데이터 호출
  useEffect(() => {
    if (!isActive) return;
    const fetchMediaNew = async () => {
      try {
        let response;
        if (media.type === MediaType.MOVIE) {
          response = await instance.get(`/movie/${media.id}`);
          setNewMedia(mapMovie(response.data));
        } else if (media.type === MediaType.TV) {
          response = await instance.get(`/tv/${media.id}`);
          setNewMedia(mapTV(response.data));
        }
      } catch (error) {
        console.error("데이터 못 불러왔습니다.", error);
      }
    };

    fetchMediaNew();
  }, [isActive, media]);

  console.log("데이터:", newMedia);

  // "새로운 시즌" 또는 "최신 등록" 배너 표시 여부 확인
  useEffect(() => {
    if (!newMedia) return;

    const releaseDate = new Date(newMedia.releaseDate);
    const currentDate = new Date();

    const daysDifference = Math.floor(
      (currentDate.getTime() - releaseDate.getTime()) / (1000 * 3600 * 24)
    );

    if (daysDifference <= 31 && daysDifference >= 0) {
      if (media.type === MediaType.TV) {
        setShowBanner("새로운 시즌");
      } else if (media.type === MediaType.MOVIE) {
        setShowBanner("최신 등록");
      }
    } else {
      setShowBanner(null);
    }
  }, [newMedia]);

  // 디테일 카드 호버 부분
  useEffect(() => {
    setVisible(false);

    if (isActive) {
      const timeout = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [media, isActive]);

  // 클릭해서 모달 띄우는 부분
  const handleClickCard = () => {
    switch (media.type) {
      case MediaType.MOVIE:
        navigate(`/movie/${media.id}`, {
          replace: true,
          state: { backgroundLocation: location },
        });
        break;
      case MediaType.TV:
        navigate(`/tv/${media.id}`, {
          replace: true,
          state: { backgroundLocation: location },
        });
        break;
      default:
        console.error("Unknown Media type");
    }
  };

  // 찜 목록 추가, 삭제 부분
  const isFavorite = favorites.some((fav) => fav.id === media.id);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (isFavorite) {
      removeFavorite(media.id);
    } else {
      addFavorite(media);
    }
  };

  // 런타임 또는 시즌 정보 계산
  const getRuntimeOrSesaons = () => {
    if (!newMedia) return "정보 없음";
    switch (newMedia.type) {
      case MediaType.MOVIE:
        const movie = newMedia as Movie;
        return convertMinutesToHoursAndMinutes(movie.runtime);
      case MediaType.TV:
        const series = newMedia as Series;
        if (series.numberOfSeasons > 1) {
          return `시즌 ${series.numberOfSeasons}개`;
        } else {
          return `에피소드 ${series.numberOfEpisodes}개`;
        }
      default:
        return "정보 없음";
    }
  };

  return (
    <div
      className={`detail-card cursor-pointer w-full h-auto max-w-64 max-h-96 rounded-md bg-[#181818] text-white shadow-lg overflow-visible absolute z-[1002] transition-all duration-500  
        ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } sm:max-w-64 md:max-w-72 lg:max-w-80`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.stopPropagation();
        console.log("play");
      }}
    >
      <div className="detail-card-backdrop w-full h-auto relative">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${media.backdropPath}`}
          alt=""
        />
        {showBanner && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-md font-extrabold px-3 py-[2px] rounded-t-[3px]">
            {showBanner}
          </div>
        )}
      </div>
      <div className="detail-card-contents flex flex-col gap-5 w-full h-auto p-5">
        <div className="buttons flex flex-row justify-between">
          <div className="left-buttons flex flex-row justify-start items-center gap-3">
            <button
              className="play-button relative w-[21px] h-[21px] flex items-center justify-center rounded-full bg-gray-50 hover:bg-slate-200 active:slate-200 active:ring-2 active:ring-offset-[#181818] active:ring-offset-2 active:ring-white z-30"
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
                  strokeWidth="1"
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
            <Tooltip
              text={
                isFavorite
                  ? "내가 찜한 콘텐츠에서 삭제"
                  : "내가 찜한 콘텐츠에 추가"
              }
            >
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
            </Tooltip>
            <Tooltip text="좋아요">
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
            </Tooltip>
          </div>
          <div className="right-buttons flex flex-row justify-end items-center">
            <Tooltip text="회차 및 상세 정보">
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
            </Tooltip>
          </div>
        </div>
        <div className="px-2 flex flex-row gap-3 items-center">
          <span
            className={`flex items-center justify-center w-8 h-8 rounded text-[#181818] text-xl font-extrabold ${
              media.adult ? "bg-red-700" : "bg-green-700"
            }  p-2`}
          >
            <span
              className="font-sans"
              style={{
                transform: "scaleY(1.5)",
                transformOrigin: "center",
                letterSpacing: "-0.07rem",
              }}
            >
              {media.adult ? "19" : "PG"}
            </span>
          </span>
          <p className="text-gray-400">{getRuntimeOrSesaons()}</p>
          <p className="rounded border-[0.5px] px-2 text-xs">HD</p>
        </div>
        <div>
          <div className="detail-card-genres">
            {newMedia?.genres.length ? (
              newMedia.genres.map((genre, index) => (
                <span key={genre.id} className="text-gray-50">
                  {genre.name}
                  {index < newMedia.genres.length - 1 && ", "}
                </span>
              ))
            ) : (
              <span></span>
              // 아무 표시 안함
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
