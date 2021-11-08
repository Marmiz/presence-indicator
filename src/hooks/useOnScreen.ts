import React, { RefObject, useEffect, useState } from "react";

type Visibilty = [string, boolean];

export default function useOnScreen<T extends Element>(
  ref: RefObject<T>,
  rootMargin: string = "0px"
): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const r = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // const name = entry.target.getAttribute("data-id") || "";
        // const visible = entry.isIntersecting;
        // console.log(name, visible);
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
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
