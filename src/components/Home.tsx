import Exercises from "./Exercises";
import Footer from "./Footer";
import Hero from "./Hero";
import WeatherExercise from "./WeatherExercise";

export default function Home() {
  return (
    <>
      <Hero />
      <WeatherExercise />
      <Exercises />
      <Footer />
    </>
  );
}
