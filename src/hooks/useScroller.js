import React from "react";

const useScroller = () => {
  const scrollWithId = (elementID) => {
    const element = document.getElementById(elementID);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { scrollWithId };
};

export default useScroller;

