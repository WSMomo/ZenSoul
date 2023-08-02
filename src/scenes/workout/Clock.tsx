type Props = {
  seconds: number;
  minutes: number;
};
export function Clock({ seconds, minutes }: Props) {
  return (
    <>
      {/* CLOCK */}
      <div className="h-2/5 bg-green-50 rounded-full aspect-square flex relative">
        {/* MINUTES */}
        <div className="w-1/2 bg-black h-full rounded-l-full flex justify-center items-center">
          <p className="text-white font-semibold text-6xl">
            {minutes < 10 && "0"}
            {minutes}
          </p>
        </div>
        {/* DIVIDER */}
        <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-3xl">
          :
        </div>
        {/* SECONDS */}
        <div className="w-1/2 bg-yellow-500 h-full rounded-r-full flex justify-center items-center">
          <p className="text-black font-semibold text-6xl">
            {" "}
            {seconds < 10 && "0"}
            {seconds}
          </p>
        </div>
      </div>
    </>
  );
}
