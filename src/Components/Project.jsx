import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import img1 from "../assets/double.png";

/* image fetch kore ekhane jei object theke details antesi shekhane  IMAGE FETCH KORE AINE OBJECT A RAKHTE HOBE
ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR */

const Project = ({ singleProject }) => {
  const { id, project, email, description } = singleProject;
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:gd-cols-3 gap-8">
        {/* Single Card */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">{id}</h2>
          <p className="text-4xl text-center font-bold">{project}</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">{email}</p>
            <p className="py-2 border-b mx-8">{description}</p>
            {/* <p className="py-2 border-b mx-8"></p> */}
          </div>
          <button className="text-black bg-[#00df9a] rounded-md font-medium w-[200px] my-6 px-6 py-3 mx-auto">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
