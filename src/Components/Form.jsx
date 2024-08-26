import React, { useState } from "react";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../firebase/firebase.init";
import useFireStore from "../hooks/useFireStore";
import UploadImg from "./UploadImg";

const Form = () => {
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [info, setInfo] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imgURL, setImgURL] = useState([]);
  const { createData } = useFireStore();

  // data collection and setting to state
  const handleOnKeyUp = (e) => {
    console.log(info);
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    info[fieldName] = fieldValue;
    setInfo(info);
    if (info?.project && info?.description && info?.image) {
      setAllowSubmit(true);
      setErrorMsg(false);
    } else {
      setAllowSubmit(false);
      setErrorMsg(true);
    }
  };

  // ⬇️also triggered when clicked
  const handleUpload = async () => {
    console.log("clicked handle upload");

    const imgRef = ref(storage, `files/${v4()}`);
    await uploadBytes(imgRef, imageFile).then((val) => {
      getDownloadURL(val.ref).then((url) => {
        // info["image"] = url;
        setInfo({ image: url, ...info });
        setImgURL((data) => [...data, url]);
      });
    });
    setImageFile(null); // Reset state after successful upload
  };

  // ⬇️upload data to fireStore database
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (allowSubmit === false) {
      return;
    }
    await handleUpload();

    // Call handleUpload and wait for it to finish

    // Now you can safely call createData because info.image is set
    createData(info);
  };

  return (
    <>
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
            <UploadImg
              allowSubmit={allowSubmit}
              setAllowSubmit={setAllowSubmit}
              info={info}
              setInfo={setInfo}
              imgURL={imgURL}
              setImgURL={setImgURL}
              handleUpload={handleUpload}
              imageFile={imageFile}
              setImageFile={setImageFile}
            />
            <div>
              <button
                className={`${
                  allowSubmit == false && "bg-gray-500  hover:bg-gray-500"
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
    </>
  );
};

export default Form;
