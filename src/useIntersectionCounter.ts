import { useRef, useState, useEffect, useCallback } from "react";

export const useIntersectionCounter = (options: IntersectionObserverInit) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(-1);

  const callback: IntersectionObserverCallback = useCallback(
    (entries) => {
      let lastEntry: IntersectionObserverEntry | null = null;

      for (let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i];

        if (entry.isIntersecting) {
          lastEntry = entry;
          break;
        }
      }

      if (!lastEntry) return;

      const { target } = lastEntry;

      const siblings = target.parentElement?.children;

      if (!siblings) return;

      let idx = 0;

      // which child am I?
      for (const child of siblings) {
        if (target.isSameNode(child)) {
          break;
        }
        idx++;
      }

      const countAfterMe = siblings.length - (idx + 1);

      if (countAfterMe < count || count === -1) {
        setCount(countAfterMe);
      }
    },
    [count]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (parentRef.current) {
      const children = parentRef.current.children;
      for (const child of children) {
        observer.observe(child);
      }
    }

    return () => {
      if (parentRef.current) {
        const children = parentRef.current.children;
        for (const child of children) {
          observer.unobserve(child);
        }
      }
    };
  }, [parentRef, callback]);

  return {
    parentRef: parentRef,
    count,
  };
};
