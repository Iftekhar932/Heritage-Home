import React from "react";
import Laptop from "../assets/laptop.jpg";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <motion.div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        initial={{ opacity: 0, translateX: "-100px" }}
        whileInView={{
          opacity: 1,
          translateX: "0px",
          transition: { duration: 1.5 },
        }}
      >
        <img src={Laptop} alt="/" />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold">MESSAGE FROM THE CHAIRMAN</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            About the flourishing economy
          </h1>
          <p src={Laptop} alt="/">
            The flourishing economy of our region presents exciting new
            prospects and supports boundless opportunities. We at HERITAGE HOME
            CONSTRUCTION measure our success from the degree of satisfaction we
            are providing to our colleagues, business partners and most
            importantly to our clients. While success and growth are our
            objective, our company’s main responsibility is the mutual respect
            for our clients by ensuring compliance to schedules and delivering
            the highest quality workmanship. We make every effort to be one of
            the most competitive and diverse organization in the construction,
            facility management & maintenance industry, through our efficiency
            and innovation in collaboration with our local and international
            associates.We are confident we can satisfy any construction and
            facility management requirement with utmost professionalism. Our
            long term strategy is focused in taking HERITAGE HOME CONSTRUCTION
            forward as a leading construction, facility management and
            maintenance company in the region, and move on purposefully towards
            a worldly presence. We are privileged to be in a position to
            contribute in Qatar’s continuous progress where we see immense
            opportunities and a promising future for all. ~{" "}
            <b>Waleed Mubarak al-Muhannadi</b>
          </p>
          {/* <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0  py-3">
            Get Started
          </button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;
