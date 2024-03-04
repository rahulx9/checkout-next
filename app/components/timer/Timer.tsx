"use client";
import { useEffect, useState } from "react";
import styles from "./timer.module.scss";
import {
  clearLocalstorage,
  getInitTime,
  getTimeFromSec,
  saveToLocalStorage,
} from "./timer.util";

function Timer() {
  const [timerLeft, setTimeLeft] = useState<number>(getInitTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((time) => {
        if (time > 0) {
          const newTime = time - 1;
          saveToLocalStorage(`${newTime}`);
          return newTime;
        }
        clearInterval(interval);
        clearLocalstorage();
        return 0;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearLocalstorage();
    };
  }, []);

  return (
    <div className={styles.timerContainer}>
      <span className={styles.clockSvg}>
        <img src="/icons/timer.svg" alt="Chevron Right Icon" />
      </span>
      <span className={styles.timerBold}>Hurry!</span>{" "}
      <span>
        Your order is reserved for{" "}
        <span id="checkout_timer_sh">{getTimeFromSec(timerLeft)}</span> minutes
      </span>
    </div>
  );
}

export default Timer;
