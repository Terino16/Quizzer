"use client";

import React, { useState, useEffect } from "react";

type CountdownProps = {
  targetDate: string; // Date to countdown to, e.g., "Apr 25, 2024 10:00:00"
};

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const dest = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const diff = dest - now;

    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days: days < 10 ? `0${days}` : days,
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-start justify-center w-full gap-4 count-down-main">
      <div className="timer w-16">
        <div>
          <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-indigo-600 text-center">
            {timeLeft.hours}
          </h3>
        </div>
        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">
          hours
        </p>
      </div>

      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>

      <div className="timer w-16">
        <div>
          <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-indigo-600 text-center">
            {timeLeft.minutes}
          </h3>
        </div>
        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">
          minutes
        </p>
      </div>

      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>

      <div className="timer w-16">
        <div>
          <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-indigo-600 text-center">
            {timeLeft.seconds}
          </h3>
        </div>
        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">
          seconds
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
