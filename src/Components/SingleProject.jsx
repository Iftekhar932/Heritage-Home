import React from "react";
import { motion } from "framer-motion";

const SingleProject = ({ img }) => {
  const [zoom, setZoom] = React.useState(false);
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
          src={img}
          alt="user-avatar"
          // whileTap={{ scale: 1.5, duration: 500 }}
          // onClick={() => setZoom(!zoom)}
        />
        <h3 className="mt-6 text-2xl font-semibold ">Jessica Randall</h3>
        <h5 className="mt-[5px] text-sm font-semibold text-green">
          London, United Kingdom
        </h5>
        <p className="mt-[26px] text-sm font-normal ">
          "Front-end developer and avid reader."
        </p>
      </div>
    </motion.div>
  );
};

export default SingleProject;

/* 

import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const AboutUs = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100  ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">single User</h2>
          <p className="text-4xl text-center font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] rounded-md font-medium w-[200px] my-6 px-6 py-3 mx-auto">
            Start Trial
          </button>
        </div>

        
    </div>
  );
};




 */
