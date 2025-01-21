import React, { useState } from "react";
import Card from "./Card";
import DetailCard from "./DetailCard";
import { Media } from "../models/Media";

interface HoverPosition {
  top: number;
  left: number;
}

interface CardGridProps {
  mediaList: Media[];
}

const CardGrid: React.FC<CardGridProps> = ({ mediaList }) => {
  // 디테일 카드 호버 부분
  const [hoveredItem, setHoveredItem] = useState<Media | null>(null);
  const [hoverPosition, setHoverPosition] = useState<HoverPosition | null>(
    null
  );

  const handleCardMouseEnter = (media: Media, rect: DOMRect) => {
    setHoveredItem(media);
    setHoverPosition({
      top: rect.top + window.scrollY,
      left: rect.left + rect.width / 2,
    });
  };

  const handleDetailMouseEnter = () => {};

  const handleDetailMouseLeave = () => {
    setHoveredItem(null);
    setHoverPosition(null);
  };

  return (
    <>
      <div
        className="CardGrid grid grid-cols-3 gap-x-1 gap-y-10
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5
        xl:grid-cols-6"
      >
        {mediaList.map((media) => (
          <div
						key={media.id}
            onMouseEnter={(event) => {
              const rect = (
                event.currentTarget as HTMLElement
              ).getBoundingClientRect();
              handleCardMouseEnter(media, rect);
            }}
            onMouseLeave={() => {
              if (!hoveredItem) {
                setHoveredItem(null);
              }
            }}
          >
            <Card media={media} />
          </div>
        ))}
      </div>
      {hoveredItem && hoverPosition && (
        <DetailCard
          media={hoveredItem}
          style={{
            position: "absolute",
            top: hoverPosition.top,
            left: hoverPosition.left,
            transform: "translate(-50%, -25%)",
            zIndex: 10,
          }}
          isActive={true}
          onMouseEnter={handleDetailMouseEnter}
          onMouseLeave={handleDetailMouseLeave}
        />
      )}
    </>
  );
};

export default CardGrid;
