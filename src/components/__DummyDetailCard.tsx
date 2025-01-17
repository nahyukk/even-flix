import React from "react";

interface DummyDetailCardProps {
	id: number;
	backdrop_path: string;
	style: React.CSSProperties;
	onMouseEnter?: () => void;
  onMouseLeave?: () => void; 
}

const DummyDetailCard: React.FC<DummyDetailCardProps> = ({ backdrop_path, style,  onMouseEnter,
  onMouseLeave,}) => {
  return (
    // 기존 w=256 h=318px
    <div className="dummy-detail-card w-64 h-80 rounded-md bg-white text-black overflow-hidden
        absolute z-50 opacity-0 scale-1 transition-all duration-500 ease-in-out hover:opacity-100 hover:scale-100" style={style}
				onMouseEnter={onMouseEnter} // 디테일 카드 유지
      	onMouseLeave={onMouseLeave}
			>
					
					{/*  */}
      <div className="dummy-detail-card-backdrop w-64 h-36">
        <img className="w-full h-full object-cover"
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
