import React from "react";
import SingleProject from "./SingleProject";
import LoadingAnimation from "./LoadingAnimation";

import project_photo1 from "../assets/project_photos/project_photo (1).jpeg";
import project_photo2 from "../assets/project_photos/project_photo (2).jpeg";
import project_photo3 from "../assets/project_photos/project_photo (3).jpeg";
import project_photo4 from "../assets/project_photos/project_photo (4).jpeg";
import project_photo5 from "../assets/project_photos/project_photo (5).jpeg";
import project_photo6 from "../assets/project_photos/project_photo (6).jpeg";

const AboutUs = () => {
  const images = [
    project_photo1,
    project_photo2,
    project_photo3,
    project_photo4,
    project_photo5,
    project_photo6,
  ];
  return (
    <div className="w-full mx-auto py-[10rem] px-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
      {images.map((img, i) => (
        <SingleProject img={img} key={i} />
      ))}
    </div>
  );
};

export default AboutUs;
