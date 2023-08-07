import { useEffect, useRef, useState } from "react";
import { Clock } from "../components/Clock";
import { ActionButton } from "../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";
import TimeButton from "./TimeButton";
import { exerciseInfo } from "../shared/global";

export default function Workout() {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  // IF TYPE NOT LOADED
  const defaultType = exerciseInfo.grass;
  const { type = defaultType } = location.state || defaultType;

  const { bgImageMd, bgImageSm, song, pathBgImageSm, pathBgImageMd, time } =
    type;
  // TIMER
  const [timer, setTimer] = useState(time);
  const minutes = Math.floor(timer / 60);
  const seconds = timer - minutes * 60;

  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  // IMAGE LOADER
  useEffect(() => {
    const backgroundImageSm = new Image();
    const backgroundImageMd = new Image();
    backgroundImageSm.src = pathBgImageSm;
    backgroundImageMd.src = pathBgImageMd;

    const backgroundImage = backgroundImageSm || backgroundImageMd;

    backgroundImage.onload = () => {
      setImageIsLoaded(true);
    };

    backgroundImage.onerror = () => {
      setImageIsLoaded(false);
    };
  }, [pathBgImageMd, pathBgImageSm]);

  // AUDIO CONTROL
  function handlePlay() {
    if (!isRunning && timer > 0) {
      // start the timer
      intervalRef.current = setInterval(() => {
        setTimer((timer: number) => timer - 1);
      }, 1000);
      // start the song
      const audio = new Audio(song);

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

  // DECREASE TIMER
  function handleDecreaseTimer() {
    if (timer > 300) {
      setTimer(timer - 300);
    } else {
      setTimer(3);
    }
  }

  // INCREASE TIMER
  function handleIncreaseTimer() {
    setTimer(timer + 300);
  }

  // REMOVE AUDIO ON END
  useEffect(() => {
    if (timer <= 0) {
      clearInterval(intervalRef.current);
      audioRef.current?.pause();
    }
  }, [timer]);

  // RESET
  function handleReset() {
    navigate("../");
    audioRef.current?.pause();
    clearInterval(intervalRef.current);
  }

  // ON BROWSER "BACK"
  useEffect(() => {
    window.addEventListener("popstate", () => {
      navigate("../");
      audioRef.current?.pause();
      clearInterval(intervalRef.current);
    });
  }, [navigate]);

  return (
    <>
      {imageIsLoaded ? (
        <div
          className={`h-screen flex flex-col items-center justify-around py-10 bg-no-repeat bg-cover bg-center ${bgImageSm} ${bgImageMd}`}
        >
          <Clock minutes={minutes} seconds={seconds} />
          <div className="flex flex-col justify-center items-center">
            {/* PLAY */}
            <ActionButton handleClick={handlePlay} color="bg-blue-300">
              {isRunning && timer > 0 && "Stop"}
              {!isRunning && timer > 0 && "Start"}
              {isRunning && timer === 0 && "Restart"}
            </ActionButton>
            <div>
              <TimeButton handleClick={handleDecreaseTimer}>-5</TimeButton>
              <TimeButton handleClick={handleIncreaseTimer}>+5</TimeButton>
            </div>
            <ActionButton handleClick={handleReset} color="bg-slate-300">
              Return at Home
            </ActionButton>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
