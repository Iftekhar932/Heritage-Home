import React, { useState, useEffect } from "react";
import useFirebase from "../hooks/useFirebase";
import Project from "./Project";
import { useNavigate } from "react-router-dom";
import useFireStore from "../hooks/useFireStore";
import LoadingAnimation from "./LoadingAnimation"; // Assuming you have a Spinner component

import SingleProject from "./SingleProject";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useFirebase();
  const { readAllData } = useFireStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email === false || null) {
      navigate("/");
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await readAllData();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="w-full mx-auto py-[10rem] px-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {projects?.map((project, i) => (
            <SingleProject projectToDisplay={project} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
