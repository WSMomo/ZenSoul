import Exercises from "../scenes/Exercises";
import Footer from "../scenes/Footer";
import Hero from "../scenes/Hero";
import Navbar from "../scenes/Navbar";
import WeatherExercise from "../scenes/WeatherExercise";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WeatherExercise />
      <Exercises />
      <Footer />
    </>
  );
}
