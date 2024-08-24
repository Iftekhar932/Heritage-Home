import React from "react";
import useFirebase from "../hooks/useFirebase";

// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED
// ! NOTE TESTED

const LoginPage = () => {
  const [credentials, setCredentials] = React.useState({});
  // const [pwd,setPWD] = React.useState("")
  const { emailSignup, emailSignIn } = useFirebase();

  const handleOnBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    credentials[fieldName] = fieldValue;
    setCredentials(credentials);
    console.log("16 loginpage.jsx", credentials);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailSignup(credentials?.email, credentials?.password);
  };

  return (
    <div className="flex items-center justify-center p-12">
      {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
      <div className="p-4 mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              onBlur={handleOnBlur}
              id="name"
              placeholder="Email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <input
              type="text"
              name="password"
              onBlur={handleOnBlur}
              id="phone"
              placeholder="Enter your password"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
