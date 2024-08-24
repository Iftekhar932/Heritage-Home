import { createBrowserRouter } from "react-router-dom";

// components
import LoginPage from "../Components/LoginPage.jsx";
import Main from "../Components/Main.jsx";
import Form from "../Components/Form.jsx";
import Projects from "../Components/Projects.jsx";
import UploadImg from "../Components/UploadImg.jsx";
import AboutUs from "../Components/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/uploadImage",
    element: <UploadImg />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/dataCreateForm",
    element: <Form />,
  },
]);

export default router;
