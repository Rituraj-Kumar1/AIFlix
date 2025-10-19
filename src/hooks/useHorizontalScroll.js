import { useRef } from "react";

export default function useHorizontalScroll() {
  const scrollerRef = useRef(null);

  const scrollBy = (distance) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: distance, behavior: "smooth" });
  };

  return { scrollerRef, scrollBy };
}
