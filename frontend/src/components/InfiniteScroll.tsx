import React, { useCallback, useEffect, useRef } from 'react';

interface props {
  fetchMore: () => void | Promise<void>;
  root?: Element | Document | null | undefined;
  loading?: boolean;
}

const UIInfiniteScroll: React.FC<props> = ({ fetchMore, root }) => {
  const containerRef = useRef<any>();
  const onIntersect = useCallback<IntersectionObserverCallback>(
    async ([entry]) => {
      if (!entry.isIntersecting) return;
      await fetchMore();
    },
    [fetchMore]
  );

  useEffect(() => {
    if (!root) return; // () => {/** */ };

    const options = {
      root,
      rootMargin: '0px',
      threshold: 0.75,
    };

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(containerRef.current);

    // return () => {
    //   if (containerRef.current)
    //     observer.unobserve(containerRef.current)
    // };
  }, [onIntersect, root]);

  return (
    <div
      id="infinity-trigger"
      // style={{ background: "#000", width: '100%', height: '2rem' }}
      ref={containerRef}
    />
  );
};

export default UIInfiniteScroll;
