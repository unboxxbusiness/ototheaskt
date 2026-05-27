'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  initialMinutes?: number;
}

export function Countdown({ initialMinutes = 90 }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <span className="font-mono font-bold font-variant-numeric tabular-nums text-rose-500">
      {hours.toString().padStart(2, '0')}:
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </span>
  );
}
