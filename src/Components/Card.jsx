import React from "react";
import { motion } from "framer-motion";

const Card = ({ doc }) => {
  return (
    <motion.div
      className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <img className="mx-auto" src={doc} alt="" />
    </motion.div>
  );
};

export default Card;
