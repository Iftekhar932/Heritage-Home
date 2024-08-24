import React, { useState, useEffect } from "react";
import Project from "./Project";
import useFireStore from "../hooks/useFireStore";
import useFirebase from "../hooks/useFirebase";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation"; // Assuming you have a Spinner component

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
  }, [user, readAllData, navigate]);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          {projects?.map((singleProject) => {
            return (
              <Project key={singleProject?.id} singleProject={singleProject} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
