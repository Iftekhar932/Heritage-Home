import React from "react";
import Analytics from "./Components/Analytics";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
