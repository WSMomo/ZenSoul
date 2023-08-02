import Exercises from "../scenes/exercises";
import Footer from "../scenes/footer";
import Hero from "../scenes/hero";
import Navbar from "../scenes/navbar";
import WeatherExercise from "../scenes/weatherExercise";

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
