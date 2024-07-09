import React from "react";
import useFirebase from "../hooks/useFirebase";

const LoginPage = () => {
  const { handleGoogleSignIn, logOut } = useFirebase();

  return (
    <div className="flex h-screen items-center justify-center bg-[#000300]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-[#00df9a] border border-r-gray-900">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <button
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-bold"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
        <button
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-bold"
          onClick={logOut}
        >
          Out
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
