import React from "react";
import { motion } from "framer-motion";
import structureImg from "../assets/documents/Screenshot 2024-08-24 130621.png";
import doc1 from "../assets/documents/Screenshot 2024-08-24 103910.png";
import doc2 from "../assets/documents/Screenshot 2024-08-24 104003.png";
import doc3 from "../assets/documents/Screenshot 2024-08-24 104049.png";
import doc4 from "../assets/documents/Screenshot 2024-08-24 104123.png";
import doc5 from "../assets/documents/Screenshot 2024-08-24 104151.png";
import Card from "./Card";

// * legal documents ekhane boshbe
const Cards = () => {
  const documents = [doc1, doc2, doc3, doc4, doc5];
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <h1 className="text-center text-3xl mb-4">
        Legal Documents & Structures{" "}
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {documents.map((doc, i) => (
          <Card doc={doc} key={i} />
        ))}
      </div>
      <motion.div
        className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <img className="mx-auto" src={structureImg} alt="" />
      </motion.div>
    </div>
  );
};

export default Cards;
