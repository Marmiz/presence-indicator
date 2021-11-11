import { RefObject, useEffect, useState } from "react";

export enum POSITIONING {
  TOP,
  BOTTOM,
  VISIBLE,
}

export default function useOnScreen<T extends Element>(
  ref: RefObject<T>,
  rootMargin: string = "0px"
): POSITIONING {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<POSITIONING>(
    POSITIONING.BOTTOM
  );
  useEffect(() => {
    const r = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        // If not visible notify TOP or BOTTOM based on y axis position
        if (entry.isIntersecting) {
          setIntersecting(POSITIONING.VISIBLE);
          return;
        }
        const { y } = entry.boundingClientRect;
        const pos = y > 0 ? POSITIONING.BOTTOM : POSITIONING.TOP;
        setIntersecting(pos);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (r) {
        observer.unobserve(r);
      }
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
