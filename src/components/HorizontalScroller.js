import React, { useState } from "react";
import ScrollButton from "./ScrollButton";
import useHorizontalScroll from "../hooks/useHorizontalScroll";

const HorizontalScroller = ({ children, gap = 6, scrollFraction = 0.7 }) => {
  const { scrollerRef, scrollBy } = useHorizontalScroll();
  const [hovering, setHovering] = useState(false);

  const doScroll = (dir = "right") => {
    const el = scrollerRef.current;
    const width = el?.clientWidth || 400;
    const distance =
      (dir === "right" ? 1 : -1) * Math.round(width * scrollFraction);
    scrollBy(distance);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <ScrollButton
        side="left"
        onClick={() => doScroll("left")}
        visible={hovering}
      />
      <ScrollButton
        side="right"
        onClick={() => doScroll("right")}
        visible={hovering}
      />

      <div
        ref={scrollerRef}
        className="overflow-x-auto w-full flex md:p-0 scroll-smooth pb-6 -mt-1"
        style={{ gap: `${gap}px`, WebkitOverflowScrolling: "touch" }}
        tabIndex={0}
        role="list"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroller;
