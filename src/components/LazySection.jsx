// components/LazySection.jsx
import React, { Suspense, useRef, useState, useEffect } from "react";

const LazySection = ({ importFunc, fallback = <div>Loading...</div> }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const Component = React.lazy(importFunc);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing once loaded
        }
      },
      { threshold: 0.1 } // triggers when 10% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible && <Suspense fallback={fallback}><Component /></Suspense>}</div>;
};

export default LazySection;
