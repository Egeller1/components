import React from "react";
import "../App.css";
import { Slide } from "../App";

interface ScrollIndicatorProps {
  slides: Slide[];
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  slides,
  activeIndex,
  onDotClick,
}) => {
  return (
    <div className="scroll-indicator">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`indicator-dot ${index === activeIndex ? "active" : ""}`}
          onClick={() => onDotClick(index)}
          title={slide.label}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
