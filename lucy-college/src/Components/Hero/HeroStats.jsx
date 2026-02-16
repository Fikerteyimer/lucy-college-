import React, { useEffect, useRef, useState } from "react";
import "./HeroStats.css";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

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
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return <h2 ref={ref}>{count}+</h2>;
};

const HeroStats = () => {
  return (
    <div className="hero-stats">
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
