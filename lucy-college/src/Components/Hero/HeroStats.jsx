import React, { useEffect, useRef, useState } from "react";
import "./HeroStats.css";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset count to 0 each time it enters view
          setCount(0);

          let start = 0;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        } else {
          // Optional: reset when leaving viewport
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <h2 ref={ref}>{count}+</h2>;
};

const HeroStats = () => {
  const [enlarged, setEnlarged] = useState(false);
  const heroRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEnlarged(entry.isIntersecting); // toggle zoom based on visibility
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className={`hero-stats ${enlarged ? "zoom-in" : "zoom-out"}`}
    >
      <div className="stat">
        <Counter end={7} />
        <p>Courses</p>
      </div>

      <div className="stat">
        <Counter end={500} />
        <p>Students</p>
      </div>

      <div className="stat">
        <Counter end={2} />
        <p>Campuses</p>
      </div>
    </div>
  );
};

export default HeroStats;
