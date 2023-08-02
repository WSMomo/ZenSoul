import Exercises from "./scenes/exercises";
import Footer from "./scenes/footer";
import Hero from "./scenes/hero";
import Navbar from "./scenes/navbar";
import WeatherExercise from "./scenes/weatherExercise";
import Workout from "./scenes/workout";

function App() {
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500">
      <Navbar />
      <Hero />
      <WeatherExercise />
      <Exercises />
      <Workout />
      <Footer />
    </div>
  );
}

export default App;
