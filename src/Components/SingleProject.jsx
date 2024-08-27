import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./SingleProject.css";

const SingleProject = ({ projectToDisplay }) => {
  const [showModal, setShowModal] = useState(false);
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
    <div>
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
    </div>
  );
};

export default SingleProject;
