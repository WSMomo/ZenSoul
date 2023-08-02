import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
type Props = {
  bgColor: string;
  sentence: string;
  image: string;
  side: number;
  type: object;
};

export function Exercise({ side, bgColor, sentence, image, type }: Props) {
  const navigate = useNavigate();
  return (
    <>
      {/* IF EVEN = LEFT, ELSE = RIGHT */}
      {side % 2 === 0 ? (
        <motion.div
          onClick={() => navigate("./workout", { state: { type } })}
          className={`w-5/6 md:w-3/5 h-40 md:h-48 rounded-r-full self-start ${bgColor} flex items-center min-w-min p-2 cursor-pointer bg-opacity-60 hover:bg-opacity-90 shadow-md`}
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
            <div className="rounded-full h-32 md:h-48 aspect-square flex items-center">
              <img
                className="w-32 md:w-40 aspect-square rounded-full"
                src={image}
                alt="exercise-icon"
              />
            </div>
            <div className="px-2 text-2xl font-semibold">5'</div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          onClick={() =>
            navigate("./workout", {
              state: {
                type: { type },
              },
            })
          }
          className={`w-5/6 md:w-3/5 h-40 md:h-48 rounded-l-full self-end ${bgColor} flex items-center min-w-min p-2 bg-opacity-60 hover:bg-opacity-90 cursor-pointer shadow-md`}
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
            <div className="rounded-full h-32 md:h-48 aspect-square flex items-center">
              <img
                className="w-32 md:w-40 aspect-square rounded-full"
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
