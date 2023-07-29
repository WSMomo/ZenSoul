import Exercises from "./scenes/exercises";
import Hero from "./scenes/hero";
import Navbar from "./scenes/navbar";
import WeatherExercise from "./scenes/weatherExercise";

function App() {
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500">
      <Navbar />
      <Hero />
      <WeatherExercise />
      <Exercises />
    </div>
  );
}

export default App;
