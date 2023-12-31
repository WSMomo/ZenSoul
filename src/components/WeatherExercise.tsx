import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  OPEN_WEATHER_KEY,
  WeatherType,
  exerciseInfo,
  weatherInfo,
} from "../shared/global";

type ExerciseType = keyof typeof exerciseInfo;

function mapWeatherToExercise(weather: WeatherType): ExerciseType {
  const mapping: Record<WeatherType, ExerciseType> = {
    clouds: "grass",
    haze: "grass",
    squall: "grass",
    clear: "lake",
    drizzle: "lake",
    mist: "sea",
    rain: "sea",
    thunderstorm: "sea",
    snow: "woods",
    tornado: "woods",
    volcanicAsh: "woods",
    smoke: "relax",
    sand: "relax",
    dust: "relax",
    fog: "relax",
  };

  return mapping[weather] || "relax";
}

function WeatherExercise() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weather, setWeather] = useState<WeatherType>("clear");
  const navigate = useNavigate();

  // GET USER LOCATION
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLat(latitude);
          setLon(longitude);
        },
        (error) => {
          console.error("Errore geolocalizzazione:", error.message);
        }
      );
    } else {
      console.error("Il browser non supporta la geolocalizzazione.");
    }
  }, []);

  // GET USER LOCATION WEATHER CONDITIONS
  useEffect(() => {
    async function fetchWeather() {
      const key = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}`;
      try {
        const res = await fetch(key);
        const data = await res.json();
        setWeather(data.weather[0].main.toLowerCase());
      } catch (error) {
        console.error("Errore nel recupero dei dati meteorologici:", error);
      }
    }

    fetchWeather();
  }, [lat, lon]);

  // SET THE NAVIGATION PAGE
  function handleNavigate() {
    const weatherType = mapWeatherToExercise(weather);
    navigate("./workout", { state: { type: exerciseInfo[weatherType] } });
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: 0.2,
        duration: 0.75,
      }}
      variants={{
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div
        onClick={handleNavigate}
        className={`flex flex-col justify-center items-center ${weatherInfo[weather]?.bgColor} bg-opacity-40 md:p-5 py-3 border-none md:rounded-full hover:bg-opacity-60 cursor-pointer`}
      >
        <div className="flex flex-col justify-center items-center ">
          <p className="text-2xl w-4/5 md:w-3/6 text-center">
            "{weatherInfo[weather]?.sentence}"
          </p>
        </div>
        <div className="md:w-64 md:h-64">
          <img
            className="w-full h-full"
            src={weatherInfo[weather]?.img}
            alt={weather}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default WeatherExercise;
