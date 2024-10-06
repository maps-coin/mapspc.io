import RoadmapItem from "./RoadmapItem";
import { roadmapData } from "./RoadmapData";
import { motion } from "framer-motion";

const RoadmapCode = () => {
  return (
    <div id='roadmap' className='container'>
      <section className='roadmap'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className='my-20 text-center font-semibold text-4xl'
        >
          The Path to Success
        </motion.h2>

        <div className='roadmap__timeline'>
          <div className='roadmap__line'></div>

          {roadmapData.map((item, index) => (
            <RoadmapItem
              key={item.id}
              stage={item.stage}
              details={item.details}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoadmapCode;
