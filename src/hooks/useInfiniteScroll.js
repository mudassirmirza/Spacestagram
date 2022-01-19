import { useEffect, useCallback } from "react";

export const useInfiniteScroll = (scrollRef, pageDispatch) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0 && window.scrollY > 2000) {
            pageDispatch({ type: "NEXT_PAGE" });
          }
        });
      }).observe(node);
    },
    [pageDispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};
