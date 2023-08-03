// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Exercise,
  OPEN_WEATHER_KEY,
  WeatherType,
  exercisesIcons,
  // exercisesIcons,
  weatherIcons,
} from "../shared/global";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WeatherExercise() {
  // const navigate = useNavigate();
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weather, setWeather] = useState<WeatherType>("clear");
  const [type, setType] = useState<Exercise>(exercisesIcons.clear);
  const navigate = useNavigate();

  useEffect(() => {
    function handleExercise() {
      switch (weather) {
        case "clouds":
        case "haze":
        case "squall":
          setType(exercisesIcons.grass);
          break;
        case "clear":
        case "drizzle":
          setType(exercisesIcons.lake);
          break;
        case "mist":
        case "rain":
        case "thunderstorm":
          setType(exercisesIcons.sea);
          break;
        case "snow":
        case "tornado":
        case "volcanicAsh":
          setType(exercisesIcons.woods);
          break;
        case "smoke":
        case "sand":
        case "dust":
        case "fog":
          setType(exercisesIcons.relax);
          break;
        default:
          setType(exercisesIcons.relax);
          return;
      }
    }
    handleExercise();
  }, [weather]);

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
  useEffect(() => {
    const key: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}`;
    async function fetchWeather() {
      const res = await fetch(key);
      const data = await res.json();
      setWeather(data.weather[0].main.toLowerCase());
    }

    fetchWeather();
  }, [lat, lon]);

  function handleNavigate() {
    console.log(type);
    navigate("./workout", { state: { type } });
  }

  return (
    <motion.div
      onClick={handleNavigate}
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
        className={`flex flex-col justify-center items-center ${weatherIcons[weather]?.bgColor} bg-opacity-40 md:p-5 py-3 border-none rounded-lg hover:bg-opacity-60 cursor-pointer`}
      >
        <div className="flex flex-col justify-center items-center ">
          <p className="text-2xl w-4/5 md:w-3/6 text-center">
            "{weatherIcons[weather]?.sentence}"
          </p>
        </div>
        <div className="md:w-64 md:h-64">
          <img
            className="w-full h-full"
            src={weatherIcons[weather]?.img}
            alt={weather}
          />
        </div>
      </div>
    </motion.div>
  );
}
