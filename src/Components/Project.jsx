import React from "react";
import img1 from "../assets/double.png";
const Project = ({ singleProject }) => {
  const { id, project, email, description } = singleProject;
  return (
    <section className="container mx-auto p-10 md:p-20 transform duration-500">
      <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-xl ">
        <img className="w-full md:w-40 h-auto" src={img1} alt="" />
        <div className="p-10 my-auto">
          <h1 className="text-2xl font-semibold text-gray-800">{`${id} ${project} ${email}`}</h1>
          <p className="text-base text-gray-400 mt-2">{description}</p>
        </div>
      </article>
    </section>
  );
};

export default Project;
