import React, { useState, useRef, useEffect } from "react";
import { getDownloadURL, uploadBytes, ref, listAll } from "firebase/storage";
import { v4 } from "uuid";

import { storage } from "../firebase/firebase.init";
import useFireStore from "../hooks/useFireStore";
import { useNavigate } from "react-router-dom";

const CombinedForm = () => {
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [info, setInfo] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imgURL, setImgURL] = useState([]);
  const { createData } = useFireStore();
  const dropAreaRef = useRef(null); // Commented out (unused)
  const fileInputRef = useRef(null); // Create a ref for the file input

  const navigate = useNavigate();

  const handleOnKeyUp = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    info[fieldName] = fieldValue;
    setInfo({ ...info });

    // Check if all required fields are filled
    const requiredFields = [
      "project",
      "description",
      "mainContractor",
      "location",
      "client",
      "startDate",
      "endDate",
      "value",
    ];
    const isAllFilled = requiredFields.every((field) => info[field]);

    if (isAllFilled && imageFile) {
      setAllowSubmit(true);
      setErrorMsg(false);
    } else {
      setAllowSubmit(false);
      setErrorMsg(true);
    }
  };

  // Remove drag and drop functionality (commented out)
  // ... (remove drag and drop code)

  const handleClick = async () => {
    console.log("clicked handle click");
    console.log(info);

    // Check if image is already selected, avoid unnecessary uploads
    if (!imageFile) {
      const inputEl = document.createElement("input");
      inputEl.type = "file";
      inputEl.accept = "image/*"; // Restrict file type if needed
      inputEl.onchange = (e) => {
        setImageFile(e.target.files[0]);
      };

      fileInputRef.current = inputEl; // Assign to ref
      fileInputRef.current.click(); // Trigger click on ref.current
    } else {
      // Image already selected, proceed with upload
      const imgRef = ref(storage, `files/${v4()}`);
      await uploadBytes(imgRef, imageFile);
      const url = await getDownloadURL(imgRef);

      info["image"] = url;
      setInfo({ ...info });
      setImgURL((data) => [...data, url]);
      console.log(imgURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (allowSubmit === false) {
      return;
    }

    await handleClick(); // Ensure image upload is complete

    const combinedData = {
      project: info.project,
      description: info.description,
      mainContractor: info.mainContractor,
      location: info.location,
      client: info.client,
      startDate: info.startDate,
      endDate: info.endDate,
      value: info.value,
      image: info.image,
    };

    createData(combinedData);
    setImageFile(null); // Reset image state after successful upload
    navigate("/");
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);

    // Check if all required fields are filled and an image file is selected
    const requiredFields = [
      "project",
      "description",
      "mainContractor",
      "location",
      "client",
      "startDate",
      "endDate",
      "value",
    ];
    const isAllFilled = requiredFields.every((field) => info[field]);

    if (isAllFilled && selectedFile) {
      setAllowSubmit(true);
      setErrorMsg(false);
    } else {
      setAllowSubmit(false);
      setErrorMsg(true);
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="p-4 mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="project"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Project Name
            </label>
            <input
              type="text"
              name="project"
              onKeyUp={handleOnKeyUp}
              id="project"
              placeholder="Project Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              onKeyUp={handleOnKeyUp}
              id="description"
              placeholder="Enter your Description"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="mainContractor"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Main Contractor
            </label>
            <input
              type="text"
              name="mainContractor"
              onKeyUp={handleOnKeyUp}
              id="mainContractor"
              placeholder="Enter Main Contractor"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="location"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              onKeyUp={handleOnKeyUp}
              id="location"
              placeholder="Enter Location"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="client"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Client
            </label>
            <input
              type="text"
              name="client"
              onKeyUp={handleOnKeyUp}
              id="client"
              placeholder="Enter Client"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="startDate"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              onKeyUp={handleOnKeyUp}
              id="startDate"
              placeholder="Enter Start Date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="endDate"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              onKeyUp={handleOnKeyUp}
              id="endDate"
              placeholder="Enter End Date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="value"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Value
            </label>
            <input
              type="text"
              name="value"
              onKeyUp={handleOnKeyUp}
              id="value"
              placeholder="Enter Value"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="image"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Image (drag and drop in the box or browse with the button)
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              id="image"
              accept="image/*"
              className="w-full rounded-md border border-dashed border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <button
              className={`${
                allowSubmit === false && "bg-gray-500  hover:bg-gray-500"
              } 
          w-full rounded-md bg-[hsl(243,83%,67%)] hover:bg-[hsl(243,83%,57%)] py-3 px-8 text-center text-base font-semibold text-white outline-none`}
              // disabled={allowSubmit == false}
            >
              Submit
            </button>
            <p
              className={`${
                errorMsg && "text-red-500 mt-2 font-semibold"
              } hidden`}
            >
              Fulfill the form
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CombinedForm;
