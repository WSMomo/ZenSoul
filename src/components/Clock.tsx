import { formatNumber } from "../shared/utility";

type Props = {
  seconds: number;
  minutes: number;
};

export function Clock({ seconds, minutes }: Props) {
  return (
    <>
      {/* CLOCK */}
      <div className="h-2/5 bg-green-50  bg-opacity-50 rounded-full aspect-square flex relative border-4 border-blue-300 shadow-2xl mb-12">
        {/* MINUTES */}
        <div className="w-1/2 h-full rounded-l-full flex justify-center items-center">
          <p className="font-semibold text-6xl">{formatNumber(minutes)}</p>
        </div>
        {/* DIVIDER */}
        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-3xl">
          :
        </div>
        {/* SECONDS */}
        <div className="w-1/2  h-full rounded-r-full flex justify-center items-center">
          <p className=" font-semibold text-6xl">{formatNumber(seconds)}</p>
        </div>
      </div>
    </>
  );
}
