import { useNavigate } from "react-router-dom";
import { PreviewImage } from "./PreviewImage";
export type Props = {
  bgColor: string;
  sentence: string;
  image: string;
  side: number;
  type: object;
  time: number;
};

export function Exercise({
  side,
  bgColor,
  sentence,
  image,
  time,
  type,
}: Props) {
  const navigate = useNavigate();
  const isEven = side % 2 === 0;
  const roundedStyle = isEven ? "rounded-r-full" : "rounded-l-full";
  return (
    <>
      {/* IF EVEN = LEFT, ELSE = RIGHT */}
      {isEven ? (
        <div
          onClick={() => navigate("./workout", { state: { type } })}
          className={`w-5/6 md:w-3/5 h-40 md:h-48 ${roundedStyle} self-start ${bgColor} flex items-center min-w-min p-2 cursor-pointer bg-opacity-60 hover:bg-opacity-90 shadow-md`}
        >
          <div className="w-3/6 md:w-4/5 px-1 font-semibold h-full flex items-center justify-center">
            {sentence}
          </div>
          <div className="flex justify-between  items-center">
            <PreviewImage image={image} />
            <div className="px-2 text-2xl font-semibold">{time / 60}'</div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => navigate("./workout", { state: { type } })}
          className={`w-5/6 md:w-3/5 h-40 md:h-48 ${roundedStyle} self-end ${bgColor} flex items-center min-w-min p-2 bg-opacity-60 hover:bg-opacity-90 cursor-pointer shadow-md`}
        >
          <div className="flex justify-between items-center">
            <div className="px-2 text-2xl font-semibold">{time / 60}'</div>
            <PreviewImage image={image} />
          </div>
          <div className="w-3/6 h-full md:w-4/5 px-2 font-semibold flex items-center justify-center">
            {sentence}
          </div>
        </div>
      )}
    </>
  );
}
