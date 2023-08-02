import { useEffect, useRef, useState } from "react";
import Water from "../assets/songs/grass.mp3";
import { Clock } from "../components/Clock";
import { ActionButton } from "../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Workout() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(300);
  const minutes = Math.floor(timer / 60);
  const seconds = timer - minutes * 60;
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();
  const { title } = location.state;
  console.log(title);

  function handlePlay() {
    if (!isRunning && timer > 0) {
      // start the timer
      intervalRef.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      // start the song
      const audio = new Audio(Water);

      audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        audio.play();
      });

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
    <div
      className={`h-screen flex flex-col items-center py-10  bg-woods-background-sm md:bg-woods-background-md bg-no-repeat bg-cover`}
    >
      <Clock minutes={minutes} seconds={seconds} />
      {/* PLAY */}
      <ActionButton handleClick={handlePlay}>
        {isRunning && timer > 0 && "Stop"}
        {!isRunning && timer > 0 && "Start"}
        {isRunning && timer === 0 && "Restart"}
      </ActionButton>
      <div>
        <ActionButton handleClick={handleDecreaseTimer}>-5</ActionButton>
        <ActionButton handleClick={handleIncreaseTimer}>+5</ActionButton>
      </div>
      <ActionButton handleClick={() => navigate("../")}>
        Return at Home
      </ActionButton>
    </div>
  );
}
