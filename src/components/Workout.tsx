import { useEffect, useRef, useState } from "react";
import { Clock } from "../components/Clock";
import { ActionButton } from "../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";
import TimeButton from "./TimeButton";
import { exercisesIcons } from "../shared/global";

export default function Workout() {
  useEffect(() => {
    console.log("Workout Page");
  }, []);
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  const defaultType = exercisesIcons.grass;
  console.log(defaultType);

  const { type } = location.state || defaultType;

  console.log(type);
  const { bgImageMd, bgImageSm, song, pathBgImageSm, pathBgImageMd, time } =
    type;
  const [timer, setTimer] = useState(time);
  const minutes = Math.floor(timer / 60);
  const seconds = timer - minutes * 60;

  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  useEffect(() => {
    const backgroundImageSm = new Image();
    const backgroundImageMd = new Image();
    backgroundImageSm.src = pathBgImageSm;
    backgroundImageMd.src = pathBgImageMd;

    const backgroundImage = backgroundImageSm || backgroundImageMd;

    backgroundImage.onload = () => {
      console.log("Immagine di sfondo caricata.");
      setImageIsLoaded(true);
    };

    backgroundImage.onerror = () => {
      console.error("Errore durante il caricamento dell'immagine di sfondo.");
      setImageIsLoaded(false);
    };
  }, [pathBgImageMd, pathBgImageSm]);

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

  function handleReset() {
    navigate("../");
    audioRef.current?.pause();
    clearInterval(intervalRef.current);
  }

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
