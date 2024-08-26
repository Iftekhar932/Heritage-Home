import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import img1 from "../assets/double.png";
import { motion } from "framer-motion";

/* image fetch kore ekhane jei object theke details antesi shekhane  IMAGE FETCH KORE AINE OBJECT A RAKHTE HOBE
ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR */

const Project = ({ singleProject }) => {
  const { id, project, email, description, image } = singleProject;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      whileHover={{ scale: 1.05, duration: 1 }}
      className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-white"
    >
      <div className="text-center">
        <img
          className="mx-auto w-full rounded-full hover:rounded-none cursor-pointer scale-1 hover:scale-150 hover:sm:scale-125 duration-500"
          src={image?.toString()}
          alt="user-avatar"
          // whileTap={{ scale: 1.5, duration: 500 }}
          // onClick={() => setZoom(!zoom)}
        />
        <h3 className="mt-6 text-2xl font-semibold ">{project}</h3>
        <h5 className="mt-[5px] text-sm font-semibold text-green">
          {description}
        </h5>
        {/* <p className="mt-[26px] text-sm font-normal ">
          "Front-end developer and avid reader."
        </p> */}
      </div>
    </motion.div>
  );
};

export default Project;
