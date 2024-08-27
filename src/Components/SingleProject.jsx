import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./SingleProject.css";
import useFireStore from "../hooks/useFireStore";
import useFirebase from "../hooks/useFirebase";

const SingleProject = ({ projectToDisplay }) => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useFirebase();
  const { deleteData } = useFireStore();
  const imageRef = useRef(null);
  const modalRef = useRef(null);

  const {
    client,
    description,
    endDate,
    image,
    location,
    mainContractor,
    project,
    startDate,
    value,
  } = projectToDisplay;

  const handleImageClick = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  duration-300">
      <img
        ref={imageRef}
        src={image}
        alt="project image"
        onClick={handleImageClick}
      />

      {showModal && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <img src={image} alt="project image" />
            <button
              onClick={handleCloseModal}
              className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0  py-3"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div>
        <h2>
          {" "}
          <span className="font-bold">Project: </span> {project}
        </h2>
        <p className="font-bold">
          Info: <span className="font-semibold">{description}</span>
        </p>
        <p className="font-bold">
          Start Date: <span className="font-semibold">{startDate}</span>
        </p>
        <p className="font-bold">
          Location: <span className="font-semibold">{location}</span>
        </p>
        <p className="font-bold">
          Main Contractor:{" "}
          <span className="font-semibold">{mainContractor}</span>
        </p>
        <p className="font-bold">
          Client: <span className="font-semibold">{client}</span>
        </p>
        <p className="font-bold">
          Value: <span className="font-semibold">{value}</span>
        </p>
      </div>
      {user?.email && (
        <button
          onClick={() => deleteData(project)}
          className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mt-3 mx-auto md:mx-0  py-3"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default SingleProject;
