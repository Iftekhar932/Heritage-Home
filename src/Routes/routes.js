import { createBrowserRouter } from "react-router-dom";

// components
import LoginPage from "../Components/LoginPage.jsx";
import Main from "../Components/Main.jsx";
import Form from "../Components/Form.jsx";
import Projects from "../Components/Projects.jsx";
import UploadImg from "../Components/UploadImg.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import Hero from "../Components/Hero.jsx";
import Cards from "../Components/Cards.jsx";
import Analytics from "../Components/Analytics.jsx";
import Footer from "../Components/Footer.jsx";
import CombinedForm from "../Components/CombinedForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Analytics />
            <Cards />
            {/* <Footer /> */}
          </>
        ),
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
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/dataCreateForm",
        element: <CombinedForm />,
      },
    ],
  },
]);

export default router;
