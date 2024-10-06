import React from "react";
// import bitcoin from '../assets/bitcoin.png';
// import ethereum from "../assets/ethereum.png";
// import globe from "../assets/globe.png";
// import robot from "../assets/robot_maps.png";
import man from "../assets/globe_maps.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Hero() {
  return (
    <div className='border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h2
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-3xl text-center lg:text-left font-bold tracking-tight lg:mt-16 lg:text-6xl '
            >
              Join now, elevate your rank, and get ready to earn{" "}
              <span className='maps leading-normal bg-gradient-to-br from-pink-600 via-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight'>
                $MAPS
              </span>{" "}
              Points!
            </motion.h2>
            <motion.a
              variants={container(0.3)}
              initial='hidden'
              animate='visible'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='bg-gradient-to-br border text-black hover:text-white font-bold from-pink-600 via-blue-400 to-purple-600 hover:bg-gradient-to-tl py-3 px-10 rounded-full mb-9 hover:bg-none hover:border'
              href='#roadmap'
            >
              Go to Roadmap
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex justify-center'>
            <motion.img
              variants={iconVariants(1.5)}
              initial='initial'
              animate='animate'
              style={{ width: "100%" }}
              src={man}
              alt='Robot'
              className='hero-image rounded-lg lg:visible'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
