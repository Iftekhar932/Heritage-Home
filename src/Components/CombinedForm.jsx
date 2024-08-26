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
  const dropAreaRef = useRef(null);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const navigate = useNavigate();

  const handleOnKeyUp = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    info[fieldName] = fieldValue;
    setInfo(info);
    if (imageFile) {
      info["image"] = true;
      setInfo({ ...info });
    }
    if (info?.project && info?.description && info?.image) {
      setAllowSubmit(true);
      setErrorMsg(false);
    } else {
      setAllowSubmit(false);
      setErrorMsg(true);
    }
    console.log(info);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropAreaRef.current.classList.add("drag-over");
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropAreaRef.current.classList.remove("drag-over");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    setImageFile(droppedFile);
    dropAreaRef.current.classList.remove("drag-over");
  };
  /* 
  useEffect(() => {
    listAll(ref(storage, "files")).then((imgs) => {
      imgs?.items?.forEach((val) => {
        getDownloadURL(val.ref).then((url) => {
          console.log(url);
          setImgURL((data) => [...data, url]);
        });
      });
    });
  }, []); */
  /* 
  const handleClick = async () => {
    console.log("clicked handle click");
    if (!imageFile) return; // Prevent unnecessary upload attempts

    const imgRef = ref(storage, `files/${v4()}`);
    await uploadBytes(imgRef, imageFile);
    const url = await getDownloadURL(imgRef);

    info["image"] = url;
    setInfo({ ...info });
    setImgURL((data) => [...data, url]);
    console.log(imgURL);
  }; */

  /* const handleClick = () => {
    console.log("clicked handle click");
    console.log(info);

    const inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.accept = "image/*"; // Restrict file type if needed
    inputEl.onchange = (e) => {
      setImageFile(e.target.files[0]);
    };

    fileInputRef.current = inputEl; // Assign to ref

    fileInputRef.current.click(); // Trigger click on ref.current
  }; */

  const handleClick = async () => {
    console.log("clicked handle click");
    console.log(info);

    // Check if image is already selected, avoid unnecessary uploads
    if (!imageFile) {
      const inputEl = document.createElement("input");
      inputEl.type = "file";
      inputEl.accept = "image/*"; // Restrict file type if needed
      /*  inputEl.onclick = () => {
        info["image"] = true;
        setInfo({ ...info });
      }; */
      inputEl.onchange = (e) => {
        setImageFile(e.target.files[0]);
        info["image"] = true;
        setInfo({ ...info });
        setAllowSubmit(true);
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
      image: info.image,
    };

    createData(combinedData);
    setImageFile(null); // Reset image state after successful upload
    navigate("/");
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
          <div className="upload-container">
            <div
              ref={dropAreaRef}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className="drop-area"
            >
              <p className="text-center text-gray-500">
                Drag and drop your image here or
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 my-2 rounded-md cursor-pointer"
                onClick={handleClick}
              >
                Browse Files
              </button>
            </div>
            {imageFile && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded Image"
                  className="w-full h-auto max-h-400"
                />
              </div>
            )}
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
