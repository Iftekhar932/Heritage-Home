import React from "react";
import Project from "./Project";
import useFireStore from "../hooks/useFireStore";

const Projects = () => {
  const { readAllData } = useFireStore();
  const projectsData = readAllData();
  console.log("🚀 ~ Projects ~ projectsData:", projectsData);

  return (
    <div>
      <Project />
    </div>
  );
};

export default Projects;
