import React, { FC, ReactNode } from "react";
import "../styles/Tooltip.css";

interface TooltipProps {
  text: string;
	children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip">
        <span className="tooltip-text">{text}</span>
        <div className="tooltip-arrow"></div>
      </div>
    </div>
  );
};

export default Tooltip;
