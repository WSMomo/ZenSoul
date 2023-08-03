import { exercisesIcons } from "../shared/global";
import { Exercise } from "../components/Exercise";
const exercisesTypes: Array<keyof typeof exercisesIcons> = [
  "grass",
  "lake",
  "relax",
  "sea",
  "woods",
];

export default function Exercises() {
  return (
    <div className="flex flex-col gap-10">
      {exercisesTypes.map((type, index) => (
        <Exercise
          key={index}
          side={index}
          type={exercisesIcons[type]}
          bgColor={exercisesIcons[type].bgColor}
          sentence={exercisesIcons[type].sentence}
          image={exercisesIcons[type].img}
        />
      ))}
    </div>
  );
}
