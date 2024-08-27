import { createBrowserRouter } from "react-router-dom";

// components
import LoginPage from "../Components/LoginPage.jsx";
import Main from "../Components/Main.jsx";
import Projects from "../Components/Projects.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import Hero from "../Components/Hero.jsx";
import Cards from "../Components/Cards.jsx";
import Analytics from "../Components/Analytics.jsx";
import Footer from "../Components/Footer.jsx";
import CombinedForm from "../Components/CombinedForm.jsx";
import ForgotPassword from "../Components/ForgotPassword.jsx";
import Signup from "../Components/Signup.jsx";

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
      {
        path: "/!@$",
        element: <Signup />,
      },
      {
        path: "forgotPWD",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
