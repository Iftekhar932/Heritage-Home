import React, { useState, useRef, useEffect } from "react";
import { storage } from "../firebase/firebase.init";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "./UploadImg.css";

const UploadImg = ({
  allowSubmit,
  setAllowSubmit,
  info,
  setInfo,
  handleUpload,
  imageFile,
  setImageFile,
}) => {
  // const [imageFile, setImageFile] = useState(null);
  const [imgURL, setImgURL] = useState([]);
  const dropAreaRef = useRef(null);

  const handleDragOver = (event) => {
    console.log("dragover");
    event.preventDefault();
    event.stopPropagation();
    dropAreaRef.current.classList.add("drag-over"); // Add visual feedback
  };

  const handleDragLeave = (event) => {
    console.log("dragleave");
    event.preventDefault();
    event.stopPropagation();
    dropAreaRef.current.classList.remove("drag-over"); // Remove visual feedback
  };

  const handleDrop = (event) => {
    console.log("dragdrop");

    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    setImageFile(droppedFile);
    dropAreaRef.current.classList.remove("drag-over"); // Remove visual feedback
  };
  useEffect(() => {
    listAll(ref(storage, "files")).then((imgs) => {
      imgs?.items?.forEach((val) => {
        getDownloadURL(val).then((url) => {
          console.log(url);
          setImgURL((data) => [...data, url]);
        });
      });
    });
  }, []);

  useEffect(() => {
    const dropArea = dropAreaRef.current;

    const handleDrag = (event) => {
      handleDragOver(event);
    };

    const handleLeave = (event) => {
      handleDragLeave(event);
    };

    const handleDropInternal = (event) => {
      console.log("clicked handleDropInternal");
      handleDrop(event);
    };

    // Add event listeners only when the component mounts and remove them on unmount
    dropArea.addEventListener("dragover", handleDrag);
    dropArea.addEventListener("dragleave", handleLeave);
    dropArea.addEventListener("drop", handleDropInternal);

    return () => {
      dropArea.removeEventListener("dragover", handleDrag);
      dropArea.removeEventListener("dragleave", handleLeave);
      dropArea.removeEventListener("drop", handleDropInternal);
    };
  }, []);
  /* 
  // also triggered when clicked
  const handleUpload = async () => {
    console.log("clicked handle upload");

    const imgRef = ref(storage, `files/${v4()}`);
    await uploadBytes(imgRef, imageFile).then((val) => {
      getDownloadURL(val.ref).then((url) => {
        // console.log("🚀 ~ getDownloadURL ~ val.ref:", val.ref, "url", url);
        info["image"] = url;
        setInfo(info);
        setImgURL((data) => [...data, url]);
      });
    });
    setImageFile(null); // Reset state after successful upload
  };
 */

  //⬇️ image drag and drop function
  const handleClick = () => {
    console.log("clicked handle click");
    console.log(info);
    // Fallback for non-drag-and-drop upload
    const inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.accept = "image/*"; // Restrict file type if needed
    inputEl.onclick = () => setInfo({ image: true, ...info });
    inputEl.onchange = (e) => {
      setImageFile(e.target.files[0]);
    };

    inputEl.click(); // Simulate click event to open file selection dialog
  };

  return (
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

      {/* {imgURL.map((d, i) => {
        return <img src={d} height="200px" key={i} />;
      })} */}
    </div>
  );
};

export default UploadImg;
