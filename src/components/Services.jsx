// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import games from "../assets/games/games";
import payment from "../assets/payment/payment";
import segment from "../assets/segment/layanan.webp";
import { MdOutlineGames } from "react-icons/md";
import { motion } from "framer-motion";

const Services = () => {
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
      name="services"
      className="services min-h-screen transition-all py-[5vh] pb-[10vh]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className=" container mx-auto px-4 flex flex-col justify-center items-center gap-4"
      >
        <div className="hover:scale-105 transition-all hover:-rotate-3 aspect-square h-[250px] lg:h-[350px] -m-4">
          <motion.img variants={item} src={segment} alt="layanan" />
        </div>
        <div className="transition-all hover:scale-105 cursor-default">
          <motion.h1
            variants={item}
            className="font-single text-2xl text-white drop-shadow-lg"
          >
            PILIHAN <span className="text-green-500">GAME & VOUCHER</span>
          </motion.h1>
        </div>
        <motion.div
          variants={item}
          className="p-4 px-6 bg-[#0e101c] hover:bg-[#090b13] transition-all cursor-default container mx-auto max-w-screen-lg rounded-2xl"
        >
          <Swiper
            className="w-full p-4 max-w-screen-lg"
            spaceBetween={20}
            slidesPerView={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {games.map(function (datas, i) {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={datas}
                    alt="games"
                    className="rounded-lg shadow-md hover:scale-105 transition-all "
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <p className="text-white lg:text-lg font-manrope text-center py-4 px-6">
            Banyak pilihan top up game dan voucher, mulai dari game PC sampai
            mobile game. Tersedia juga voucher seperti steam wallet dan juga
            vidio.com
          </p>
        </motion.div>
        <motion.div className="self-center" variants={item}>
          <MdOutlineGames className="text-white dark:text-black text-xl my-10 animate-pulse" />
        </motion.div>
        <div className="transition-all hover:scale-105 cursor-default">
          <motion.h1
            variants={item}
            className="font-single text-2xl text-white drop-shadow-lg"
          >
            PILIHAN <span className="text-green-500">METODE PEMBAYARAN</span>
          </motion.h1>
        </div>
        <motion.div
          variants={item}
          className="p-4 px-6 bg-[#0e101c] hover:bg-[#090b13] transition-all cursor-default container mx-auto max-w-screen-lg rounded-2xl"
        >
          <Swiper
            className="w-full p-4 max-w-screen-lg"
            spaceBetween={20}
            slidesPerView={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {payment.map(function (datas, i) {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={datas}
                    alt="payment"
                    className="rounded-lg shadow-md hover:scale-105 transition-all "
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <p className="text-white lg:text-lg font-manrope text-center py-4 px-6">
            Banyak pilihan metode pembayaran. Mulai dari Bank, gerai market,
            sampai virtual wallet, guna memudahkan proses transaksi.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Services;
