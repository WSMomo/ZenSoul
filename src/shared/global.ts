// WEATHER ICONS
import CloudsIcon from "../assets/weather/clouds.png";
import ClearIcon from "../assets/weather/clear.png";
import RainIcon from "../assets/weather/rain.png";
import SnowIcon from "../assets/weather/snow.png";
import ThunderstormIcon from "../assets/weather/thunderstorm.png";
import DrizzleIcon from "../assets/weather/drizzle.png";
import AtmosphereIcon from "../assets/weather/atmosphere.png";

// EXERCISES ICONS
import Grass from "../assets/exercises/grass.jpg";
import Lake from "../assets/exercises/lake.jpg";
import Relax from "../assets/exercises/relax.jpg";
import Sea from "../assets/exercises/sea.jpg";
import Woods from "../assets/exercises/woods.jpg";

// API KEY
export const OPEN_WEATHER_KEY = "6a328251fa3f88b66e7627cfcec453ab";

// WEATHER SENTENCES AND ICONS
export const weatherIcons = {
  clouds: {
    img: CloudsIcon,
    sentence: "Today is a cloudy day. Embrace the calmness within the clouds.",
    bgColor: "bg-blue-300",
  },
  clear: {
    img: ClearIcon,
    sentence:
      "It's a clear day outside. Let your mind find clarity in your meditation.",
    bgColor: "bg-yellow-300",
  },
  mist: {
    img: AtmosphereIcon,
    sentence:
      "The air is filled with mist. Embrace the soothing ambiance and find tranquility within yourself.",
    bgColor: "bg-gray-300",
  },
  snow: {
    img: SnowIcon,
    sentence:
      "Snowflakes are falling gently. Meditate and feel the stillness within.",
    bgColor: "bg-white",
  },
  rain: {
    img: RainIcon,
    sentence:
      "Rain is nourishing the earth. Reflect and find renewal in your meditation.",
    bgColor: "bg-blue-500",
  },
  drizzle: {
    img: DrizzleIcon,
    sentence:
      "A light drizzle is refreshing. Meditate and cleanse your thoughts.",
    bgColor: "bg-teal-200",
  },
  thunderstorm: {
    img: ThunderstormIcon,
    sentence:
      "Thunder roars in the sky. Embrace the power of your inner strength.",
    bgColor: "bg-indigo-600",
  },
  haze: {
    img: AtmosphereIcon,
    sentence: "The atmosphere is hazy. Embrace the mysterious aura around you.",
    bgColor: "bg-purple-300",
  },
  smoke: {
    img: AtmosphereIcon,
    sentence:
      "Smoke fills the air. Find clarity and direction amidst the smoky haze.",
    bgColor: "bg-gray-400",
  },
  sand: {
    img: AtmosphereIcon,
    sentence:
      "The air is filled with sand particles. Embrace the earthy connection.",
    bgColor: "bg-yellow-400",
  },
  dust: {
    img: AtmosphereIcon,
    sentence: "Dust is in the air. Reflect on the transient nature of life.",
    bgColor: "bg-yellow-600",
  },
  fog: {
    img: AtmosphereIcon,
    sentence:
      "A thick fog blankets the surroundings. Find peace in the moment.",
    bgColor: "bg-gray-500",
  },
  squall: {
    img: AtmosphereIcon,
    sentence:
      "Squalls are moving through. Stay resilient and steady like the wind.",
    bgColor: "bg-blue-600",
  },
  tornado: {
    img: AtmosphereIcon,
    sentence: "A tornado approaches. Find inner strength in times of chaos.",
    bgColor: "bg-red-600",
  },
  volcanicAsh: {
    img: AtmosphereIcon,
    sentence:
      "Volcanic ash fills the sky. Embrace the cycle of destruction and creation.",
    bgColor: "bg-gray-800",
  },
};

export type WeatherType =
  | "clouds"
  | "clear"
  | "mist"
  | "snow"
  | "rain"
  | "drizzle"
  | "thunderstorm"
  | "haze"
  | "smoke"
  | "sand"
  | "dust"
  | "fog"
  | "squall"
  | "tornado"
  | "volcanicAsh";

// EXERCISES SENTENCES AND ICONS
export const exercisesIcons = {
  grass: {
    img: Grass,
    sentence:
      "Feel the softness of the grass, finding presence in the earth's embrace.",
    bgColor: "bg-green-200",
  },
  lake: {
    img: Lake,
    sentence: "Imagine thoughts as ripples on a serene lake, gently calming.",
    bgColor: "bg-blue-200",
  },
  relax: {
    img: Relax,
    sentence: "Let go of tension, embrace tranquility within your mind.",
    bgColor: "bg-yellow-200",
  },
  sea: {
    img: Sea,
    sentence: "Allow the sea's rhythm to guide you to inner peace.",
    bgColor: "bg-teal-200",
  },
  woods: {
    img: Woods,
    sentence:
      "Walk through enchanting woods, nature's harmony restores your spirit.",
    bgColor: "bg-emerald-300",
  },
};
