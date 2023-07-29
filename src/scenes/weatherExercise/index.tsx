import { useEffect, useState } from "react";
import {
  OPEN_WEATHER_KEY,
  WeatherType,
  weatherIcons,
} from "../../shared/global";
import { motion } from "framer-motion";

export default function WeatherExercise() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weather, setWeather] = useState<WeatherType>("clear");
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
      console.log(data);
    }

    fetchWeather();
  }, [lat, lon, weather]);

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
      <div>
        <p className="text-2xl">"{weatherIcons[weather]?.sentence}"</p>
      </div>
      <div>
        <img src={weatherIcons[weather]?.img} alt={weather} />
      </div>
    </motion.div>
  );
}
