import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";



function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden tracking-wide leading-tight m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="font-semibold uppercase text-4xl whitespace-nowrap flex flex-nowrap w-full"
        style={{ x }}
        initial={{ x: '-100%' }} // Start offscreen to the left
      >
        <span className="font-customfont text-white block">{children} </span>
        <span className="font-customfont text-white block">{children} </span>
        <span className="font-customfont text-white block">{children} </span>
        <span className="font-customfont text-white block">{children} </span>
        <span className="font-customfont text-white block">{children} </span>
        <span className="font-customfont text-white block">{children} </span>
        <span className="font-customfont text-white block">{children} </span>
        <span className="font-customfont text-white block">{children} </span>
      </motion.div>
    </div>
  );
}

export default function ScrollVelocity() {
  return (
    <section className="mt-16">
      <ParallaxText baseVelocity={-5}>HacktoberFest 2023 </ParallaxText>
      <ParallaxText baseVelocity={5}>FIRST CONTRIBUTION </ParallaxText>
    </section>
  );
}
