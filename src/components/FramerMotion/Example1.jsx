import React from "react";
import { delay, motion } from "framer-motion";
import { div } from "framer-motion/client";

const Example1 = () => {
  return (
    <div className="mt-20 ml-20 flex gap-6 flex-col">
      <div>
        <motion.div
          className="text-[20px] font-semibold text-black text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Framer Motion Animation
        </motion.div>
      </div>
      <div className="flex gap-12">
        <motion.div
          className="w-32 h-32 rounded-full bg-blue-600"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.div
          className="size-32 rounded-full bg-red-600"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
      <motion.div
      className="text-[25px] font-bold pt-10"
        animate={{ x: 300 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Framer Animation 
      </motion.div>
    </div>
  );
};

export default Example1;
