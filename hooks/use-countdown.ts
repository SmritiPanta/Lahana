import { useEffect, useRef, useState } from 'react';

const getReturnValues = (countDown: number) => {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return { minutes, seconds };
};

/**
 *
 * @param countdownTime in milliseconds
 */
const useCountdown = (countdownTime: number) => {
  const interval = useRef<NodeJS.Timeout>();
  const [countDown, setCountDown] = useState(countdownTime);

  const restart = () => {
    clearInterval(interval.current);
    setCountDown(countdownTime);
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      setCountDown((prevCountDown) => {
        if (prevCountDown <= 0) {
          clearInterval(interval.current);
          return 0;
        }
        return prevCountDown - 1000;
      });
    }, 1000);

    return () => clearInterval(interval.current);
  }, [countDown]);

  return { ...getReturnValues(countDown), restart };
};

export { useCountdown };
