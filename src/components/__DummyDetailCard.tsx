import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  type,
  backdrop_path,
  style,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // id(backdrop_path) 변경 시 즉시 숨김
    setVisible(false);

    // isActive가 true일 때 약간의 딜레이 후 보이도록 설정
    if (isActive) {
      const timeout = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [backdrop_path, isActive]);

  const navigate = useNavigate();

  const handleClickCard = () => {
    // navigate("/movie/1241982");
    navigate("/tv/1408");
  };

  return (
    // 기존 w=256 h=318px
    <div
      className={`dummy-detail-card w-64 h-80 rounded-md bg-white text-black overflow-hidden absolute z-10 transition-all duration-500  
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      style={style}
      onMouseEnter={onMouseEnter} // 디테일 카드 유지
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.stopPropagation(); // 이벤트 버블링 방지
        handleClickCard();
      }}
    >
      <div className="dummy-detail-card-backdrop w-64 h-36">
        <img
          className="w-full h-full object-cover"
          src={backdrop_path}
          alt=""
        />
      </div>
      {/* 원래 h=174px */}
      <div className="dummy-detail-card-contents w-64 h-44 p-4">
        <button className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300 hover:bg-gray-100">
          <svg
            width="80px"
            height="80px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="none" />
            <path
              d="M12 6V18"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12H18"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DummyDetailCard;
