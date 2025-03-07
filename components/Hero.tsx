"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Spotlight } from "./ui/spotlight-new"
import {TextGenerateEffect} from "./ui/text-generate-effect"


export default function () {
  return (
    <div >

    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.5] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Spotlight/>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
</div>

    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h4 className="uppercase tracking-widest  text-center text-3xl  text-blue-100 max-w-80">
              WELCOME
            </h4>
            <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Hey, I’m Sougata Saha 👋"

            />
            <p
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
            > Passionate about creating seamless digital experiences through clean and efficient code.</p>
          </div>
        </div>
 
      </motion.h1>
    </HeroHighlight>
    </div>




</div>
  )
}
