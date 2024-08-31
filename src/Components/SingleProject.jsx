import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import useFireStore from "../hooks/useFireStore";
import useFirebase from "../hooks/useFirebase";
import { storage } from "../firebase/firebase.init";
import { ref, deleteObject } from "firebase/storage";
import "./SingleProject.css";

const SingleProject = ({ projectToDisplay }) => {
  const [showModal, setShowModal] = useState(false);
  const [vanish, setVanish] = useState(false);
  const imageRef = useRef(null);
  const modalRef = useRef(null);

  const { user } = useFirebase();
  const { deleteData } = useFireStore();

  const dummyImg =
    "https://firebasestorage.googleapis.com/v0/b/data-finance-yt.appspot.com/o/no-photos.png?alt=media&token=25e2d896-8805-4e92-92ce-08392bb9d890";

  const {
    client,
    id,
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

  // Function to delete the image from Cloud Storage before deleting the document
  const deleteImage = async () => {
    if (image) {
      // const storage = getStorage();
      if (image == dummyImg) {
        setVanish(true);
        return;
      }
      const imageRef = ref(storage, image); // Assuming the image URL points to the correct location in Storage

      try {
        await deleteObject(imageRef);
        console.log("Image deleted successfully from Storage");
        setVanish(true);
      } catch (error) {
        console.error("Error deleting image from Storage:", error);
        setVanish(false);
      }
    }
  };

  const handleDeleteProject = async (image, id) => {
    await deleteImage(image); // Call deleteImage before deleting the document
    await deleteData(id)
      .then((d) => console.log(d))
      .catch((err) => console.error(err)); // Delete the document
  };

  return (
    <motion.div
      className={`${
        vanish ? "hidden" : ""
      } w-full shadow-xl flex flex-col p-4 rounded-lg  duration-300 `}
      initial={{ scale: 1 }}
      whileInView={{
        scale: [2, 0.5, 1],
        transition: { duration: 0.8 },
      }}
    >
      <img
        ref={imageRef}
        src={image}
        alt="project image"
        onClick={handleImageClick}
        height={"360px"}
        width={"360px"}
        className="mx-auto"
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
          End Date: <span className="font-semibold">{endDate}</span>
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
          onClick={() => handleDeleteProject(image, id)}
          className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mt-3 mx-auto md:mx-0  py-3"
        >
          Delete
        </button>
      )}
    </motion.div>
  );
};

export default SingleProject;
