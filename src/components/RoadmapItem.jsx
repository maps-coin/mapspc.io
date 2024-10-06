import React from "react";
import { motion } from "framer-motion";

const RoadMapItem = ({ stage, details, isEven }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`roadmap-item ${
        isEven ? "roadmap-item--even" : "roadmap-item--odd"
      }`}
    >
      <div className='roadmap-item__marker'></div>
      <div className='roadmap-item__content'>
        <h3 className='roadmap-item__stage bg-gradient-to-br from-pink-600 via-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tight font-bold'>
          {stage}
        </h3>
        <ul className='roadmap-item__details flex flex-col gap-1'>
          {details.map((detail, index) => (
            <li
              key={index}
              className='roadmap-item__detail text-sm text-neutral-400 list-disc list-inside'
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default RoadMapItem;
