import React, { useEffect, useRef } from 'react';

interface props {
  fetchMore: () => void;
}

const UIInfiniteScroll: React.FC<props> = ({ fetchMore }) => {
  const containerRef = useRef<any>();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);
    console.log(containerRef?.current);
    if (!containerRef.current) return;
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchMore, containerRef]);

  return <div ref={containerRef.current} />;
};

export default UIInfiniteScroll;
