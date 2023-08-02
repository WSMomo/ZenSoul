import { useEffect, useRef, useState } from "react";
import Water from "../../assets/songs/water.mp3";
import { Clock } from "./Clock";

export default function Workout() {
  const [timer, setTimer] = useState(300);
  const minutes = Math.floor(timer / 60);
  const seconds = timer - minutes * 60;
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handlePlay() {
    if (!isRunning && timer > 0) {
      // start the timer
      intervalRef.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      // start the song
      const audio = new Audio(Water);
      audio.play();
      audioRef.current = audio;
    } else if (isRunning) {
      // stop the timer
      clearInterval(intervalRef.current);
      // pause the song
      audioRef.current?.pause();
    }

    // restart
    if (isRunning && timer === 0) {
      setTimer(300);
    }

    setIsRunning(!isRunning);
  }

  function handleDecreaseTimer() {
    if (timer > 300) {
      setTimer(timer - 300);
    } else {
      setTimer(3);
    }
  }

  function handleIncreaseTimer() {
    setTimer(timer + 300);
  }

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(intervalRef.current);
      audioRef.current?.pause();
    }
  }, [timer]);

  return (
    <div className="h-screen flex flex-col items-center py-10">
      <Clock minutes={minutes} seconds={seconds} />
      {/* PLAY */}
      <button className="bg-red-300 mt-10 p-2 rounded-md" onClick={handlePlay}>
        {isRunning && timer > 0 && "Stop"}
        {!isRunning && timer > 0 && "Start"}
        {isRunning && timer === 0 && "Restart"}
      </button>

      <div>
        <button
          onClick={handleDecreaseTimer}
          className="bg-red-300 m-10 p-2 rounded-md"
        >
          -5
        </button>
        <button
          onClick={handleIncreaseTimer}
          className="bg-red-300 m-10 p-2 rounded-md"
        >
          +5
        </button>
      </div>
    </div>
  );
}
