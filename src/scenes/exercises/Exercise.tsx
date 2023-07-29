type Props = {
  bgColor: string;
  sentence: string;
  image: string;
  side: number;
};

export function Exercise({ side, bgColor, sentence, image }: Props) {
  return (
    <>
      {/* IF EVEN = LEFT, ELSE = RIGHT */}
      {side % 2 === 0 ? (
        <div
          className={`w-5/6 md:w-3/5 h-32 md:h-48 rounded-r-3xl self-start ${bgColor} flex items-center min-w-min p-2`}
        >
          <div className="w-3/6 md:w-4/5 px-1 text-center font-semibold h-full flex items-center">
            {sentence}
          </div>
          <div className="flex justify-between w-3/6 md:w-1/5 items-center">
            <div className="rounded-full h-32 md:h-48 aspect-square">
              <img
                className="w-32 md:w-48 aspect-square rounded-full"
                src={image}
                alt="exercise-icon"
              />
            </div>
            <div className="px-2 text-2xl font-semibold">5'</div>
          </div>
        </div>
      ) : (
        <div
          className={`w-5/6 md:w-3/5 h-32 md:h-48 rounded-l-3xl self-end ${bgColor} flex items-center min-w-min p-2`}
        >
          <div className="flex justify-between w-3/6 md:w-1/5 items-center">
            <div className="px-2 text-2xl font-semibold">5'</div>
            <div className="rounded-full h-32 md:h-48 aspect-square">
              <img
                className="w-32 md:w-48 aspect-square rounded-full"
                src={image}
                alt="exercise-icon"
              />
            </div>
          </div>
          <div className="w-3/6 h-full md:w-4/5 px-2 text-center font-semibold flex items-center">
            {sentence}
          </div>
        </div>
      )}
    </>
  );
}
