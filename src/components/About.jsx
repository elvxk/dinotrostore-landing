import { Typewriter } from "react-simple-typewriter";
import dinoduduk from "../assets/segment/about.webp";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoRocketSharp } from "react-icons/io5";
import { MdOutlineGames } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
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
      name="about"
      className="min-h-screen bg-[#0e101c] dark:bg-white transition-all py-[5vh] pb-[10vh]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex container mx-auto flex-col justify-center gap-4 items-start lg:items-center px-4 "
      >
        <div className="hover:scale-105 transition-all hover:-rotate-3 aspect-square h-[250px] lg:h-[350px] -m-4 self-center">
          <motion.img
            variants={item}
            draggable="false"
            src={dinoduduk}
            alt="dinotrostore logo"
          />
        </div>
        <div className="hover:translate-x-3 transition-all cursor-default lg:hover:translate-x-0 lg:hover:scale-105">
          <motion.h1
            variants={item}
            className="text-white dark:text-black font-single text-3xl "
          >
            TOP UP GAME{" "}
            <span className="text-green-500">
              <Typewriter
                words={["CEPAT", "MURAH", "AMANAH"]}
                loop={true}
                cursor
                cursorStyle="|"
              />
            </span>
          </motion.h1>
        </div>
        <motion.h1
          variants={item}
          className="text-lg text-white dark:text-black font-manrope cursor-default max-w-screen-md lg:text-center"
        >
          Dinotro Store adalah sebuah marketplace penyedia layanan topup games
          terbaik #1 Indonesia, dengan harga termurah dan proses super instan.
          Dapatkan lebih banyak promo dan potongan harga dengan cara bergabung
          menjadi member / pelanggan Premium.
        </motion.h1>
        <motion.div className="self-center" variants={item}>
          <MdOutlineGames className="text-white dark:text-black text-xl my-8 animate-pulse" />
        </motion.div>
        <div className="flex flex-col justify-center self-center gap-6 w-full">
          <motion.h1
            variants={item}
            className="text-green-500 font-single text-xl text-center"
          >
            <span className="text-white dark:text-black">KENAPA HARUS</span>{" "}
            DINOTROSTORE <span className="text-white dark:text-black">?</span>
          </motion.h1>
          <motion.div
            variants={item}
            className="flex flex-wrap gap-6 justify-center items-stretch px-4 cursor-default"
          >
            <div className="bg-[#1F212F] dark:hover:bg-[#1F212F] dark:bg-[#1F212F] w-full lg:w-[30%] rounded-xl flex flex-col justify-center items-center p-4 text-white font-manrope text-center gap-4 transition-all hover:bg-[#2a2c3b]">
              <FaHandHoldingDollar className="text-5xl" />
              <h1 className="font-bold text-xl">Harga Terjangkau</h1>
              <h1>
                Dijamin 100% harga cocok untuk Sobat Dinotroops ingin Top Up
                tapi tidak menguras dompet apalagi banyak PROMO loh.
              </h1>
            </div>
            <div className="bg-[#1F212F] dark:hover:bg-[#1F212F] dark:bg-[#1F212F] w-full lg:w-[30%] rounded-xl flex flex-col justify-center items-center p-4 text-white font-manrope text-center gap-4 transition-all hover:bg-[#2a2c3b]">
              <Ri24HoursFill className="text-5xl" />
              <h1 className="font-bold text-xl">Proses Otomatis 24 Jam</h1>
              <h1>
                Proses 24 Jam jadi tidak usah takut sekarang Sobat Dinotroops
                Top Up Kapan Saja dan Dimana Saja.
              </h1>
            </div>
            <div className="bg-[#1F212F] dark:hover:bg-[#1F212F] dark:bg-[#1F212F] w-full lg:w-[30%] rounded-xl flex flex-col justify-center items-center p-4 text-white font-manrope text-center gap-4 transition-all hover:bg-[#2a2c3b]">
              <IoLogoGameControllerB className="text-5xl" />
              <h1 className="font-bold text-xl">Tersedia Semua Games</h1>
              <h1>
                Kami menyediakan Beberapa Games Top Up Seperti Mobile Legends,
                Free Fire, Valorant, Genshin Impact dan masih banyak lagi.
              </h1>
            </div>
          </motion.div>
        </div>
        <div className="pt-6 self-center flex flex-col gap-4 justify-center items-center">
          <div className="transition-all hover:scale-95">
            <motion.a
              variants={item}
              href="https://dinotrostore.com"
              target="_blank"
              className="bg-green-500 p-3 rounded-full font-single flex gap-2 items-center text-black px-10  text-lg"
            >
              TOP UP SEKARANG <IoRocketSharp />
            </motion.a>
          </div>
          <div className="transition-all hover:scale-95">
            <motion.a
              variants={item}
              href="https://dinotrostore.com/account/signup"
              target="_blank"
              className="text-green-500 font-manrope"
            >
              Gabung Member sekarang
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
