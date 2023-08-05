export default function ErrorPage() {
  return (
    <div className="w-screen h-screen bg-slate-800 text-white flex flex-col gap-10 justify-center items-center text-2xl">
      <div className="w-1/2">
        Hello there! It seems even our zen thoughts decided to take a short
        break. But fret not, we're working behind the scenes to restore serenity
        to your meditation experience. Take a deep breath and come back soon to
        rediscover your virtual bliss. In the meantime, would you like to try
        our{" "}
        <a
          href={"https://zen-soul.vercel.app/"}
          className="underline text-blue-400"
        >
          homepage
        </a>{" "}
        to find your way back to tranquility? Namast-ha patience!
      </div>
      <div>🧘‍♀️🧘🏻‍♀️🧘🏼‍♀️🧘🏽‍♀️🧘🏾‍♀️🧘🏿‍♀️🧘🏿‍♂️🧘🏾‍♂️🧘🏽‍♂️🧘🏼‍♂️🧘🏻‍♂️🧘‍♂️</div>
    </div>
  );
}
