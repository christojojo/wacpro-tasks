import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animation2 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const containerVariants = {
    hidden: { Opacity: 0 },
    visible: {
      Opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 w-full">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-3xl font-bold mb-4" variants={itemVariants}>
          Advanced Framer Motion
        </motion.h1>
        <motion.p className="mb-4" variants={itemVariants}>
          This example demonstrates staggered animations and AnimatePresence.
        </motion.p>
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          Toggle Element
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="p-4 bg-green-200 rounded absolute top-[65%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring" }}
          >
            This element can be animated in and out!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Animation2;
