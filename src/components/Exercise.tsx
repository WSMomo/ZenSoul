import { useNavigate } from "react-router-dom";
import { PreviewImage } from "./PreviewImage";
import { ExerciseType } from "../shared/global";
export type Props = {
  side: number;
  type: ExerciseType;
};

export function Exercise({ side, type }: Props) {
  const navigate = useNavigate();
  const isEven = side % 2 === 0;
  const roundedStyle = isEven ? "rounded-r-full" : "rounded-l-full";
  console.log(type);
  return (
    <>
      {/* IF EVEN = LEFT, ELSE = RIGHT */}
      {isEven ? (
        <div
          onClick={() => navigate("./workout", { state: { type } })}
          className={`w-5/6 md:w-3/5 h-40 md:h-48 ${roundedStyle} self-start ${type.bgColor} flex items-center min-w-min p-2 cursor-pointer bg-opacity-60 hover:bg-opacity-90 shadow-md`}
        >
          <div className="w-3/6 md:w-4/5 px-1 font-semibold h-full flex items-center justify-center">
            {type.sentence}
          </div>
          <div className="flex justify-between  items-center">
            <PreviewImage image={type.img} />
            <div className="px-2 text-2xl font-semibold">{type.time / 60}'</div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => navigate("./workout", { state: { type } })}
          className={`w-5/6 md:w-3/5 h-40 md:h-48 ${roundedStyle} self-end ${type.bgColor} flex items-center min-w-min p-2 bg-opacity-60 hover:bg-opacity-90 cursor-pointer shadow-md`}
        >
          <div className="flex justify-between items-center">
            <div className="px-2 text-2xl font-semibold">{type.time / 60}'</div>
            <PreviewImage image={type.img} />
          </div>
          <div className="w-3/6 h-full md:w-4/5 px-2 font-semibold flex items-center justify-center">
            {type.sentence}
          </div>
        </div>
      )}
    </>
  );
}
