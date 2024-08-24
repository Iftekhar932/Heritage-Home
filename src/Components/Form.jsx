import React from "react";
import useFireStore from "../hooks/useFireStore";
import UploadImg from "./UploadImg";

const Form = () => {
  const [info, setInfo] = React.useState({});

  const { createData } = useFireStore();

  const handleOnBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    info[fieldName] = fieldValue;
    setInfo(info);
    console.log("15 form.jsx", info);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createData(info);
  };

  return (
    <>
      <div className="flex items-center justify-center p-12">
        {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
        <div className="p-4 mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Project Name
              </label>
              <input
                type="text"
                name="project"
                onBlur={handleOnBlur}
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                onBlur={handleOnBlur}
                id="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onBlur={handleOnBlur}
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <UploadImg />
            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
