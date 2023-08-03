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

// SONGS
import GrassSong from "../assets/songs/grass.mp3";
import LakeSong from "../assets/songs/lake.mp3";
import RelaxSong from "../assets/songs/relax.mp3";
import SeaSong from "../assets/songs/sea.mp3";
import WoodsSong from "../assets/songs/woods.mp3";

// API KEY
export const OPEN_WEATHER_KEY = "6a328251fa3f88b66e7627cfcec453ab";

// WEATHER SENTENCES AND ICONS

export const weatherIcons = {
  clouds: {
    img: CloudsIcon,
    sentence:
      "Today is a cloudy day. Embrace the calmness within the clouds. Take a moment to meditate and find serenity within yourself.",
    bgColor: "bg-blue-300",
  },
  clear: {
    img: ClearIcon,
    sentence:
      "It's a clear day outside. Let your mind find clarity in your meditation. Take some time to meditate and bring clarity to your thoughts.",
    bgColor: "bg-yellow-300",
  },
  mist: {
    img: AtmosphereIcon,
    sentence:
      "The air is filled with mist. Embrace the soothing ambiance and find tranquility within yourself. Try meditating amidst the mist and feel its calming effect.",
    bgColor: "bg-gray-300",
  },
  snow: {
    img: SnowIcon,
    sentence:
      "Snowflakes are falling gently. Meditate and feel the stillness within. Take a moment to meditate and appreciate the beauty of the falling snow.",
    bgColor: "bg-white",
  },
  rain: {
    img: RainIcon,
    sentence:
      "Rain is nourishing the earth. Reflect and find renewal in your meditation. Take some time to meditate and embrace the refreshing energy of the rain.",
    bgColor: "bg-blue-500",
  },
  drizzle: {
    img: DrizzleIcon,
    sentence:
      "A light drizzle is refreshing. Meditate and cleanse your thoughts. Take a moment to meditate and let the drizzle wash away any worries.",
    bgColor: "bg-teal-200",
  },
  thunderstorm: {
    img: ThunderstormIcon,
    sentence:
      "Thunder roars in the sky. Embrace the power of your inner strength. Take some time to meditate and tap into your inner strength.",
    bgColor: "bg-indigo-600",
  },
  haze: {
    img: AtmosphereIcon,
    sentence:
      "The atmosphere is hazy. Embrace the mysterious aura around you. Try meditating amidst the haze and see what insights come to you.",
    bgColor: "bg-purple-300",
  },
  smoke: {
    img: AtmosphereIcon,
    sentence:
      "Smoke fills the air. Find clarity and direction amidst the smoky haze. Take a moment to meditate and let the smoke dissipate any mental fog.",
    bgColor: "bg-gray-400",
  },
  sand: {
    img: AtmosphereIcon,
    sentence:
      "The air is filled with sand particles. Embrace the earthy connection. Try meditating and feel grounded like the sand beneath your feet.",
    bgColor: "bg-yellow-400",
  },
  dust: {
    img: AtmosphereIcon,
    sentence:
      "Dust is in the air. Reflect on the transient nature of life. Take some time to meditate and contemplate the impermanence of things.",
    bgColor: "bg-yellow-600",
  },
  fog: {
    img: AtmosphereIcon,
    sentence:
      "A thick fog blankets the surroundings. Find peace in the moment. Take a moment to meditate amidst the fog and let your mind settle.",
    bgColor: "bg-gray-500",
  },
  squall: {
    img: AtmosphereIcon,
    sentence:
      "Squalls are moving through. Stay resilient and steady like the wind. Take some time to meditate and harness the strength of the wind.",
    bgColor: "bg-blue-600",
  },
  tornado: {
    img: AtmosphereIcon,
    sentence:
      "A tornado approaches. Find inner strength in times of chaos. Take a moment to meditate and find calmness amidst the storm.",
    bgColor: "bg-red-600",
  },
  volcanicAsh: {
    img: AtmosphereIcon,
    sentence:
      "Volcanic ash fills the sky. Embrace the cycle of destruction and creation. Take some time to meditate and reflect on the transformative power of change.",
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

export type Exercise = {
  title: string;
  img: string;
  sentence: string;
  bgColor: string;
  song: string;
  bgImageSm: string;
  bgImageMd: string;
  pathBgImageSm?: string;
  pathBgImageMd?: string;
};

// EXERCISES SENTENCES AND ICONS
export const exercisesIcons: Record<string, Exercise> = {
  grass: {
    title: "grass",
    img: Grass,
    sentence:
      "Feel the softness of the grass, finding presence in the earth's embrace.",
    bgColor: "bg-green-200",
    song: GrassSong,
    bgImageSm: "bg-grass-background-sm",
    bgImageMd: "md:bg-grass-background-md",
    pathBgImageSm: "../assets/background/grass-background-sm.jpg",
    pathBgImageMd: "../assets/background/grass-background-md.jpg",
  },
  lake: {
    title: "lake",
    img: Lake,
    sentence: "Imagine thoughts as ripples on a serene lake, gently calming.",
    bgColor: "bg-blue-200",
    song: LakeSong,
    bgImageSm: "bg-lake-background-sm",
    bgImageMd: "md:bg-lake-background-md",
  },
  relax: {
    title: "relax",
    img: Relax,
    sentence: "Let go of tension, embrace tranquility within your mind.",
    bgColor: "bg-yellow-200",
    song: RelaxSong,
    bgImageSm: "bg-relax-background-sm",
    bgImageMd: "md:bg-relax-background-md",
  },
  sea: {
    title: "sea",
    img: Sea,
    sentence: "Allow the sea's rhythm to guide you to inner peace.",
    bgColor: "bg-teal-200",
    song: SeaSong,
    bgImageSm: "bg-sea-background-sm",
    bgImageMd: "md:bg-sea-background-md",
  },
  woods: {
    title: "woods",
    img: Woods,
    sentence:
      "Walk through enchanting woods, nature's harmony restores your spirit.",
    bgColor: "bg-emerald-300",
    song: WoodsSong,
    bgImageSm: "bg-woods-background-sm",
    bgImageMd: "md:bg-woods-background-md",
  },
};
