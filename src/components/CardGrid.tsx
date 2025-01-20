import React, { useState } from "react";
import Card, { CardProps } from "./Card";
import DummyDetailCard from "./__DummyDetailCard";

interface HoverPosition {
  top: number;
  left: number;
}

interface CardGridProps {
  cardProps: CardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ cardProps }) => {
  // 디테일 카드 호버 부분
  const [hoveredItem, setHoveredItem] = useState<CardProps | null>(null);
  const [hoverPosition, setHoverPosition] = useState<HoverPosition | null>(
    null
  );

  const handleCardMouseEnter = (item: CardProps, rect: DOMRect) => {
    setHoveredItem(item);
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
        {cardProps.map((item) => (
          <div
            onMouseEnter={(event) => {
              const rect = (
                event.currentTarget as HTMLElement
              ).getBoundingClientRect();
              handleCardMouseEnter(item, rect);
            }}
            onMouseLeave={() => {
              if (!hoveredItem) {
                setHoveredItem(null);
              }
            }}
          >
            <Card
              id={item.id}
              backdrop_path={item.backdrop_path}
              type={item.type}
            />
          </div>
        ))}
      </div>
      {hoveredItem && hoverPosition && (
        <DummyDetailCard
          id={hoveredItem.id}
          type={hoveredItem.type}
          backdrop_path={hoveredItem.backdrop_path}
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
