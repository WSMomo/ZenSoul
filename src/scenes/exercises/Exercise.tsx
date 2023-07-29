import { motion } from "framer-motion";

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
        <motion.div
          className={`w-5/6 md:w-3/5 h-32 md:h-48 rounded-r-3xl self-start ${bgColor} flex items-center min-w-min p-2 cursor-pointer hover:bg-opacity-60`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="w-3/6 md:w-4/5 px-1 font-semibold h-full flex items-center justify-center">
            {sentence}
          </div>
          <div className="flex justify-between  items-center">
            <div className="rounded-full h-32 md:h-48 aspect-square">
              <img
                className="w-32 md:w-48 aspect-square rounded-full"
                src={image}
                alt="exercise-icon"
              />
            </div>
            <div className="px-2 text-2xl font-semibold">5'</div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className={`w-5/6 md:w-3/5 h-32 md:h-48 rounded-l-3xl self-end ${bgColor} flex items-center min-w-min p-2 hover:bg-opacity-60 cursor-pointer`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex justify-between items-center">
            <div className="px-2 text-2xl font-semibold">5'</div>
            <div className="rounded-full h-32 md:h-48 aspect-square">
              <img
                className="w-32 md:w-48 aspect-square rounded-full"
                src={image}
                alt="exercise-icon"
              />
            </div>
          </div>
          <div className="w-3/6 h-full md:w-4/5 px-2 font-semibold flex items-center justify-center">
            {sentence}
          </div>
        </motion.div>
      )}
    </>
  );
}
