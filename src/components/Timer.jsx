"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const initialTime = 2 * 60; // 2 daqiqa = 120 soniya
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // Timer har safar refresh bo'lganda qayta 2 daqiqadan boshlanadi
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Daqiqa va soniyani formatlash
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center h-screen">
      <span className="text-6xl font-bold text-center">
        {minutes}:{seconds}
      </span>
    </div>
  );
}
