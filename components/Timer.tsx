import React, { useState, useEffect, useRef } from "react";

const Stopwatch: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(6000);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);

  const formatTime = (time: number) => String(Math.floor(time / 60)).padStart(2, "0") + ":" + String(time % 60).padStart(2, "0");

  return (
    <div>
      <h1>Time Left</h1>
      <div>
        <span className="text-red-500">{formatTime(seconds)}</span>
      </div>
    </div>
  );
};

export default Stopwatch;
