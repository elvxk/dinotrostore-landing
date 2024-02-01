import { motion } from "framer-motion";
import contact from "../assets/segment/contact.webp";
import {
  PiTelegramLogo,
  PiDiscordLogo,
  PiWhatsappLogo,
  PiInstagramLogo,
  PiGlobe,
} from "react-icons/pi";

const Contact = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <section
      name="contact"
      className="min-h-screen bg-[#0e101c] dark:bg-white transition-all py-[5vh] pb-[10vh]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex container mx-auto flex-col justify-center gap-6 items-center px-4 "
      >
        <div className="hover:scale-105 transition-all hover:-rotate-3 aspect-square h-[250px] lg:h-[350px] -m-4 self-center">
          <motion.img
            variants={item}
            draggable="false"
            src={contact}
            alt="dinotrostore logo"
          />
        </div>
        <div className="hover:scale-105 transition-all cursor-default lg:hover:translate-x-0 lg:hover:scale-105">
          <motion.h1
            variants={item}
            className="text-white dark:text-black font-single text-3xl "
          >
            TEMUKAN <span className="text-green-500">DINOTROSTORE</span>
          </motion.h1>
        </div>

        <motion.div
          variants={item}
          className="flex flex-col gap-4 lg:gap-6 justify-center items-center text-[#0e101c]] font-single text-xl py-4"
        >
          <a
            href="https://dinotrostore.com"
            target="_blank"
            className="hover:scale-95 transition-all flex gap-4 bg-green-500 py-4 items-center justify-center w-full px-20 lg:px-60 rounded-full "
          >
            <PiGlobe /> WEBSITE
          </a>
          <a
            href="https://discord.gg/GRVfj8BDWA"
            target="_blank"
            className="hover:scale-95 transition-all flex gap-4 bg-green-500 py-4 items-center justify-center w-full px-20 lg:px-60 rounded-full "
          >
            <PiDiscordLogo /> DISCORD
          </a>
          <a
            href="https://t.me/dinotrostore"
            target="_blank"
            className="hover:scale-95 transition-all flex gap-4 bg-green-500 py-4 items-center justify-center w-full px-20 lg:px-60 rounded-full "
          >
            <PiTelegramLogo /> TELEGRAM
          </a>
          <a
            href="https://wa.me/6285155232487"
            target="_blank"
            className="hover:scale-95 transition-all flex gap-4 bg-green-500 py-4 items-center justify-center w-full px-20 lg:px-60 rounded-full "
          >
            <PiWhatsappLogo /> WHATSAPP
          </a>
          <a
            href="https://www.instagram.com/dinotrostore/"
            target="_blank"
            className="hover:scale-95 transition-all flex gap-4 bg-green-500 py-4 items-center justify-center w-full px-20 lg:px-60 rounded-full "
          >
            <PiInstagramLogo /> INSTAGRAM
          </a>
        </motion.div>
        <motion.h1
          variants={item}
          className="text-lg text-white dark:text-black font-manrope cursor-default max-w-screen-md text-center"
        >
          Temukan Dinotro Store di social media atau contact diatas.
        </motion.h1>
      </motion.div>
    </section>
  );
};
export default Contact;
