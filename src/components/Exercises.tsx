import { exerciseInfo } from "../shared/global";
import { Exercise } from "../components/Exercise";

const exercisesTypes: Array<keyof typeof exerciseInfo> = [
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
        <Exercise key={index} side={index} type={exerciseInfo[type]} />
      ))}
    </div>
  );
}
