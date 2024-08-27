import React, { useState } from "react";
import useFirebase from "../hooks/useFirebase";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});
  const { user, emailSignup, sendResetEmail } = useFirebase();

  // Password strength checker function
  const checkPasswordStrength = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      password
    );
    const isLongEnough = password.length >= 8;

    const meetsRequirements =
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar &&
      isLongEnough;
    return meetsRequirements;
  };
  const handleOnBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [fieldName]: fieldValue,
    }));

    if (fieldName === "password") {
      const isStrong = checkPasswordStrength(fieldValue);
      if (!isStrong) {
        setErrors({
          password:
            "Password must be at least 8 characters with at least one uppercase, lowercase, number, and special character.",
        });
      } else {
        setErrors({ password: null }); // Clear password error if strong
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate password strength before submission
    if (!checkPasswordStrength(credentials.password)) {
      setErrors({
        password:
          "Password must be at least 8 characters with at least one uppercase, lowercase, number, and special character.",
      });
      return;
    }

    try {
      await emailSignup(credentials.email, credentials.password);
      // Successful signup, redirect or show a success message
    } catch (error) {
      setErrors({
        general: error.message || "An error occurred. Please try again later.",
      });
    }
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

          {errors.general && <p className="text-red-500">{errors.general}</p>}
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Sign Up
            </button>
          </div>
          <button className="underline text-blue-400">
            <Link to="/forgotPWD">Forgot Password</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
