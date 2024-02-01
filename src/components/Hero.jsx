import Parallax from "parallax-js";
import { useEffect, useRef } from "react";

import logo from "../assets/parallax/logo.webp";
import fg from "../assets/parallax/foreground1.webp";
import fgbg from "../assets/parallax/fgbg.webp";
import angela from "../assets/parallax/angela.webp";
import jett from "../assets/parallax/jett.webp";
import cokro from "../assets/parallax/cokro.webp";
import nape from "../assets/parallax/nape.webp";
import joko from "../assets/parallax/joko.webp";
import awan from "../assets/parallax/awan.webp";
import cepat from "../assets/parallax/cepat.webp";
import dino from "../assets/parallax/dino.webp";
import dstr from "../assets/parallax/dstr.webp";

const Hero = () => {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current);
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, []);
  return (
    <section
      name="hero"
      ref={sceneEl}
      id="scene"
      className={`flex items-center justify-center w-full h-screen bg-no-repeat bg-cover bg-center overflow-hidden`}
    >
      <img
        draggable="false"
        src={logo}
        className="h-[80px] lg:h-[130px] z-10 brightness-100 dark:brightness-0 transition-all"
        alt="logo"
      />
      <div className="w-full h-full bg-white/0 dark:bg-white/25 transition-all z-[9]"></div>
      <div data-depth="-0.1" className="relative h-full w-full">
        <img
          className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 object-cover"
          src={fgbg}
          alt="fgbg"
        />
      </div>
      <div data-depth="0.1" className="relative h-full w-full">
        <img
          className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 object-cover"
          src={fg}
          alt="fg"
        />
      </div>
      <div data-depth="0.25" className="relative h-full w-full">
        <img
          className="absolute -bottom-10 right-20"
          src={angela}
          alt="angela"
        />
        <img className="absolute -top-20 left-20" src={jett} alt="jett" />
        <img className="absolute -top-20 right-20" src={cokro} alt="cokro" />
        <img className="absolute -bottom-20 left-10" src={nape} alt="nape" />
        <img className="absolute -top-[20%] left-[30%]" src={joko} alt="joko" />
      </div>
      <div data-depth="0.5" className="relative h-full w-full">
        <img className="absolute top-[30%] left-[2%]" src={awan} alt="awan" />
        <img
          className="absolute top-[10%] right-[5%]"
          src={cepat}
          alt="cepat"
        />
        <img
          className="absolute -top-[10%] right-[30%]"
          src={dino}
          alt="dino"
        />
        <img
          className="absolute bottom-[10%] left-[30%]"
          src={dstr}
          alt="dstr"
        />
      </div>
    </section>
  );
};

export default Hero;
