import React from "react";
import useFirebase from "../hooks/useFirebase";

const LoginPage = () => {
  const [credentials, setCredentials] = React.useState({});
  // const [pwd,setPWD] = React.useState("")
  const { emailSignup, emailSignIn } = useFirebase();

  const handleOnBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    credentials[fieldName] = fieldValue;
    setCredentials(credentials);
    console.log("🚀 ~ handleOnBlur ~ credentials:", credentials);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // emailSignup(credentials?.email, credentials?.password);
    emailSignIn(credentials?.email, credentials?.password);
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
              type="email"
              name="email"
              onKeyUp={handleOnBlur}
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
              type="password"
              name="password"
              onKeyUp={handleOnBlur}
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

/* 
import React, { useState } from "react";
import useFirebase from "../hooks/useFirebase";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({});
  const { emailSignup, emailSignIn } = useFirebase();

  const handleOnBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setCredentials({ ...credentials, [fieldName]: fieldValue }); // Update state immutably
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = credentials; // Destructure credentials
    const emailError = validateEmail(email); // Check email validity
    const passwordError = validatePassword(password); // Check password validity

    if (emailError || passwordError) {
      // Display error messages
      console.error("Email Error:", emailError);
      console.error("Password Error:", passwordError);
      return; // Prevent form submission with errors
    }

    // Submit form data if both email and password are valid
    emailSignIn(email, password);
  };
  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/; // Improved email regex
    if (!emailRegex.test(email)) {
      return "Invalid email format. Please enter a valid email address.";
    }
    return null; // No error
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Improved password complexity regex
    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters and include a lowercase letter, an uppercase letter, a number, and a special character.";
    }
    return null; // No error
  };

  return (
    <div className="flex items-center justify-center p-12">
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
              type="email"
              name="email"
              onKeyUp={handleOnBlur}
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
              type="password"
              name="password"
              onKeyUp={handleOnBlur}
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
 */
