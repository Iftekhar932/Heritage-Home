import React, { useState, useEffect } from "react";
import Project from "./Project";
import useFireStore from "../hooks/useFireStore";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { readAllData } = useFireStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readAllData();

        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {projects?.map((singleProject) => {
        return (
          <Project key={singleProject?.id} singleProject={singleProject} />
        );
      })}
    </div>
  );
};

export default Projects;
