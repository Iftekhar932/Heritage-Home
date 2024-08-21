import React from "react";
import { storage } from "../firebase/firebase.init";
import { ref, uploadBytes } from "firebase/storage";
// import {v4} from "uuid"

// https://youtu.be/5986IgwaVKE?t=339
const UploadImg = () => {
  const [img, setImg] = React.useState("");
  const handleClick = () => {
    const imgRef = ref(storage, `files/${v4()}`);
    uploadBytes(imgRef, img);
  };
  return (
    <div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>
    </div>
  );
};

export default UploadImg;
