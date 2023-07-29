import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";

export default function Hero() {
  return (
    <div className="bg-blue-500 min-h-full py-20 flex flex-col items-center">
      {/* LOGO */}
      <motion.div
        className="w-5/6 md:w-96"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <img src={Logo} alt="logo" />
      </motion.div>
      {/* MESSAGGIO DI BENVENUTO */}
      <div>
        <h1 className="text-4xl text-white">Bentornato!</h1>
      </div>
    </div>
  );
}
