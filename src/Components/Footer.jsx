import React from "react";
import {
  FaDribbbleSquare,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import useScroller from "../hooks/useScroller";

const Footer = () => {
  const { scrollWithId } = useScroller();
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Contact Us</h1>
        <p className="py-4">Plan Better Do Better </p>
        {/* <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithub size={30} />
          <FaDribbbleSquare size={30} />
        </div> */}
      </div>
      <div className="col-span-3 flex justify-between flex-col md:flex-row">
        <div className="my-4 sm:my-0 text-center ">
          <h6 className="font-medium text-gray-400">General Manager</h6>
          <ul>
            <li className="py-2 text-sm">Name: Tarek Ahmed Msahel</li>
            <li className="py-2 text-sm">Mobile +974 55724419</li>
            <li className="py-2 text-sm">Email: info.heritage18@gmail.com</li>
          </ul>
        </div>
        <div className="my-4 sm:my-0 text-center ">
          <h6 className="font-medium text-gray-400">Managing Partner</h6>
          <ul>
            <li className="py-2 text-sm">Name: Md Omur Faruk</li>
            <li className="py-2 text-sm">Mobile +974 50946376</li>
            <li className="py-2 text-sm">Email: cma.qa2018@gmail.com</li>
          </ul>
        </div>
        <div className="my-4 sm:my-0 text-center">
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li
              className="py-2 text-sm cursor-pointer"
              onClick={() =>
                scrollWithId(document.getElementById("legalDocuments")?.id)
              }
            >
              Legal Documents
            </li>
            <li
              className="py-2 text-sm cursor-pointer"
              onClick={() =>
                scrollWithId(document.getElementById("companyStructure")?.id)
              }
            >
              Company Structure
            </li>

            <li
              className="py-2 text-sm cursor-pointer"
              onClick={() => scrollWithId(document.getElementById("nav")?.id)}
            >
              Back To Top
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
