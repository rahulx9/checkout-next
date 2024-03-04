import { TIMER_LOCAL_STORAGE_KEY } from "./timer.constants";

function addPadding(number: number) {
  return number < 10 ? `0${number}` : number;
}

function shouldContinueTimer() {
  var previousURL = document.referrer || "";
  return previousURL.includes("checkout.quince.com");
}

export function getInitTime() {
  try {
    let remTime = window.localStorage.getItem(TIMER_LOCAL_STORAGE_KEY);
    console.log("123 remTime ", remTime)
    // let samePage = shouldContinueTimer();
    if (!remTime) {
      remTime = String(10 * 60);
    }
    return Math.min(parseInt(remTime), 60 * 10);
  } catch (error) {
    return 0;
  }
}

export function getTimeFromSec(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${addPadding(minutes)}: ${addPadding(remainingSeconds)}`;
}

export function clearLocalstorage() {
  try {
    window.localStorage.removeItem(TIMER_LOCAL_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function saveToLocalStorage(remainingTime: string) {
  try {
    window.localStorage.setItem(TIMER_LOCAL_STORAGE_KEY, remainingTime);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
