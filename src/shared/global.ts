// WEATHER ICONS
import CloudsIcon from "../assets/clouds.png";
import ClearIcon from "../assets/clear.png";
import RainIcon from "../assets/rain.png";
import SnowIcon from "../assets/snow.png";
import ThunderstormIcon from "../assets/thunderstorm.png";
import DrizzleIcon from "../assets/drizzle.png";
import AtmosphereIcon from "../assets/atmosphere.png";

export const OPEN_WEATHER_KEY = "6a328251fa3f88b66e7627cfcec453ab";
export const weatherIcons = {
  clouds: {
    img: CloudsIcon,
    sentence: "Today is a cloudy day. Embrace the calmness within the clouds.",
  },
  clear: {
    img: ClearIcon,
    sentence:
      "It's a clear day outside. Let your mind find clarity in your meditation.",
  },
  mist: {
    img: AtmosphereIcon,
    sentence:
      "The air is filled with mist. Embrace the soothing ambiance and find tranquility within yourself.",
  },
  snow: {
    img: SnowIcon,
    sentence:
      "Snowflakes are falling gently. Meditate and feel the stillness within.",
  },
  rain: {
    img: RainIcon,
    sentence:
      "Rain is nourishing the earth. Reflect and find renewal in your meditation.",
  },
  drizzle: {
    img: DrizzleIcon,
    sentence:
      "A light drizzle is refreshing. Meditate and cleanse your thoughts.",
  },
  thunderstorm: {
    img: ThunderstormIcon,
    sentence:
      "Thunder roars in the sky. Embrace the power of your inner strength.",
  },
  haze: {
    img: AtmosphereIcon,
    sentence: "The atmosphere is hazy. Embrace the mysterious aura around you.",
  },
  smoke: {
    img: AtmosphereIcon,
    sentence:
      "Smoke fills the air. Find clarity and direction amidst the smoky haze.",
  },
  sand: {
    img: AtmosphereIcon,
    sentence:
      "The air is filled with sand particles. Embrace the earthy connection.",
  },
  dust: {
    img: AtmosphereIcon,
    sentence: "Dust is in the air. Reflect on the transient nature of life.",
  },
  fog: {
    img: AtmosphereIcon,
    sentence:
      "A thick fog blankets the surroundings. Find peace in the moment.",
  },
  squall: {
    img: AtmosphereIcon,
    sentence:
      "Squalls are moving through. Stay resilient and steady like the wind.",
  },
  tornado: {
    img: AtmosphereIcon,
    sentence: "A tornado approaches. Find inner strength in times of chaos.",
  },
  volcanicAsh: {
    img: AtmosphereIcon,
    sentence:
      "Volcanic ash fills the sky. Embrace the cycle of destruction and creation.",
  },
};
