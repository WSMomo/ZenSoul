import { useRef, useState } from "react";
import Water from "../../assets/songs/water.mp3";

export default function Workout() {
  const [timer, setTimer] = useState(300);
  const minutes = Math.floor(timer / 60);
  const seconds = timer - minutes * 60;
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(0);

  function handlePlay() {
    if (!isRunning) {
      // start the timer
      intervalRef.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      // stop the timer
      clearInterval(intervalRef.current);
    }
    setIsRunning(!isRunning);
  }

  return (
    <div className="h-screen flex flex-col items-center py-10">
      {/* CLOCK */}
      <div className="h-2/5 bg-green-50 rounded-full aspect-square flex relative">
        {/* MINUTES */}
        <div className="w-1/2 bg-black h-full rounded-l-full flex justify-center items-center">
          <p className="text-white font-semibold text-6xl">
            {minutes < 10 && "0"}
            {minutes}
          </p>
        </div>
        {/* DIVIDER */}
        <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-3xl">
          :
        </div>
        {/* SECONDS */}
        <div className="w-1/2 bg-yellow-500 h-full rounded-r-full flex justify-center items-center">
          <p className="text-black font-semibold text-6xl">
            {" "}
            {seconds < 10 && "0"}
            {seconds}
          </p>
        </div>
      </div>
      {/* PLAY */}
      <button className="bg-red-300 mt-10 p-2 rounded-md" onClick={handlePlay}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}
