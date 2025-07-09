import React, { useState } from "react";
import { motion } from "framer-motion";

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCards, setShowCards] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleStagger = () => {
    setShowCards(!showCards);
  };

  const cardVariants = {
    Hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen bg-gray-100 pt-20 flex flex-col gap-10">
      <div>
        <motion.button
          className="p-2 bg-green-600 text-white font-semibold rounded-lg"
          onClick={toggleMenu}
          whileHover={{ backgroundColor: "green" }}
          whileTap={{ backgroundColor: "darkgreen" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Offcanvas
        </motion.button>
      </div>
      <motion.div
        className="fixed top-0 right-0 h-full w-[45%] bg-blue-300 text-white p-6"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <ul className="space-y-4">
          <li>
            <a href="#home" className="text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-lg">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg">
              Contact
            </a>
          </li>
        </ul>
      </motion.div>

      <div>
        <motion.button
          className="p-2 bg-green-600 text-white font-semibold rounded-lg mb-10"
          onClick={toggleStagger} // Toggle stagger on button click
          whileHover={{ backgroundColor: "green" }}
          whileTap={{ backgroundColor: "darkgreen" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Toggle Cards
        </motion.button>
        {showCards && (
          <motion.div
            className="flex space-x-6"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <motion.div
              className="w-64 h-40 bg-blue-600 rounded-lg"
              variants={itemVariants}
            />
            <motion.div
              className="w-64 h-40 bg-blue-600 rounded-lg"
              variants={itemVariants}
            />
            <motion.div
              className="w-64 h-40 bg-blue-600 rounded-lg"
              variants={itemVariants}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Offcanvas;
