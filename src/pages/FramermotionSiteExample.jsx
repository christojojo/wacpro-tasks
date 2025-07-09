import { motion } from "framer-motion";
import React from "react";

const FramermotionSiteExample = () => {
  return (
  <>
  qwdwed

    <div className="">
      {/* Header with simple animation */}
      <motion.header
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Welcome to Framer Motion Site</h1>
      </motion.header>

      {/* Animated Button */}
      <motion.button
        className="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, backgroundColor: "#D4E6F1" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Click Me
      </motion.button>

      {/* Content Section with staggered items */}
      <motion.section
        className="content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.2,
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.div
          className="card"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h2>Card 1</h2>
          <p>This is some content in card 1.</p>
        </motion.div>
        <motion.div
          className="card"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h2>Card 2</h2>
          <p>This is some content in card 2.</p>
        </motion.div>
        <motion.div
          className="card"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h2>Card 3</h2>
          <p>This is some content in card 3.</p>
        </motion.div>
      </motion.section>
    </div>
  </>
  );
};

export default FramermotionSiteExample;
